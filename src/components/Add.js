import React from "react";
import "../App.css";
import styled from "styled-components";

const Add = ({addButton}) => {
    const [value, setValue] = React.useState("");

    function onChange(e) {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addButton(value);
        setValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="AddText" type="text" value={value} onChange={onChange}></input>
            <div className="Add">
                <button className="addButton" type="submit">
                    Add
                </button>
            </div>
        </form>
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

export default Add;