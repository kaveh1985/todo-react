function TodoList({ data, deleteTodo }) {
    const handleDeleteList = (id) => {
      deleteTodo(id);
    };
  
    const renderedList = data.map((value) => (
      <li key={value.id}>
        {value.title}
        <button onClick={() => handleDeleteList(value.id)}>Delete todo</button>
      </li>
    ));
  
    return <ul>{renderedList}</ul>;
  }
  
  export default TodoList;
  

