import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../../img/img-1.jpg";
import slide2 from "../../../img/img-2.jpg";
import slide3 from "../../../img/img-3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
