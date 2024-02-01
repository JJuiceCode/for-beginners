import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={onClick}>+</button>
    </div>
  );
}

export default Counter;
