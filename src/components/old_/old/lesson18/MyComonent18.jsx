import React, { useState, useEffect } from "react";
function MyComponent18() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Clicked ${count} x. Color: ${color}`;
    },[count,color]);

    const addCount = () => {
        setCount(c => c + 1);
    }

    const subTractCount = () => {
        setCount(c => c - 1);
    }

    const changeColor = () => {
        setColor(c=>c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count; {count}</p>
            <button onClick={addCount}>Increment</button>
            <button onClick={subTractCount}>Decrement</button><br />
            <button onClick={changeColor}>Change color</button>
        </>
    );
}

export default MyComponent18;