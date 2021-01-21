import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Col, Button, Container,Row } from "react-bootstrap";
import "./cardCompPopular.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

// this component has been used for popular items on homepage, for load more function

const PopularLoadMore = () => {
  const [items, setitems] = useState([]);
  const [visible, setVisible] = useState(0);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    fetch("./popularItems.json")
      .then((res) => res.json())
      .then((data) => setitems(data));
  }, []);
  return (
    <div>
      <Row>

      {items.slice(0, visible).map((item) => (
        <Col lg="3" md="6">
          <Card className="green-hover">
            <Card.Img className="popular-image-card" src={item.image} />
            <Card.Body>
              <Card.Title>{item.maintitle}</Card.Title>
              <Card.Text>{item.subtitle}</Card.Text>
              <div className="hover-buttons">
                <Button className="add-buttons">
                  <FontAwesomeIcon icon={faPlus} />{" "}
                </Button>
                <Button className="add-buttons red">
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
      <div className="justify-center-buttons">
        {visible < items.length && (
          <Button className="load" onClick={showMoreItems}>
            Load More <FontAwesomeIcon icon={faRedoAlt} className="rotate-270"/>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PopularLoadMore;
