import React, { useState, useContext } from "react";
import TodoContext from "./TodoContext";

const AddTodo = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch({ type: "ADD_TODO", payload: text });
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
