import React, { createContext, useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(
        TodoReducer,
        JSON.parse(localStorage.getItem("todos")) || []
    );
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
