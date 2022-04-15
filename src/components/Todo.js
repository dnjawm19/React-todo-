import React from "react";

function Todo({todo, deleteTodo, editTodo}) {
    const { id, text, checked } = todo;

    function deleteClick() {
        deleteTodo(todo.id);
    }

    function editClick() {
        editTodo(todo.id);
        alert(todo.text);
    }

    return (
        <div className="Todo">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? <input type="checkbox"/> : <input type="checkbox"/>}
                <span>{text}</span>
                <div>
                    <button
                        type="button"
                        onClick={editClick}
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
        </div>
    )
}

export default Todo;