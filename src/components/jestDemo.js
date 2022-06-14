import React from "react";

const handleClick = () => {
  window.alert("Click Me!!!");
  // console.log("Click Me!!!")
};
const JestDemo = () => {
  return (
    <div>
      <button onClick={handleClick} data-testid="btn">
        Click Me!!!
      </button>
    </div>
  );
};

export default JestDemo;
