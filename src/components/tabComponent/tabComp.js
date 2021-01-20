import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function TabComp() {
  return (
    <div>
      <Tabs defaultActiveKey="description">
        <Tab eventKey="description" title="Description">
          <Row>
            <Col>
              <p>
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </Col>
            <Col>
              <p>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="additional-information" title="Additional Information">
          <Row>
            <Col>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </Col>
            <Col>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis,
              </p>
              <p>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="reviews" title="Reviews(3)">
          <Row>
            <Col>
              <p>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </Col>
            <Col>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis,
              </p>
              <p>
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu.
              </p>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabComp;
