import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";


// const Styles = styled.div`
//   h2 {
//     color: white;
//     font-weight: bold;
//     font-size: 1.1rem;
//   }

//   p {
//     color: #868380;


function LogoBanner() {
  return (
  
      <Container>
        <Row>
          <Col md="4">
            <div className="logo-banner">
              <img
                src={require("../../assets/images/delivery_icon.png")}
                width="60"
                height="60"
              />

              <div className="banner-text-logo">
                <h2>FOCUS</h2>

                <p>
                  Our unwavering focus on superior service delivery and building
                  next generation competencies
                </p>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="logo-banner">
              <img
                src={require("../../assets/images/arrows_icon.png")}
                width="60"
                height="60"
              />

              <div className="banner-text-logo">
                <h2>METHOD</h2>

                <p>
                  A standardized methodology designed to deliver measurable
                  business results and predictable costs
                </p>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="logo-banner">
              <img
                src={require("../../assets/images/clipboard_icon.png")}
                width="60"
                height="60"
              />

              <div className="banner-text-logo">
                <h2>KNOWLEDGE</h2>

                <p>
                  A highly skilled, proactive workforce that reliably improves
                  each client’s ROI while mitigating their business risk
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
   
  );
}

export default LogoBanner;
