function Counter({ count, dispatch }) {
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </>
  );
}

export default Counter;
