import React from "react";
import TodoList from "./TodoList";
import styled from "styled-components";

function Todo({todo, deleteTodo, goActive, goCompleted, save}) {
    const { id, text, checked } = todo;
    const [ edit, setEdit ] = React.useState(true);
    const [ value, setValue] = React.useState('');

    function deleteClick() {
        deleteTodo(todo.id);
    }

    function editAndCancle() {
        edit ? setEdit(false) : setEdit(true);
        console.log(edit);
    }

    function onChange(e) {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        save(id, value);
        setValue("");
        console.log(save);
        edit ? setEdit(false) : setEdit(true);
    }

    function changeActive() {
        goActive(id);
    }

    function changeCompleted() {
        goCompleted(id);
    }

    return (
        <div className="Todo">
            {edit ?
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? <input type="button" onClick={changeActive}/> : <input type="checkbox" onClick={changeCompleted}/>}
                <span>{text}</span>
                <div>
                    <button
                        type="button"
                        onClick={editAndCancle}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={deleteClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
            :
            <form onSubmit={onSubmit}>
                New name for {todo.text}
                <input type="text" value={value} onChange={onChange}></input>
                <div>
                    <button
                        type="submit"                        
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={editAndCancle}
                    >
                        Cancle
                    </button>
                </div>
            </form>}
        </div>
    )
}

export default Todo;