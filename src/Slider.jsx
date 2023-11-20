// Slider.js

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./assets/dog1.png";
import image2 from "./assets/dog2.png";
import image3 from "./assets/dog3.png";
import "./Slider.css"; // Import the CSS file
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Slider() {
  const [likeCount1, setLikeCount1] = useState(0);
  const [likeCount2, setLikeCount2] = useState(0);
  const [likeCount3, setLikeCount3] = useState(0);

  const handleLike1 = () => {
    setLikeCount1(likeCount1 + 1);
  };

  const handleLike2 = () => {
    setLikeCount2(likeCount2 + 1);
  };

  const handleLike3 = () => {
    setLikeCount3(likeCount3 + 1);
  };

  return (
    <Carousel className="slider-carousel">
      <Carousel.Item>
        <img src={image1} alt="Slide" className="slider-img" />
        <Button style={button} onClick={handleLike1}>
          <FontAwesomeIcon icon={faHeart} />
          {` ${likeCount1}`}
        </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Slide" className="slider-img" />
        <Button style={button} onClick={handleLike2}>
          <FontAwesomeIcon icon={faHeart} />
          {` ${likeCount2}`}
        </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Slide" className="slider-img" />
        <Button style={button} onClick={handleLike3}>
          <FontAwesomeIcon icon={faHeart} />
          {` ${likeCount3}`}
        </Button>
      </Carousel.Item>
    </Carousel>
  );
}

const button = {
  position: "absolute",
  top: "5%",
  right: "15%",
  backgroundColor: "#e89059",
  border: "none",
  fontSize: "16px",
};

export default Slider;
