import React, { useState, useEffect } from "react";
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

  const handleLike = (likeCountState, setLikeCount, storageKey) => {
    const hasLiked = JSON.parse(localStorage.getItem(storageKey));
    if (hasLiked) {
      // If already liked, unlike by decrementing count and updating storage
      setLikeCount(likeCountState - 1);
      localStorage.setItem(storageKey, JSON.stringify(false));
    } else {
      // If not liked, like by incrementing count and updating storage
      setLikeCount(likeCountState + 1);
      localStorage.setItem(storageKey, JSON.stringify(true));
    }
  };

  useEffect(() => {
    // Initialize like status from storage on component mount
    const hasLiked1 = JSON.parse(localStorage.getItem("hasLiked1"));
    if (hasLiked1) {
      setLikeCount1(likeCount1 + 1);
    }

    const hasLiked2 = JSON.parse(localStorage.getItem("hasLiked2"));
    if (hasLiked2) {
      setLikeCount2(likeCount2 + 1);
    }

    const hasLiked3 = JSON.parse(localStorage.getItem("hasLiked3"));
    if (hasLiked3) {
      setLikeCount3(likeCount3 + 1);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Carousel className="slider-carousel">
      <Carousel.Item>
        <img src={image1} alt="Slide" className="slider-img" />
        <Button
          style={button}
          onClick={() => handleLike(likeCount1, setLikeCount1, "hasLiked1")}
        >
          <FontAwesomeIcon icon={faHeart} />
          {` ${likeCount1}`}
        </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Slide" className="slider-img" />
        <Button
          style={button}
          onClick={() => handleLike(likeCount2, setLikeCount2, "hasLiked2")}
        >
          <FontAwesomeIcon icon={faHeart} />
          {` ${likeCount2}`}
        </Button>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Slide" className="slider-img" />
        <Button
          style={button}
          onClick={() => handleLike(likeCount3, setLikeCount3, "hasLiked3")}
        >
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
