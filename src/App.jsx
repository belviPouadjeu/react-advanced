import React from 'react';
import Counter from './01-useState/01-useState-counter.jsx';
import UseStateArray from './01-useState/02-useState-array.jsx';
import UseStateObject from './01-useState/03-useState-object.jsx';


const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">React Hooks</h1>
      <h2 className="subtitle">React Hooks : useState</h2>
      <Counter />
      <UseStateArray />
      <UseStateObject />
    </div>
  );
};

export default App;
