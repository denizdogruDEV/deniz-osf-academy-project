import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Col, Button, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

function MobileSlider() {
  let slider;

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("./servicesItems.json")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  var settings = {
    infinite: true,
    speed: 4000,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autplayspeed: 8000,
    useTransform: false,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="white-headline">
        <h1 className="white-headline stripe-headline">Featured Products</h1>
      </div>

      <div className="featured-container">
        {suggestions.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Slider ref={(c) => (slider = c)} {...settings}>
            {suggestions.map((current) => (
              <div>
                <Card className="service-cards">
                  <Link to="/productdetail">
                    <Card.Img className="services-images" src={current.image} />
                  </Link>
                  <Card.Body className="services-cards-body">
                    <Card.Title
                      as="a"
                      href="/productdetail"
                      className="services-cards-headline"
                    >
                      {current.maintitle}
                    </Card.Title>

                    <Card.Text>{current.subtitle}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </Container>
  );
}

export default MobileSlider;
