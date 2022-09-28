import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [num, setNum] = useState(1);

  function numHandler() {
    setNum(2);
  }

  return (
    <div>
      <button onClick={numHandler}>Click</button>
      <Counter n={num} />
      <Counter n={1} />
      <Counter n={1} />
    </div>
  );
};

export default App;
