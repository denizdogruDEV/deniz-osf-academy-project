import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./cardCompSingle.scss";

// this component has been used for homepage popular items, default variation.

class CardCompSingle extends React.Component {
  render() {
    var { maintitle, image } = this.props;
    return (
      <Col lg="3" md="6">
        <Card className="product-card-single">
          <Card.Img
            className="
            popular-image-card"
            href="/productdetail"
            src={require("../../../../public/items/" + image + ".jpg")}
          />
          <Card.Body>
            <Card.Title as="a" href="/productdetail">
              {maintitle}
            </Card.Title>
            <div className="hover-buttons">
              <Button className="add-buttons">
                <FontAwesomeIcon icon={faPlus} />{" "}
              </Button>
              <Button className="add-buttons red">
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>
            <div className="dual-button">
              <div className="half-text">
                <h5 className="green-text">$659.55</h5>
              </div>
              <Button className="half-button">BUY NOW</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default CardCompSingle;
