import { useState } from "react";

export default function Counter23() {

    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    const handleIncremantClick = () => {
        setCount(count + incrementBy);
    }

    const handleDecementClick = () => {
        setCount(count - 1);
    }

    const handleResetClick = () => {
        setCount(0);
    }

    const handleIncrementBy = () => {
        setIncrementBy(incrementBy + 1);
    }

    const handleDecreaseBy = () => {
        setIncrementBy(incrementBy - 1);
    }

    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={handleIncremantClick}>Increment</button>
            <button onClick={handleDecementClick}>Decrement</button>
            <button onClick={handleResetClick}>Reset</button>
            <h1>We are increment value by: {incrementBy}</h1>
            <button onClick={handleIncrementBy}>Increase Increment</button>
            <button onClick={handleDecreaseBy}>Decrease Increment</button>
        </div >
    );
}