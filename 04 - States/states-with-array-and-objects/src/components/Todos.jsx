import Todo from "./Todo";

const Todos = (props) => {
  const { todo, setTodo } = props;

  const handleCheck = (index) => {
    const updated = [...todo];
    updated[index].completed = !updated[index].completed;
    setTodo(updated);
  };
  return (
    <div>
      <Todo todo={todo} setTodo={setTodo} />
      {todo.map((item, index) => {
        return (
          <div key={index} className="list">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                handleCheck(index);
              }}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
              className="todo-txt"
            >
              {item.task}
            </span>
            <button className="del-btn">delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
