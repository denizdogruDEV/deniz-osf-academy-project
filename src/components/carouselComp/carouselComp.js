import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import "./carouselComp.scss";
import sliderimg from "../../assets/images/slider_item.jpg";
import sliderimg2 from "../../assets/images/slider_img_2.jpg";
import sliderimg3 from "../../assets/images/slider_img_3.jpg";

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderimg} alt="First slide" />
        <Carousel.Caption className="left-text">
          <h3 className="carousel-text">
            Control and manage any device with cloud solutions
          </h3>
          <div className="carousel-text-paragraph">
            <p>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
          </div>
          <div className="text-left">
            <Button variant="outline-light" href="/services" >
              View More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderimg2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="carousel-text">
            Control and manage any device with cloud solutions
          </h3>
          <div className="carousel-text-paragraph">
            <p>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
          </div>
          <Button variant="outline-light" href="/services">
            View More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderimg3} alt="Third slide" />

        <Carousel.Caption className="right-text">
          <h3 className="carousel-text">
            Control and manage any device with cloud solutions
          </h3>
          <div className="carousel-text-paragraph">
            <p>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
          </div>
          <div className="text-right">
            <Button variant="outline-light" href="/services">
              View More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderimg} alt="Fourth slide" />
        <Carousel.Caption className="left-text">
          <h3 className="carousel-text">
            Control and manage any device with cloud solutions
          </h3>
          <div className="carousel-text-paragraph">
            <p>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
          </div>
          <div className="text-left">
            <Button variant="outline-light" href="/services" ç>
              View More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderimg3} alt="Fifth slide" />

        <Carousel.Caption className="right-text">
          <h3 className="carousel-text">
            Control and manage any device with cloud solutions
          </h3>
          <div className="carousel-text-paragraph">
            <p>
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </p>
          </div>
          <div className="text-right">
            <Button variant="outline-light" href="/services">
              View More
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
