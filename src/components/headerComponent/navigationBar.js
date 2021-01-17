import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Col,
} from "react-bootstrap";
import Logo from "../../assets/images/logo_img.png";
import DropdownComp from "./dropdownComp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import MyVerticallyCenteredModal from "./loginModal/loginModalComp";


export default function Navigationbar() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      
        <div className="dropdown-background">
          <Container>
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand href="/#home">
                <img
                  src={Logo}
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                  alt="OSF Academy Logo"
                />
              </Navbar.Brand>
              <Link to="/#home">
                <Col xs lg="1" className="brand-name-custom">
                  <div className="brand-first">OSF</div>
                  <div className="brand-second">Academy</div>
                </Col>
              </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <NavDropdown title="SERVICES" renderMenuOnMount={true}>
                  <DropdownComp />
                </NavDropdown>
                <Nav.Link href="/notfound">COMPANY</Nav.Link>
                <Nav.Link href="/notfound">LIBRARY</Nav.Link>
                <Nav.Link href="/notfound">CONTACT US</Nav.Link>
                <NavDropdown title="EN" renderMenuOnMount={true}>
                  <NavDropdown.Item href="#action/3.1">TR</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">UA</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="$ US" renderMenuOnMount={true}>
                  <NavDropdown.Item href="#action/3.1">$ TR</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">$ US</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">₴ UA</NavDropdown.Item>
                </NavDropdown>
                <div className="navbar-icon-set">
                  <FontAwesomeIcon
                    className="icon-upload"
                    icon={faSearch}
                    size="lg"
                    flip="horizontal"
                  />
                </div>
                <div className="navbar-icon-set">
                  <Button
                    variant="secondary disabled"
                    onClick={() => setModalShow(true)}
                  >
                    <FontAwesomeIcon
                      className="icon-upload"
                      transform="grow-4 "
                      icon={faUser}
                      size="lg"
                    />{" "}
                  </Button>
  
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                <div className="navbar-icon-set">
                  <FontAwesomeIcon
                    icon={faHeart}
                    size="lg"
                    className="icon-upload"
                  />
                </div>
                <div className="navbar-icon-set">
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    size="lg"
                    className="icon-upload"
                  />
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
  
    );
  }
  