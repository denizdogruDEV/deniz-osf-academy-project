import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ServiceCards from "../../components/cardComponent/cardComponent-1/serviceCards";
import FeaturedSlider from "../../components/featuredProductsComp/featuredProductsCompArray";
import { Form } from "react-bootstrap";

function Services() {
  return (
    <>
      <div className="gray-bg">
        <Container>
          <div className="breadcrumb-box">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-default" href="/#home">
                Home
              </Breadcrumb.Item>

              <Breadcrumb.Item active>Category Landing Service</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="stripe-headline">Services</h1>
          <Container>
            <div className="white-bg-form">
              <Row>
                <Col>
                  <Form.Label>Price</Form.Label>
                  <Form.Control as="select">
                    <option>0-10.000</option>
                    <option>10.000 - 50.000</option>
                    <option>50.000 - 100.000</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label> Brands</Form.Label>
                  <Form.Control as="select">
                    <option>Ukraine Sport</option>
                    <option>Turkey Tigers</option>
                    <option>Russian Dolls</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Size</Form.Label>
                  <Form.Control as="select">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XLarge</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Colors</Form.Label>
                  <Form.Control as="select">
                    <option>Black</option>
                    <option>White</option>
                    <option>Red</option>
                    <option>Purple</option>
                    <option>None</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Sort by</Form.Label>
                  <Form.Control as="select">
                    <option>Price</option>
                    <option>Lowest Price</option>
                    <option>Popularity</option>
                    <option>Top Seller</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label>Show</Form.Label>
                  <Form.Control as="select">
                    <option>16 per page</option>
                    <option>32 per pagee</option>
                  </Form.Control>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
        <ServiceCards />
      </div>

      <div className="darkbackground">
        <Container>
          <FeaturedSlider />
        </Container>
      </div>
    </>
  );
}

export default Services;
