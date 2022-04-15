import React from "react";
import "../App.css";

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
                <button className="Add" type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}

export default Add;