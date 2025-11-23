import { useState } from "react";
import "../index.css";

const Todo = (props) => {
  const { todo, setTodo } = props;
  const [todo_val, setTodo_val] = useState("");
  function inpTodo(e) {
    setTodo_val(e.target.value);
  }

  function createTodo() {
    if (!todo_val.trim()) return;

    const newTodo = {
      id: Date.now(), // unique id
      task: todo_val,
      isCompleted: false,
    };

    setTodo([...todo, newTodo]);
    setTodo_val("");
  }
  return (
    <div className="">
      <div className="todo-main">
        <input type="text" className="todo-inp" onChange={inpTodo} />
        <button className="add-btn" onClick={createTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Todo;
