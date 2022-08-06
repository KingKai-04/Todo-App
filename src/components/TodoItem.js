import React from 'react'
import {v4 as uuidv4} from 'uuid'

const todoItem = ({input, setInput, todo, setTodos}) => {

    // 'onInputChange' is an event listener used to follow the value of 'setInput' which will come from the 'onFormSubmit' event
    
    const onInputChange = (event) => {
        setInput(event.target.value);
        }

    /* 'onFormSubmit' gives 'setTodos' a default state of incomplete until something is written in the '.form' making
    'setInput' blank*/ 
    
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todo, {id: uuidv4(), title: input, completed: false}])
        setInput("");
        }

  return (
    <form onSubmit = {onFormSubmit}>
        <input type = "text"
         id = "task"
         placeholder=' Add A Task...'
         className={todoItem}
         value={input}
         required
         onChange={onInputChange}/>
        <button id = "addTask"> Submit</button>
    </form>
  )
}

export default todoItem