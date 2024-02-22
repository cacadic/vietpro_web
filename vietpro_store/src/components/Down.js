import React from "react";

const Down = () => {
  return (
    <div class="col-lg-4 col-md-4 col-sm-8 col-8">
      <div class="timer bg-danger" id="timer-down">
        <p>10</p>
        <button type="button" class="btn btn-dark mr-2">
          Down
        </button>
        <input class="mr-2" type="text" value="" />
        <button type="button" class="btn btn-dark">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Down;
