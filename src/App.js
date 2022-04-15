import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Add from './components/Add';
import Look from './components/Look';

let nextId = 4;

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Eat",
      checked: true,
    },
    {
      id: 2,
      text: "Sleep",
      checked: false
    },
    {
      id: 3,
      text: "Repeat",
      checked: false
    }
  ])

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id) => {    
      setTodos(todos.map((todo) =>
        todo.id === id ? {...todo, text: "하이"} : todo));
      console.log(todos);    
  }

  function addButton(text) {
    if (text === '') {
      return alert("빈 값으로 만들수 없습니다.");
    } else {
      const todo = {
        id: nextId,
        text: text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }


  return (
    <div className='box'>      
      <h3>What needs to be done?</h3>
      <Add addButton={addButton}/>
      <Look/>
      <Form todoLength={todos.length}>
        <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </Form>
    </div>
  );
}

export default App;
