import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

// this component has been used for homepage popular items, default variation.

class CardCompItem extends React.Component {
  render() {
    var { maintitle, subtitle, image } = this.props;
    return (
      <Col lg="3" md="6">
        <Card className="green-hover">
          <Card.Img
            className="popular-item-images"
            src={require("../../assets/images/popular-items/popular-item-" +
              image +
              ".jpg")}
          />
          <Card.Body>
            <Card.Title>{maintitle}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
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
    );
  }
}

export default CardCompItem;
