import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./cardCompStatic.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserClock } from "@fortawesome/free-solid-svg-icons";

// this component has been used for homepage popular items, static variation with pink / purple gradient

class CardCompStatic extends React.Component {
  render() {
    var { image } = this.props;
    return (
      <Col lg="3" md="6">
        <Card>
          <Card.Img
            className="pink-overlay-image"
            src={require("../../../../public/items/" + image + ".jpg")}
          />
          <div className="overlay"></div>
          <div className="overlay-text">
            <p> My dragons are misbehaving again. Unbelieveable!</p>
            <FontAwesomeIcon
              className="green-icon"
              icon={faUserClock}
              size="lg"
            />
            <span className="hour-ago">5 H AGO</span>
          </div>
        </Card>
      </Col>
    );
  }
}

export default CardCompStatic;
