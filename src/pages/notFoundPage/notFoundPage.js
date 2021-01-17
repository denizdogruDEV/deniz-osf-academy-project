import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./notFoundPage.scss";

function NotFound() {
  return (
    <>
      <div className="gray-bg">
        <Container>
          <div className="breadcrumb-box">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-default" href="/#home">
                Home
              </Breadcrumb.Item>

              <Breadcrumb.Item active>404</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="fourofour">404</h1>
        </Container>
        <Container>
          <div className="white-bg">
            <div className="sorry-text">
              <div className="mark-bg">
                <img
                  src={require("../../assets/images/exclamation_mark.png")}
                />
              </div>
              <div className="oops-text">Oops!</div>
              <div className="sorry-paragraph">
                <h3> Sorry, this page could not be found!</h3>
                <p>
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.{" "}
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.{" "}
                </p>
                <div className="return-home-link">
                  <a href="/#home">Return to Homepage</a>
                </div>
                <h3>Search our site</h3>

                <div className="search-form-box">
                  <Form.Control
                    className="subscribe-form"
                    size="sm"
                    type="search"
                    placeholder="SEARCH"
                  />

                  <FontAwesomeIcon
                    className="icon-upload"
                    icon={faSearch}
                    size="lg"
                    flip="horizontal"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NotFound;
