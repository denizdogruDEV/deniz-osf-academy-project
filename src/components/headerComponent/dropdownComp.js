import React from "react";
import {
  Container,
  Row,
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Col,
} from "react-bootstrap";
export default function DropdownComp() {
  return (
    <div className="dropdown-box">
      <Container>
        <Row>
          <Col>
            <h4>PRODUCT CATEGORIES</h4>
            <NavDropdown.Item href="/notfound">Accessories</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Alcohol</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Art</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Books</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Drink</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Flowers&Plants</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Food</NavDropdown.Item>
          </Col>
          <Col>
            <div className="no-category">
              <NavDropdown.Item href="/notfound">Gadgets</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Garden</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Grocery</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Home</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Kids & Baby</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Man' Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Mobile</NavDropdown.Item>
            </div>
          </Col>
          <Col>
            <div className="no-category">
              <NavDropdown.Item href="/notfound">Motorcycle</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Movies</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Music</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Office</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Pets</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Romantic</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Sport</NavDropdown.Item>
              <NavDropdown.Item href="/notfound">Toys</NavDropdown.Item>
            </div>
          </Col>
          <Col>
            <h4>SALE</h4>
            <NavDropdown.Item href="/notfound">Accessories</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Alcohol</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Art</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Books</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Drink</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Flowers&Plants</NavDropdown.Item>
            <NavDropdown.Item href="/notfound">Food</NavDropdown.Item>
          </Col>
          <Col>
            <div>
              <img
                src={require("../../assets/images/nav_img.jpg")}
                width="250px"
                height="280px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
