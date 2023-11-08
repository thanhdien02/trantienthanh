import React from "react";
import { useState } from "react";

const CalculatorApp = () => {
    const [result, setResult] = useState(0);
    const [currentValue, setCurrentValue] = useState("");
    const [clickedButton, setClickedButton] = useState(null);

    const doCalculation = (operator) => {
        const parsedValue = parseFloat(currentValue);
        setClickedButton(operator);

        if (!isNaN(parsedValue)) {
            switch (operator) {
                case "+":
                    setResult(result + parsedValue);
                    break;
                case "-":
                    setResult(result - parsedValue);
                    break;
                case "*":
                    setResult(result * parsedValue);
                    break;
                case "/":
                    if (parsedValue !== 0) {
                        setResult(result / parsedValue);
                    } else {
                        alert("Cannot divide by zero!");
                    }
                    break;
                default:
                // No default action
            }
        }
        setCurrentValue("");
    };

    const buttonColor = (operator) => {
        return clickedButton === operator ? "blue" : "grey";
    };

    return (
        <div>
            <input
                type="text"
                value={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
            />
            <p>Result: {result}</p>
            <div>
                <button
                    style={{ backgroundColor: buttonColor("+") }}
                    onClick={() => doCalculation("+")}
                >
                    +
                </button>
                <button
                    style={{ backgroundColor: buttonColor("-") }}
                    onClick={() => doCalculation("-")}
                >
                    -
                </button>
                <button
                    style={{ backgroundColor: buttonColor("*") }}
                    onClick={() => doCalculation("*")}
                >
                    *
                </button>
                <button
                    style={{ backgroundColor: buttonColor("/") }}
                    onClick={() => doCalculation("/")}
                >
                    /
                </button>
            </div>
        </div>
    );
};

export default CalculatorApp;
