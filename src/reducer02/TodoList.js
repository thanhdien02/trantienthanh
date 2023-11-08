import React, { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoList = () => {
    const { todos, dispatch } = useContext(TodoContext);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span
                        style={{
                            textDecoration: todo.done ? "line-through" : "none",
                        }}
                    >
                        {todo.text}
                    </span>
                    <button
                        onClick={() =>
                            dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                        }
                    >
                        {todo.done ? "Undo" : "Done"}
                    </button>
                    <button
                        onClick={() =>
                            dispatch({ type: "REMOVE_TODO", payload: todo.id })
                        }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
