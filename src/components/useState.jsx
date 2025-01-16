import { useState } from "react";

const Up = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 0) {
      setCount(count + 1);
    } else {
      alert("Count cannot be negative");
    }
  };

  const decrement = () => {
    if (count <= 0) {
      alert("Count cannot be negative");
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Up;
