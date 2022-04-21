import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

function TodoList({todos, deleteTodo, editTodo, save, goActive, goCompleted}) {
    const [select,setSelect] = React.useState(0);

    function selectAll() {
        setSelect(0);
    }

    function selectActive() {
        setSelect(false);
    }

    function selectCompleted() {
        setSelect(true);
    }

    return (
        <Container>
            <div>
                <div>
                    <Button
                        onClick={selectAll}
                    >
                        All
                    </Button>
                    <Button
                        onClick={selectActive}
                    >
                        Active
                    </Button>
                    <Button
                        onClick={selectCompleted}
                    >
                        Completed
                    </Button>
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
                    {todos.length}tasks remaining
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
        </Container>
    )
}

const Container = styled.div`
    flex:1;
    width:500px;
    height:100px;  
    margin-left: auto;
    margin-right: auto;
`

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