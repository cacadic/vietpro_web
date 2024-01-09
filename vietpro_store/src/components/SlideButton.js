import React from "react";

const SlideButton = ({ setSlide }) => {
  return (
    <p id="slide-num">
      <a href="#" onClick={() => setSlide(1)}>
        1
      </a>
      <a href="#" onClick={() => setSlide(2)}>
        2
      </a>
      <a href="#" onClick={() => setSlide(3)}>
        3
      </a>
    </p>
  );
};

export default SlideButton;
