import React, { useState, useCallback } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
