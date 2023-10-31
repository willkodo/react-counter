import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase Count</button>
      <button onClick={handleDecrease}>Decrease Count</button>
    </div>
  );
};

export default FunctionCounter;
