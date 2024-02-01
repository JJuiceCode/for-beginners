import { useState } from "react";
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      alert("할 일 목록이 비어져 있습니다.");
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);

    setToDo("");
  };

  const resetTodo = () => {
    setToDos([]);
  };
  console.log(toDos);

  return (
    <div>
      <h1>ToDoList {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          placeholder="할일을 적어주세요."
          onChange={onChange}
        />
        <button>할일 추가하기</button>
      </form>
      <hr />
      {toDos.map((toDo, index) => (
        <li key={index}>{toDo}</li>
      ))}
      <button onClick={resetTodo}>할일 삭제</button>
    </div>
  );
}
export default ToDoList;
