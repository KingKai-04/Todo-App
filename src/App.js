import React, {useState} from 'react';
import TodoTitle from './components/TodoTitle.js'
import TodoItem from './components/TodoItem.js'
import TodoList from './components/TodoList.js'
import TodoSelect from './components/TodoSelect.js';
import './App.css';

function App () {
  const [input, setInput] = useState("");//is used for the input  
  const [todo, setTodos] = useState([]);
  const [complete, incomplete] = useState({todo});

  return (
    <div className="myApp">
      <div className='appWrapper'>
        <div className='topHalf'>
          <div className='Title'>
            <TodoTitle/>
          </div>
            <div className='newTask'>
              <TodoItem
                input = {input}
                setInput = {setInput}
                todo = {todo}
                setTodos = {setTodos}
              />
            </div>
        </div>
        <div className = 'body'>
          <TodoList todo={todo} setTodos={setTodos}/>
        </div>
        <div className='footer'>
            <TodoSelect complete={complete} incomplete={incomplete}/>
        </div>
      </div>
    </div>
  );
}

export default App;
