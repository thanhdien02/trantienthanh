import React, { useState, useContext } from "react";
import TodoContext from "./TodoContext";

const EditTodo = ({ todo }) => {
    const [text, setText] = useState(todo.text);
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "EDIT_TODO", payload: { id: todo.id, text: text } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditTodo;
