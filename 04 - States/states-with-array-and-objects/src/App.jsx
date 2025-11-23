import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([
    // { id: 1, task: "read book", isCompleted: false },
    // { id: 2, task: "go to walk", isCompleted: true },
    // { id: 3, task: "go to gym", isCompleted: true },
    // { id: 4, task: "run", isCompleted: false },
  ]);
  return (
    <div>
      {/* {todo.map((item) => {
        return (
          <div>
            <span>{item.id} </span>
            <span> {item.task}</span>
          </div>
        );
      })} */}

        <TodoList todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;
