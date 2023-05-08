function TodoList({ data}) {
    return (
        <ul>
        {data.map((value, index) => {
       return (
              <li key={value+index}>{value}</li>
           )
       })}
      </ul>
    )
}

export default TodoList;