import React, { useState } from "react";
import Thumbnail from "./components/Thumbnail";
import Title from "./components/Title";
import Description from "./components/Description";

const App = () => {
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

export default App;
