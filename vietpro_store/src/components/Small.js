import React from "react";

const imgsUrl = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpg"];

const Small = ({ setCurrentImg, currentImg }) => {
  return (
    <div id="small" style={{ cursor: "pointer" }}>
      {imgsUrl.map((imgUrl) => (
        <img
          key={imgUrl}
          className={currentImg === imgUrl ? "active" : ""}
          src={imgUrl}
          onClick={() => setCurrentImg(imgUrl)}
        />
      ))}
    </div>
  );
};

export default Small;
