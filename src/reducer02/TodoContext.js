import React, { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
