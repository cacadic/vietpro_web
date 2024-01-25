import React from "react";
import { useSelector } from "react-redux";

const Number = () => {
  const number = useSelector((store) => store.num);
  return <h3>{number}</h3>;
};

export default Number;
