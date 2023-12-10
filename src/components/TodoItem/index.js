import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props
  const {title, id} = todo
  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-container">
      <p className="text">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
