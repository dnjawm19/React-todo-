import React from 'react';
import Todo from './Todo';
import '../App.css';

function TodoList({todos, deleteTodo, editTodo}) {
    return (
        <div>
            {todos.map(todo => (
                <Todo
                id={todo.id}
                todo={todo}
                key={todo.id}
                text={todo.text}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                />
                ))}
        </div>
    )
}

export default TodoList;