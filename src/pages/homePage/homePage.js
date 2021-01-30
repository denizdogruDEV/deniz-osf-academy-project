import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CarouselComp from "../../components/carouselComp/carouselComp";
import discountimg from "../../assets/images/55img.jpg";
import { FaFacebookF } from "react-icons/fa";
import CookieComp from "../../components/cookieComp/cookieComp";
import "./homePage.scss";
import CardComp from "../../components/cardComponent/cardComponent";
import LogoBanner from "../../components/logoBanner/logoBanner";
import FeaturedSlider from "../../components/featuredProductsComp/featuredProductsCompArray";

function Homepage() {
  return (
    <>
      <Container>
        <CookieComp />
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

      <div className="darkbackground">
        <Container>
          <div className="title">
            <h2 className="stripe-headline white-headline">Popular Items</h2>
          </div>
          <div className="card-gallery">
            <CardComp />
          </div>
        </Container>
      </div>
      <Container fluid className="bannerosf">
        <div className="bannerosf-text">
          <h1 className="bannerosf-text">Banner OSF Themes</h1>

          <h3 className="bannerosf-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium
          </h3>
        </div>
      </Container>
      <div className="darkbackground">
        <Container>
          <FeaturedSlider />
        </Container>
      </div>
      <div></div>
      <div className="graybackground">
        <LogoBanner />
      </div>
    </>
  );
}

export default Homepage;
