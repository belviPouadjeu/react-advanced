import React, { useState } from 'react';

import Counter from './01-useState/01-useState-counter.jsx';
import UseStateArray from './01-useState/02-useState-array.jsx';
import UseStateObject from './01-useState/03-useState-object.jsx';
import FetchUsers from './02-useEffect/01-fetch-data.jsx';
import ChildComponent from './02-useEffect/02-cleanup-function.jsx';

const App = () => {
  // State variable to toggle child component display
  const [showChild, setShowChild] = useState(false);

  // Toggle function to show/hide child component
  const toggleChild = () => {
    setShowChild(prev => !prev);
  };

  return (
    <div className="app-container">
      <h1 className="title">React Hooks</h1>
      <h2 className="subtitle">React Hooks : useState</h2>
      <Counter />
      <UseStateArray />
      <UseStateObject />

      <h2 className="subtitle">React Hooks : useEffect</h2>
      <FetchUsers />

      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h2>Clean up function</h2>
        {/* Render a button that toggles the display of the child component*/}
      <button 
        onClick={toggleChild} // When the button is clicked, the toggleChild function is executed to flip the showChild state (true becomes false, and vice versa)
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }} // Inline styles add spacing and padding to the button for better appearance
      >
        {showChild ? 'Hide Child' : 'Show Child'} 
        {/* This is a conditional (ternary) operator: 
            If showChild is true, the button will display "Hide Child"; 
            if false, it will display "Show Child". */}
      </button>

      {/*Conditionally render the ChildComponent based on the value of showChild*/}
      {showChild && <ChildComponent />} 
      {/* This uses the logical AND (&&) operator:
          If showChild is true, <ChildComponent /> is rendered.
          If showChild is false, nothing is rendered. */}

            </div>
    </div>
  );
};

export default App;
