import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./assets/dog1.png";
import image2 from "./assets/dog2.png";
import image3 from "./assets/dog3.png";
import "./Slider.css"; // Import the CSS file
import Button from "react-bootstrap/Button";

function Slider() {
  return (
    <Carousel className="slider-carousel">
      <Carousel.Item>
        <img src={image1} alt="Slide" className="slider-img" />
        <Button href="/error" style={button}>
          Read more
        </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Slide" className="slider-img" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Slide" className="slider-img" />
      </Carousel.Item>
    </Carousel>
  );
}

const button = {
  backgroundColor: "#035F48",
  border: "none",
  borderWidth: "2px",
  fontSize: "18px",
  padding: "8px 25px",
};

export default Slider;
