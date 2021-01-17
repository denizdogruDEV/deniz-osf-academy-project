import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
 
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    );
  };
  return (
  
    <Container>
    
      <div className="footercontainer">
        <Row>
          <Col lg="2" md="6" xs="12">
            <h5>
              © Copyright <span>{new Date().getFullYear()}</span>
              <p>All Rights Reserved.</p>
            </h5>
            <h5>
              <strong>CONTACT</strong>
            </h5>
            <h5>
              Headquarters:
              <p>5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6 </p>
            </h5>
            <Mailto email="contact@osf-global.com" subject="Support request">
              <h5 className="mail-link">contact@osf-global.com</h5>
            </Mailto>
            <a href="tel:+1888-548-4344">
              <h5 className="mail-link">+1 (888) 548-4344</h5>
            </a>
          </Col>

          <Col lg="2" md="6" xs="12">
            <h5>
              <strong>CATEGORIES</strong>
            </h5>
            <ul>
              <li>
                <Link to="/notfound">Alcohol</Link>
              </li>
              <li>
                <Link to="/notfound">Art</Link>
              </li>
              <li>
                <Link to="/notfound">Books</Link>
              </li>
              <li>
                <Link to="/notfound">Drink</Link>
              </li>
              <li>
                <Link to="/notfound">Electronics</Link>
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6" xs="12">
            <ul className="noheadline">
              <li>
                {" "}
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/notfound">Jewelry</Link>
              </li>
              <li>
                <Link to="/notfound">Kids & Baby</Link>
              </li>
              <li>
                <Link to="/notfound">Men's Fashion</Link>
              </li>
              <li>
                <Link to="/notfound">Mobile</Link>
              </li>
              <li>
                <Link to="/notfound">Motorcycles</Link>
              </li>
              <li>
                <Link to="/notfound">Movies</Link>
              </li>
              <li>
                <Link to="/notfound">Music</Link>
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6" xs="12">
            <ul className="noheadline">
              <li>
                <Link to="/notfound">Sport</Link>
              </li>
              <li>
                <Link to="/notfound">Toys</Link>
              </li>
              <li>
                <Link to="/notfound">Travel</Link>
              </li>
              <li>
                <Link to="/notfound">Women's Fashion</Link>
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6" xs="12">
            <h5>
              <strong>ABOUT</strong>
            </h5>
            <ul>
              <li>
                <Link to="/notfound">About us</Link>
              </li>
              <li>
                <Link to="/notfound">Delivery</Link>
              </li>
              <li>
                <Link to="/notfound">Testimonials</Link>
              </li>
              <li>
                <Link to="/notfound">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col lg="2" md="6" xs="12" className="footer-icons">
            <div className="footer-icon-set">
              <a target="_blank" href="https://www.facebook.com/OSFDigital/">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  className="icon-upload"
                />
              </a>
            </div>
            <div className="footer-icon-set">
              <a target="_blank" href="https://myaccount.google.com/">
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  size="lg"
                  className="icon-upload"
                />
              </a>
            </div>
            <div className="footer-icon-set">
              <a target="_blank" href="https://twitter.com/osfdigital/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  className="icon-upload"
                />
              </a>
            </div>
            <div className="footer-icon-set">
              <a target="_blank" href="https://pinterest.com/">
                <FontAwesomeIcon
                  icon={faPinterestP}
                  size="lg"
                  className="icon-upload"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
   
    </Container>
 
  
  );
}

export default Footer;
