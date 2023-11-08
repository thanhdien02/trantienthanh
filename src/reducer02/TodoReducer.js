export const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), text: action.payload, done: false },
            ];
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            throw new Error("Unhandled action type");
    }
};
