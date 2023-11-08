import { useReducer } from "react";
import { counterReducer } from "./counterReducer";

const Counter = () => {
    // Khởi tạo state với `useReducer`. `dispatch` là phương thức để gửi hành động
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <h1>Count: {state.count}</h1>
            {/* Gửi các hành động để thay đổi trạng thái */}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
};

export default Counter;
