import { useState } from "react";
import NewFormTodo from "./components/NewFormTodo";
import TodoList from "./components/TodoList"
import "./App.css"

function App () {
    const [todos, setTodos] = useState([])

   // const deleteTodo = (id) => {
   //       const latestList = todos.filter((list) => {
   //           return list.id !== id 
   //       })

   //       setTodos((currentTodos) => [...currentTodos, latestList])
   //    }
  
   const deleteTodo = (id) => {
      const updatedList = todos.filter((todo) => todo.id !== id);
      setTodos(updatedList);
    };
    
      
   const addTodo = (title) => {
      const newTodo = {
        id: crypto.randomUUID(), // Generate a random UUID
        title: title
      };
  
      setTodos((currentTodos) => [...currentTodos, newTodo]);
    };

      return (
         <div>
            <NewFormTodo todo={addTodo}/>
            <TodoList data={todos} deleteTodo={deleteTodo}/>
         </div>
        )
}

export default App;