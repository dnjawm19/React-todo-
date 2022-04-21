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
    }

    function onChange(e) {
        setValue(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        save(id, value);
        setValue("");
        edit ? setEdit(false) : setEdit(true);
    }

    function changeActive() {
        goActive(id);
    }

    function changeCompleted() {
        goCompleted(id);
    }

    return (
        <Container>
            {edit ?
            <div>
                {checked ? <input type="checkbox" onClick={changeActive}/> : <input type="checkbox" onClick={changeCompleted}/>}
                <span>{text}</span>
                <div>
                    <Button
                        className="white"
                        onClick={editAndCancle}
                    >
                        Edit
                    </Button>
                    <Button
                        className="red"
                        onClick={deleteClick}
                    >
                        Delete
                    </Button>
                </div>
            </div>
            :
            <form onSubmit={onSubmit}>
                New name for {todo.text}
                <input type="text" value={value} onChange={onChange}></input>
                <div>
                    <Button
                        className="white"
                        onClick={editAndCancle}
                    >
                        Cancle
                    </Button>
                    <Button
                        type="submit"                        
                    >
                        Save
                    </Button>
                </div>
            </form>}
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    max-with: 100px;
    font: 1.6rem/1.25 Arial, sans-serif;
    padding: 0 20px;
    margin-left: 10px;
    background-color: white;
    color: #4d4d4d;
`

const Button = styled.button`
    margin-left: 10px;
    color: ${props => props.children === 'Save' ? 'white' : props.children === 'Delete' ? 'white' : 'black'};
    background-color: ${props => props.className === 'white' ? 'white' : props => props.className === 'red' ? 'red' : 'black'};
    cursor: pointer;
`

export default Todo;