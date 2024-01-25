import React from "react";
import Thumbnail from "./Thumbnail";
import Title from "./Title";
import Description from "./Description";

const Form = () => {
  return (
    <div id="main">
      <div className="content-item">
        <Thumbnail />
        <Title />
        <Description />
      </div>
    </div>
  );
};

export default Form;
