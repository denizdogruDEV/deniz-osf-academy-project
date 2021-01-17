import React from "react";
import Countdown from "../../components/countDownComp/countDownComp";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./releasePage.scss"

export default function Release() {
  return (
    <>
      <div className="gray-bg">
        <Container>
          <div className="white-bg">
            <div className="countdown-text">
              <h1 className="countdown-headline" style={{ color: "black" }}>
                We Will Release OSF Academy
              </h1>       
              <p>
                We are working hard and estimated release time products below.</p>
                <p>
                Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat non
                lectus imper
              </p>{" "}
            </div>
            <div>
              <Countdown
                timeTillDate="03 03 2021, 9:00 am"
                timeFormat="MM DD YYYY, h:mm a"
              />
              <div className="subscribe-box">
                <div className="email-submission">
                  <Form.Control
                    className="subscribe-form"
                    size="sm"
                    type="email"
                    placeholder="Enter your email to receive latest announcements"
                  />
                  <Button className="button-submission">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="submission-sent"
                      size="lg"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
