import React from 'react';
import TodoList from './components/TodoList';
import Add from './components/Add';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 50%;
    max-with: 100px;
    font: 1.6rem/1.25 Arial, sans-serif;
    padding: 1rem;
    margin: 0 auto;
    background-color: white;
    color: #4d4d4d;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-top: 30px;
  }
`;

let nextId = 4;

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: "Eat",
      checked: true
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

  const lookActive = (id) => {  
    setTodos(todos.map((todo) =>
        todo.id === id ? {...todo, checked: false} : todo));
  }

  const lookCompleted = (id) => {  
    setTodos(todos.map((todo) =>
        todo.id === id ? {...todo, checked: true} : todo));
  }

  const editTodo = (id, text) => {
    setTodos(todos.map((todo) =>
        todo.id === id ? {...todo, text: text} : todo));
      console.log(todos);
      console.log("g");
  }

  function addTodo(text) {
    if (text === '') {
      return alert("빈 값으로 만들수 없습니다.");
    } else {
      const todo = {
        id: nextId,
        text: text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      console.log(todos);
      nextId++;
    }
  }


  return (
    <>
    <GlobalStyle/>
    <div>
      What needs to be done?
      <Add addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} save={editTodo} goActive={lookActive} goCompleted={lookCompleted}/>
    </div>  
    </>
  );
}

const Container = styled.div`
  
`;

export default App;
