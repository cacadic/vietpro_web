import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, up } from "../redux/reducers/up";

const Up = () => {
  const [defaultNumber, setDefaultNumber] = useState(0);
  const number = useSelector(({ Up }) => Up.num);
  const dispatch = useDispatch();

  const handleClickUp = () => {
    dispatch(up());
  };

  const handleClickReset = () => {
    dispatch(reset(Number(defaultNumber)));
  };
  return (
    <div class="col-lg-4 col-md-4 col-sm-8 col-8">
      <div class="timer bg-info" id="timer-up">
        <p>{number}</p>
        <button type="button" class="btn btn-dark mr-2" onClick={handleClickUp}>
          Up
        </button>
        <input
          class="mr-2"
          type="text"
          value={defaultNumber}
          onChange={(e) => setDefaultNumber(Number(e.target.value))}
        />
        <button type="button" class="btn btn-dark" onClick={handleClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Up;
