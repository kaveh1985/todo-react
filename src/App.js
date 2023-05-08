import { useState } from "react";
import NewFormTodo from "./components/NewFormTodo";
import TodoList from "./components/TodoList"
import "./App.css"

function App () {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
         setTodos(currentTodo => {
            return [...currentTodo, title]
         })
      };

      return (
        <div>
           <NewFormTodo todo={addTodo}/>
           <TodoList data={todos} />
        </div>
        

        )
}

export default App;