import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
  const dispatch = useDispatch();
  const time1 = useSelector((store) => store.Reducer1.time1);
  const time2 = useSelector((store) => store.Reducer2.time2);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-3 col-sm-8 col-8">
          <div className="timer bg-info" id="timer-up">
            <p>{time1}</p>
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={() =>
                dispatch({
                  type: "UP_RE1",
                })
              }
            >
              Up
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() =>
                dispatch({
                  type: "RESET_RE1",
                })
              }
            >
              Reset
            </button>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-8 col-8">
          <div className="timer bg-danger" id="timer-down">
            <p>{time2}</p>
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={() =>
                dispatch({
                  type: "DOWN_RE2",
                })
              }
            >
              Down
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() =>
                dispatch({
                  type: "RESET_RE2",
                })
              }
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
