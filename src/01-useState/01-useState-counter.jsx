import React, { useState } from 'react';
import './Counter.css'; // Importing the CSS file

const Counter = () => {
    const [count, setCount] = useState(0);

    // Increase count
    const handleClick = () => {
        setCount(count + 1);
    };

    // Decrease count but prevent negative numbers
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    // Reset count
    const handleReset = () => {
        setCount(0);
    };

    // Double Increment
    const handleDoubleIncrement = () => {
        setCount(count + 2);
    };

    return (
        <div className="counter-container">
            <h2>Counter</h2>
            <h4>You clicked <span className="count">{count}</span> times</h4>
            <div className="button-group">
                <button className="btn" onClick={handleClick}>Click me</button>
                <button className="btn" onClick={handleDecrease}>Decrease me</button>
                <button className="btn reset-btn" onClick={handleReset}>Reset</button>
                <button className="btn double-btn" onClick={handleDoubleIncrement}>Double Increment</button>
            </div>
        </div>
    );
};

export default Counter;
