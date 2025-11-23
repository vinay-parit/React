import Todo from "./Todo";

const Todos = (props) => {
  const { todo, setTodo } = props;
    
  return (
    <div>
      <Todo todo={todo} setTodo={setTodo} />
      {
        todo.map((item,index)=>{
            return (
              <div key={index} className="list">
                <input type="checkbox" />
                <span className="todo-txt">{item.task}</span>
                <button className="del-btn">delete</button>
              </div>
            );
        })
      }
    </div>
  );
};

export default Todos;
