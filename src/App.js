import React, {useState} from "react"
import TodoList from "./Components/TodoList"
//import TodosData from "./Components/TodosData"
import  './App.css'
import todosData from "./Components/TodosData"

function App() {
   const [todos] = useState(todosData) 


   
    
    const todoItems = todos.map(item => <TodoList key={item.id} item={item}/>)
    
    return (
        <div className="todo-items">
          <h1>Todos Today</h1>
            {todoItems}
        </div>
    )
}

export default App