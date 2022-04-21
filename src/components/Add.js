import React from "react";
import "../App.css";
import styled from "styled-components";

const Add = ({addTodo}) => {
    const [value, setValue] = React.useState("");

    function onChange(e) {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <Input type="text" value={value} onChange={onChange} />
            <div>
                <Button type="submit">
                    Add
                </Button>
            </div>
        </form>
    )
}

const Input = styled.input`
    margin-left: auto;
    margin-right: auto;
    height:30px;
    padding: 10px;
    min-width: 100%;
`

const Button = styled.button`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
    min-width: 100%;
`;

export default Add;