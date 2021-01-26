import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Col, Button, Container } from "react-bootstrap";
import "./servicesCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

// this component have been used for services page with map & fetch functions from local JSON file

const ServiceCards = () => {
  const [items, setitems] = useState([]);
  const [visible, setVisible] = useState(20);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    fetch("./servicesItems.json")
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);
  return (
    <Container className="service-cards-container">
      {items.slice(0, visible).map((item) => (
        <Col lg="3" md="6">
          <Card className="service-cards">
            <Card.Img className="services-images" src={item.image} />
            <Card.Body className="services-cards-body">
              <Card.Title className="services-cards-headline">
                {item.maintitle}
              </Card.Title>
              <Card.Text>{item.subtitle}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      <div className="justify-center-buttons load-more-button">
        {visible < items.length && (
          <Button variant="success" onClick={showMoreItems}>
            Load More
          </Button>
        )}
      </div>
    </Container>
  );
};

export default ServiceCards;
