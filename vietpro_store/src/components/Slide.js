import React from "react";

const Slide = ({ slide = 1 }) => {
  return (
    <div id="slide">
      <div id="slide-img">
        <img src={`images/banner-${slide}.jpg`} />
      </div>
    </div>
  );
};

export default Slide;
