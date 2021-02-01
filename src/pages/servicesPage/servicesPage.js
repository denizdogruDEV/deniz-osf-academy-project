import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ServiceCards from "../../components/cardComponent/cardComponent-1/serviceCards";
import FeaturedSlider from "../../components/featuredProductsComp/featuredProductsCompArray";
import { Form } from "react-bootstrap";

function Services() {
  const [background, setBackground] = useState("#fdfdfd");
  const setStyle = (background) => {
    setBackground(background);
  };
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
          <h1 className="stripe-headline mixed-headline">Services</h1>
          <Container>
            <div className="white-bg-form" style={{ background }}>
              <Row className="filters">
                <Col md="1">
                  <Form.Label>Price</Form.Label>{" "}
                </Col>
                <Col md="3">
                  <Form.Control as="select">
                    <option>0-10.000</option>
                    <option>10.000 - 50.000</option>
                    <option>50.000 - 100.000</option>
                  </Form.Control>
                </Col>
                <Col md="1">
                  <Form.Label> Brands</Form.Label>
                </Col>
                <Col md="3">
                  <Form.Control as="select">
                    <option>Ukraine Sport</option>
                    <option>Turkey Tigers</option>
                    <option>Russian Dolls</option>
                  </Form.Control>
                </Col>
                <Col md="1">
                  <Form.Label>Size</Form.Label>
                </Col>
                <Col md="3">
                  <Form.Control as="select">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XLarge</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row className="filters">
                <Col md="1">
                  <Form.Label>Color</Form.Label>
                </Col>
                <Col md="3">
                  <input
                    onClick={() => setStyle("white")}
                    type="button"
                    className="custom-colors"
                    id="color1"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#43c0cf")}
                    type="button"
                    className="custom-colors"
                    id="color2"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#3d402f")}
                    type="button"
                    className="custom-colors"
                    id="color3"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#4aaf00")}
                    type="button"
                    className="custom-colors"
                    id="color4"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#315bbd")}
                    type="button"
                    className="custom-colors"
                    id="color5"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#ec6115")}
                    type="button"
                    className="custom-colors"
                    id="color6"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#dc041d")}
                    type="button"
                    className="custom-colors"
                    id="color7"
                    name="colors"
                  />
                  <input
                    onClick={() => setStyle("#efead7")}
                    type="button"
                    className="custom-colors"
                    id="color8"
                    name="colors"
                  />
                </Col>
                <Col md="1">
                  <Form.Label>Sort by</Form.Label>
                </Col>
                <Col md="3">
                  <Form.Control as="select">
                    <option>Price</option>
                    <option>Lowest Price</option>
                    <option>Popularity</option>
                    <option>Top Seller</option>
                  </Form.Control>
                </Col>
                <Col md="1">
                  <Form.Label>Show</Form.Label>
                </Col>
                <Col md="3">
                  <Form.Control as="select">
                    <option>16 per page</option>
                    <option>32 per page</option>
                  </Form.Control>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
        <div className="text-center">
          <h5 className="results">12,931 results in apparel</h5>
        </div>
        <ServiceCards />
      </div>

      <div className="darkbackground remove-mobile">
        <Container>
          <FeaturedSlider />
        </Container>
      </div>
    </>
  );
}

export default Services;
