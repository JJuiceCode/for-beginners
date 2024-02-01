import { useState, useEffect } from "react";
function InputTest1() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [count, setCount] = useState(0);
  const [showing, setShowing] = useState(false);

  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setToDos((prevToDos) => [toDo, ...prevToDos]);
  };
  const onShowing = () => setShowing((current) => !current);

  const onlyOneFunction = () => console.log("Only one function");

  useEffect(onlyOneFunction, []);

  function Hello() {
    useEffect(() => {
      console.log("Hello created");
      return () => console.log("Hello destroyed");
    }, []);
    return <h1>Hello</h1>;
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="text" onChange={onChange} />
        <button>할일 추가</button>
      </form>
      ="
      <div>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>count : {count}</p>
        <button onClick={onClick}>+</button>
      </div>
      <div>
        <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
        {showing ? <Hello /> : null}
      </div>
    </div>
  );
}

export default InputTest1;
