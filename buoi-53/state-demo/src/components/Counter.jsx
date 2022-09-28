import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  //   let counter = 0;
  function increaseHandler() {
    setCounter(counter + props.n);
  }

  function decreaseHandler() {
    setCounter(counter - props.n);
  }

  return (
    <div>
      <button onClick={decreaseHandler}>-</button>
      <span className="counter">{counter}</span>
      <button onClick={increaseHandler}>+</button>
    </div>
  );
};

export default Counter;
