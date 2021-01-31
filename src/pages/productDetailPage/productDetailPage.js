import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import MyGallery from "../../components/productimagegalleryComponent/imageGalleryComp";
import "./productDetailPage.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CardCompItem from "../../components/cardComponent/cardcompItem";
import ReactReadMoreReadLess from "react-read-more-read-less";
import QuantityPicker from "../../components/quantitiyComp/quantityComp";
import LogoBanner from "../../components/logoBanner/logoBanner";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius. ";

function ProductDetail() {
  const [background, setBackground] = useState("white");

  const [title, setTitle] = useState("Select a Color");
  const setStyle = (background, title) => {
    setBackground(background);
    setTitle(title);
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
              <Breadcrumb.Item className="breadcrumb-default" href="/#home">
                OSF Theme
              </Breadcrumb.Item>

              <Breadcrumb.Item active>
                Archi Desk Accessory Pen Cup
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="stripe-headline product-detail">
            Archi Desk Accessory Pen Cup
          </h1>
        </Container>
        <Container>
          <div className="pdp-page">
            <Row>
              <Col xl="8" md="8">
                <div className="pdp-gallery">
                  <MyGallery />
                </div>
              </Col>
              <Col xl="4" md="4">
                <h1 className="pdp-title">$ 299.99</h1>
                <div>
                  <div className="App">
                    <header className="App-header"></header>
                    <div className="color-picker">
                      <span
                        className="change-dot"
                        style={{ background }}
                      ></span>
                      <DropdownButton
                        id="pdp-select-color"
                        className="format"
                        title={title}
                      >
                        <Dropdown.Item
                          className="color-picker"
                          onClick={() => setStyle("#b1e1d5", "Mint Green")}
                          as="button"
                        >
                          <div>
                            <span className="mint-green dot"></span> Mint Green
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="color-picker"
                          as="button"
                          onClick={() => setStyle("#585d61", "Dark Gray")}
                        >
                          <div>
                            <span className="dark-gray dot"></span>Dark Gray
                          </div>
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </div>

                <QuantityPicker />

                <ReactReadMoreReadLess
                  charLimit={100}
                  readMoreText={"Read more "}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  {longText}
                </ReactReadMoreReadLess>
                <div className="print">
                  {" "}
                  <Button
                    className="green add-to-cart print"
                    onClick={window.print}
                  >
                    Print
                  </Button>
                </div>

                <div className="socials-icons-set">
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "gray",
                      paddingRight: "30px",
                    }}
                  >
                    Share
                  </span>
                  <a
                    style={{ padding: "10px" }}
                    target="_blank"
                    href="https://www.facebook.com/OSFDigital/"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      size="md"
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
                      size="md"
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
                      size="md"
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
                      size="md"
                      className="icon-upload"
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tab-pdp">
            <Tabs className="tab-pdp" defaultActiveKey="description">
              <Tab
                className="tab-pdp"
                eventKey="description"
                title="Description"
              >
                <div className="tab-content">
                  <Row>
                    <Col>
                      <p>
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab
                className="tab-pdp"
                eventKey="additional-information"
                title="Additional Information"
              >
                <div className="tab-content">
                  <Row>
                    <Col>
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                      </p>
                      <p>
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab className="tab-pdp" eventKey="reviews" title="Reviews (3)">
                <div className="tab-content">
                  <Row>
                    <Col>
                      <p>
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </p>
                    </Col>
                    <Col>
                      <p>
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                      </p>
                      <p>
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
        <Container className="pdp-popular-items">
          <h1 className="stripe-headline" style={{ fontSize: "1.5rem" }}>
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
