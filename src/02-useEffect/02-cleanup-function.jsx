import React, { useState, useEffect } from 'react';

const ChildComponent = () => {
    // Local state to track counter
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('ChildComponent mounted. Timer started.');
        // Set up an interval timer that increments the counter every second
        const timerId = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);

        // Cleanup function: clear the interval timer on unmount
        return () => {
        clearInterval(timerId);
            console.log('Cleanup: Child component unmounted, timer cleared.');
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div style={{ border: '1px solid blue', padding: '1rem', margin: '1rem 0' }}>
            <h2>Child Component Active</h2>
            <p>Counter: {counter}</p>
        </div>
    );
};

export default ChildComponent;
