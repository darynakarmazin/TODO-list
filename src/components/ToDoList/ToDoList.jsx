import { useState } from 'react';

function ToDoList() {
  const [data, setData] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=20')
    .then(response => response.json())
    .then(data => setData(data));

  return (
    <div>
      <h1>ToDoList</h1>
      <ul>
        {data.map(todo => {
          return <li>{todo.title}</li>;
        })}
      </ul>
      
    </div>
  );
}

export default ToDoList;
