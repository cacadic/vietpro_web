import React, { useState } from "react";

const Title = () => {
  const [title, setTitle] = useState("What is Lorem Ipsum?");
  const [isFocus, setIsFocus] = useState(false);

  return isFocus ? (
    <input
      type="text"
      value={title}
      onBlur={() => setIsFocus(false)}
      onChange={(e) => setTitle(e.target.value)}
      autoFocus={isFocus}
      style={{ fontWeight: "bold" }}
    />
  ) : (
    <h4 onDoubleClick={() => setIsFocus(true)}>{title}</h4>
  );
};

export default Title;
