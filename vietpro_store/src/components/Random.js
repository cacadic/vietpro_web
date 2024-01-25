import React from "react";
import Number from "./Number";
import RandomButtonGroup from "./RandomButtonGroup";

const Random = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 text-center">
          <div id="main">
            <Number />
            <RandomButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
