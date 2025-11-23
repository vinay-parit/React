import "../index.css"
import Todos from "./Todos"
const TodoList = (props) => {
    const {todo, setTodo} = props
    
  return (
    <div className='parent-todo'>
        <Todos todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default TodoList