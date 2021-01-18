import React, { useState, useCallback } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Button } from "react-bootstrap";
import popularitemb from "../../assets/images/popular-items/popular-item-2.jpg";
import popularitemd from "../../assets/images/popular-items/popular-item-4.jpg";
import CardCompItem from "./cardcompItem";
import "./cardComponent.css";
import PopularLoadMore from "./cardComponent-2/cardCompPopular";
import CardCompStatic from "./cardComponent-3/cardCompStatic";
import CardCompSingle from "./cardComponent-4/cardCompSingle";

//this component is a parent component for homepage popular items

function CardComp() {
  return (
    <>
      <Row>
        <CardCompItem
          maintitle="Kristina Dam Oak Table With White Marble Top"
          subtitle="$ 799.55"
          image="1"
        />

        <CardCompSingle
          maintitle="Kristina Dam Oak Table With White Marble Top"
          image="item-10"
        />

        <CardCompItem
          maintitle="Activate Facial Mask and Charcoal Soap"
          subtitle="$ 129.55"
          image="3"
        />
        <Col lg="3" md="6" className="item-hover">
          <Card>
            <Card.Img variant="top" src={popularitemd} />
            <Card.Body style={{ height: "114px" }}>
              <Card.Title>Cocktail Table Walnut </Card.Title>
              <Card.Title>| YES </Card.Title>
              <Card.Text>$ 299.99</Card.Text>
              <div className="hover-buttons">
                <div className="text-hoverbutton">
                  <Button>Add</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <CardCompItem
          maintitle="Kristina Dam Oak Table With White Marble Top"
          subtitle="$ 799.55"
          image="5"
        />
        <CardCompItem
          maintitle="Hay - About A Lounge Chair AAL 93"
          subtitle="$ 129.55"
          image="6"
        />
        <CardCompItem
          maintitle="Activate Facial Mask and Charcoal Soap"
          subtitle="$ 129.55"
          image="7"
        />

        <CardCompStatic image="static-item" />
      </Row>
      <div className="load-more-pop">
        <PopularLoadMore />
      </div>
    </>
  );
}

export default CardComp;
