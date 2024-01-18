import React, { useState } from "react";
import Large from "./components/Large";
import Small from "./components/Small";

const App = () => {
  const [currentImg, setCurrentImg] = useState("images/img-1.jpg");

  return (
    <>
      <div id="product">
        <Large currentImg={currentImg} />
        <Small setCurrentImg={setCurrentImg} currentImg={currentImg} />
      </div>
    </>
  );
};

export default App;
