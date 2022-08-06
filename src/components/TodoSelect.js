import React, {useState} from 'react'

const TodoSelect = ({todo, setTodos}) => {

  const  [complete, setcomplete] = useState(false);

  const handleDelete = ({id}) => {
    setTodos(todo.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      {todo.map((todo) => (
        <li key={todo.id}>
          <button className='delete task-button' onClick={handleDelete(todo)}>Clear All</button>
          <button className='delete task-button' onClick={handleDelete(todo)}>Clear Completed</button>
          <button className='delete task-button' onClick={handleDelete(todo)}>Clear Incomplete</button>
        </li>
        ))}
    </div>
  )
}

export default TodoSelect