import React, { useEffect, useState } from "react";

const initTitle = "What is Lorem Ipsum?";

const Title = () => {
  const [title, setTitle] = useState(initTitle);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !isFocus && title === "" && setTitle(initTitle);
  }, [title, isFocus]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <h4>Loading...</h4>;

  return isFocus ? (
    <input
      type="text"
      value={title}
      onBlur={() => setIsFocus(false)}
      onChange={(e) => setTitle(e.target.value)}
      autoFocus={isFocus}
      style={{ fontWeight: "bold" }}
      onKeyUp={(e) => e.key === "Enter" && setIsFocus(false)}
    />
  ) : (
    <h4 onDoubleClick={() => setIsFocus(true)}>{title}</h4>
  );
};

export default Title;
