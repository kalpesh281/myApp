import { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect 1: Runs on every render!");
  }); // No dependency array

  useEffect(() => {
    console.log("Effect 2: Runs once on mount!");
  }, []); // Empty dependency array

  useEffect(() => {
    console.log("Effect 3: Runs when `count` changes!");
  }, [count]); // Dependency array with `count`

  return (
    <div>
      <h1>Count:{count}</h1> 
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};
export default Effect;
