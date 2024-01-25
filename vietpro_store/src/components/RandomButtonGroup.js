import React from "react";
import { useDispatch } from "react-redux";

const RandomButtonGroup = () => {
  const dispatch = useDispatch();
  const getNumberHandle = () => {
    dispatch({
      type: "GET_NUMBER",
    });
  };
  const resetHandle = () => {
    dispatch({
      type: "GET_RESET",
    });
  };

  return (
    <div>
      <button
        class="btn btn-dark"
        style={{ marginRight: 10 }}
        onClick={getNumberHandle}
      >
        Get number
      </button>
      <button class="btn btn-dark" onClick={resetHandle}>
        Reset
      </button>
    </div>
  );
};

export default RandomButtonGroup;
