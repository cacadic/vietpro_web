import React, { useState } from "react";
import Slide from "./components/Slide";
import SlideButton from "./components/SlideButton";

const App = () => {
  const [slide, setSlide] = useState(1);

  return (
    <>
      <Slide slide={slide} />
      <SlideButton setSlide={setSlide} />
    </>
  );
};

export default App;
