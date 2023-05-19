import { useState } from "react";


function NewFormTodo({ todo }) {
    const [item, setItem] = useState("");
    const [inputChecker, setInputChecker] = useState(true)

    const onHandleChange = (event) => {
        const value = event.target.value;
        if(value) setInputChecker(false)
        setItem(value)
    }


    const onSubmitHandle = (event) => { 
       event.preventDefault();
       if(inputChecker) {
           alert('The field is empty')
           return;
       }
        todo(item)
        setItem("")
        setInputChecker(true)
     }; 

     
     return (
            <>
                <form onSubmit={onSubmitHandle} className="login-form" >
                <h2>To Do</h2>
                <label htmlFor="username">Write down your To do List:</label>
                <input id="username" onChange={onHandleChange} type="text" value={item}/>
                <button  type="submit">Add</button>
                </form>
             </>
         )
}

export default NewFormTodo;