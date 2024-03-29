import React, { useEffect, useState } from "react";

const initDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Description = () => {
  const [description, setDescription] = useState(initDescription);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    !isFocus && description === "" && setDescription(initDescription);
  }, [description, isFocus]);

  return isFocus ? (
    <textarea
      cols="30"
      rows="10"
      onChange={(e) => setDescription(e.target.value)}
      onBlur={() => setIsFocus(false)}
      value={description}
      autoFocus={isFocus}
      onKeyUp={(e) => e.key === "Enter" && setIsFocus(false)}
    >
      {description}
    </textarea>
  ) : (
    <p onDoubleClick={() => setIsFocus(true)}>{description}</p>
  );
};

export default Description;
