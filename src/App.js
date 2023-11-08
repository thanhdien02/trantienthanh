import logo from "./logo.svg";
import "./App.css";
import CalculatorApp from "./baitap01/CalculatorApp";
import Counter from "./reducer01/Counter";
import { TodoProvider } from "./reducer02/TodoContext";
import AddTodo from "./reducer02/AddTodo";
import TodoList from "./reducer02/TodoList";

/* ======Baitap01========= */
// function App() {
//     return <CalculatorApp></CalculatorApp>;
// }

/* ======useReducer01========= */
// function App() {
//     return <Counter></Counter>;
// }

/* ======useReducer02========= */
// function App() {
//     return (
//         <TodoProvider>
//             <h1>Todo App</h1>
//             <AddTodo />
//             <TodoList />
//         </TodoProvider>
//     );
// }
function App() {
    return (
        <TodoProvider>
            <h1>Todo App</h1>
            <AddTodo />
            <TodoList />
        </TodoProvider>
    );
}

export default App;
