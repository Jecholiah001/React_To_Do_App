/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import  Filter from './components/Filter'
import  InputSection  from './components/InputSection'
import  Item from './components/Items'
import { BsSun, BsMoonFill} from "react-icons/bs" 
import { GetThemeValues } from './components/ContextTheme'

function App() {
  const {darkMode, themeHandler} = GetThemeValues();

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all")


  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = { 
      id: Date.now(),
      todoTitle: text,
      complete: false,
    }
    setTodos([ ...todos, newTodo]); 
}

// Function to delete an item from list
  const removeTodoById =(id) => {
    const newList= todos.filter(todo => todo.id !== id)
    setTodos(newList);
  }

// Function to set status
  const toggleTodoStatus =(id) => {
  setTodos(
    todos.map(todo =>  {
      if (todo.id === id){ 
        return{...todo,complete: !todo.complete}
      }
      return todo 
    })
  )
  }

  // Function to delete completed item
  const clearCompletedTodos = () => {
    const todoItems = todos.filter(todo => !todo.complete);
    setTodos(todoItems)
  }

  // Function to update filter value
  const setFilterValue = (value) => setFilter(value);

  //Function to display the number of items
  const getnum = () => {
    if (filter === "all"){
      return todos.length;
    }
    else if (filter === "active"){
      return todos.filter(todo => !todo.complete).length
    }
    else if (filter === "complete"){
      return todos.filter(todo => todo.complete).length
    }

  return 0;
  }

  // Function to render Todo based on Filter
  const renderTodos = () =>{
    let filteredList;
    if (filter === "all"){
      filteredList = todos;
    }
    else if (filter === "active"){
      filteredList = todos.filter(todo => !todo.complete)
    }
    else if (filter === "complete"){
      filteredList = todos.filter(todo => todo.complete)
    }

    return filteredList.map(todo => (<Item key={todo.id} data={todo} deleteHandler={removeTodoById} updateStatus={toggleTodoStatus}/>
    ))
  }


  return (
    <>
    <div className='main'>
      <div className='to-do'>
      <div className='header' >
          <h1>TODO</h1>
          {darkMode ? <BsSun onClick={themeHandler}  className='sun'/>:<BsMoonFill onClick={themeHandler}  className='moon'/> }
      </div>

      <div className='info-sec'>
        <InputSection addHandler={addTodo}/>
      </div>
      </div>
      {/* Display item section */}
      <div className='card'>
        <Filter filterType={setFilterValue}/>
        
        {renderTodos()}

        <div className='footer'>
          <p className='item-qty'>{getnum()}</p>
          <button  className='item-btn' type='button' onClick={clearCompletedTodos}>Clear Completed</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App