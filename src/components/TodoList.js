import React, { useState } from 'react'

const TodoList = ({todo, setTodos}) => {

  const [strikethrough, setStrikethrough] = useState(false)

  const handleDelete = ({id}) => {
    setTodos(todo.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      {todo.map((todo) =>(
        <li className='list-item' key={todo.id}>
          <input
          style={{textDecoration: strikethrough ? "line-through" : "none"}}
          type='text'
          value={todo.title}
          className='list'
          />
          <input type = 'checkbox' checked = {strikethrough} className='check task-button' onClick={() => setStrikethrough(!strikethrough)}/>
          <button   onClick={() => handleDelete(todo)}>CLR</button>
        </li>
      ) )}
      <input type = 'checkbox' checked = {strikethrough} className='check task-button' onClick={() => setStrikethrough(!strikethrough)}/>Select All
    </div>
  )
}

export default TodoList