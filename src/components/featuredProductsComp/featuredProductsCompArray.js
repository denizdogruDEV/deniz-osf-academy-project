import React, { useState, useEffect } from "react";
import "./featuredProductsComp.css";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { Col, Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function FeaturedSlider() {

  let slider;

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("./servicesItems.json")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);


  const prevSlider = () => {
    slider.slickPrev();
  };

  const nextSlider = () => {
    slider.slickNext();
  };
  var settings = {
    infinite: false,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autplayspeed: 5000,

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
        <h1 className="white-headline">Featured Products</h1>
       
       
        <h3 className="products-text">
          Unde omnis iste natus error sit voluptatem
        </h3>
      </div>
      <div className="product-arrows">
      <button className="product-arrow" onClick={prevSlider}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="diagonal-box">
        <div className="diagonal-line line-left"></div>
        <div className="diagonal-line"></div>
        <div className="diagonal-line"></div>
      </div>
      <button className="product-arrow" onClick={nextSlider}>
      <FontAwesomeIcon icon={faChevronRight} />
        </button>
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
                  <Card className="featured-cards-item">
                    <Card.Img
                      className="featured-card-images"
                      src={current.image}
                    />
                    <Card.Body className="services-cards-body">
                      <Card.Title className="services-cards-headline">
                        {current.maintitle}
                      </Card.Title>
                      <Card.Text className="featured-card-category">
                        {current.category}
                      </Card.Text>
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

export default FeaturedSlider;
