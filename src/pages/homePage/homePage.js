import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CarouselComp from "../../components/carouselComp/carouselComp";
import discountimg from "../../assets/images/55img.jpg";
import { FaFacebookF } from "react-icons/fa";

function Homepage() {
    return (
        <>
         <Container>
        <div className="landing">
          <Row>
            <Col md={9}>
              <CarouselComp />
            </Col>
            <Col md={3}>
              <div>
                <img
                  className="discount"
                  src={discountimg}
                  height="10%"
                  alt=""
                ></img>
              </div>
              <div className="followtext followfacebook">
                Follow us on Facebook
              </div>
              <div className="followtext">
                Sed ut perspiciatis unde omnis iste natus error sit
              </div>
              <div className="text-center">
                <Button variant="outline-dark" className="facebook-button">
                  <FaFacebookF className="button-icons" />
                  FOLLOW
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

        </>
        );
}

export default Homepage;