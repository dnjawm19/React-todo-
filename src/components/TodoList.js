import React from 'react';
import Todo from './Todo';
import '../App.css';
import styled from 'styled-components';

function TodoList({todos, deleteTodo, editTodo, save, goActive, goCompleted}) {
    const [select,setSelect] = React.useState(0);
    const [todoList, setTotoList] = React.useState(0);
    const todo = {...todos};

    function selectAll() {
        setSelect(0);
        console.log(todo);
    }

    function selectActive() {
        setSelect(false);
        console.log("s");
        console.log(select);

        todos.map((todo) =>
        todo.checked === select && setTotoList)
        console.log(todoList)
    }

    function selectCompleted() {
        setSelect(true);
        console.log(select);

      

        todos.map((todo) =>
        todo.checked === true ? {...todos} : '')
        console.log(todos);
    }

    return (
        <div>
            <div>
                <button className='selectButton'
                    onClick={selectAll}
                >
                    All
                </button>
                <button className='selectButton'
                    onClick={selectActive}
                >
                    Active
                </button>
                <button className='selectButton'
                    onClick={selectCompleted}
                >
                    Completed
                </button>
            </div>
            {select === 0 ?
            <div>
                {todos.length}tasks remaining
                {todos.map(todo => (
                <Todo
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    save={save}
                    goActive={goActive}
                    goCompleted={goCompleted}
                    />
                ))}
            </div>
            :
            <div>
                {todoList.length}tasks remaining
                {todos.map((todo) =>
                todo.checked === select && <Todo
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    save={save}
                    goActive={goActive}
                    goCompleted={goCompleted}
                    />)}
            </div>
            }
        </div>
    )
}

const Button = styled.button`
    margin-right: 10px;
    margin-top: 10px;
    margin-left: 30px;
    padding: 5px;
    min-width: 120px;
    color: black;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
`;

export default TodoList;