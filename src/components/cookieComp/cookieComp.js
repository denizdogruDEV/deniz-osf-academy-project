import React, { useEffect } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Col } from "react-bootstrap";
import Delay from "react-delay";

export default function CookieComp() {
  return (
    <Delay wait={10000}>
      <CookieConsent
        debug={true}
        location="bottom"
        buttonText="ACCEPT"
        cookieName="myAwesomeCookieName2"
        enableDeclineButton
        flipButtons
        declineButtonText="X"
        cookieValue={true}
        declineCookieValue={true}
        style={{ background: "white", borderRadius: "10px" }}
        buttonStyle={{
          background: "#84bc22",
          fontSize: "1rem",
          color: "white",
        }}
      >
        <Col lg="10">
          <h4>This website uses cookies.</h4>{" "}
          <p>
            OSF uses its own and third-party cookies for statistical purposes,
            to know your preferences, for website performance and interaction
            with social media offering publicity tailored to your interests. If
            you continue browsing, we consider that you accept its use. You can
            expand this information consulting our{" "}
            <span>Cookies Policy Page.</span>
          </p>
        </Col>
      </CookieConsent>
    </Delay>
  );
}
