import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import TabComp from "../../components/tabComponent/tabComp";
import MyGallery from "../../components/productimagegalleryComponent/imageGalleryComp";
import "./productDetailPage.scss";
import CardCompItem from "../../components/cardComponent/cardcompItem";
import ReactReadMoreReadLess from "react-read-more-read-less";
import QuantityPicker from "../../components/quantitiyComp/quantityComp";
import LogoBanner from "../../components/logoBanner/logoBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ColorPicker from "./colorPicker";
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";

function ProductDetail() {
  return (
    <>
      <div className="gray-bg">
        <Container>
          <div className="breadcrumb-box">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-default" href="/#home">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-default" href="/#home">
                OSF Theme
              </Breadcrumb.Item>

              <Breadcrumb.Item active>
                Archi Desk Accessory Pen Cup
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="fourofour product-detail">
            Archi Desk Accessory Pen Cup
          </h1>
        </Container>
        <Container>
          <div className="pdp-page">
            <Row>
              <Col xl="8">
                <div className="pdp-gallery">
                  <MyGallery />
                </div>
              </Col>
              <Col xd="4">
                <h1 className="pdp-title">$ 299</h1>
                <div>
                  <ColorPicker />
                </div>
                <div className="quantity-button">
                  <QuantityPicker min={0} max={4} />
                  <Button className="green add-to-cart">Add to Cart</Button>
                </div>
                <ReactReadMoreReadLess
                  charLimit={100}
                  readMoreText={"Read more "}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  {longText}
                </ReactReadMoreReadLess>
                <div className="socials-icons-set">
                  <h6 style={{ fontSize: "0.8rem", color: "lightgray" }}>
                    Share
                  </h6>
                  <a
                    style={{ padding: "10px" }}
                    target="_blank"
                    href="https://www.facebook.com/OSFDigital/"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      size="lg"
                      className="icon-upload"
                    />
                  </a>

                  <a
                    style={{ padding: "10px" }}
                    target="_blank"
                    href="https://myaccount.google.com/"
                  >
                    <FontAwesomeIcon
                      icon={faGooglePlusG}
                      size="lg"
                      className="icon-upload"
                    />
                  </a>

                  <a
                    style={{ padding: "10px" }}
                    target="_blank"
                    href="https://twitter.com/osfdigital/"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="lg"
                      className="icon-upload"
                    />
                  </a>
                  <a
                    style={{ padding: "10px" }}
                    target="_blank"
                    href="https://pinterest.com/"
                  >
                    <FontAwesomeIcon
                      icon={faPinterestP}
                      size="lg"
                      className="icon-upload"
                    />
                  </a>
                </div>
              </Col>
            </Row>

            <div>
              <TabComp />
            </div>
          </div>
        </Container>
        <Container className="pdp-popular-items">
          <h1 className="fourofour" style={{ fontSize: "1.5rem" }}>
            Popular Items
          </h1>
          <Row>
            <CardCompItem
              maintitle="Kristina Dam Oak Table With White Marble Top"
              subtitle="$ 799.55"
              image="1"
            />
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
          </Row>
        </Container>
      </div>
      <div className="graybackground">
        <LogoBanner />
      </div>
    </>
  );
}

export default ProductDetail;
