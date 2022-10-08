import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
