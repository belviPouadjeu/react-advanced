# Algorithms to Learn React Hooks

## **1. Understanding useState**

### **Algorithm:**
1. Import `useState` from React.
2. Initialize state using `useState(initialValue)`.
3. Create a function to update the state.
4. Use the state value inside the component.
5. Update the state using the function on an event (e.g., button click).

### **Example:**
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## **2. Understanding useEffect**

### **Algorithm:**
1. Import `useEffect` from React.
2. Define `useEffect` with a callback function.
3. Specify a dependency array:
   - Empty array `[]`: Runs only on mount.
   - Variables in array `[dependency]`: Runs when dependencies change.
4. (Optional) Return a cleanup function to avoid memory leaks.

### **Example:**
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Time: {seconds}s</p>;
}
```

---

## **3. Understanding useContext**

### **Algorithm:**
1. Import `useContext` and `createContext` from React.
2. Create a Context using `createContext(defaultValue)`.
3. Use `Provider` to wrap the components that need access to the context.
4. Use `useContext(MyContext)` in child components to access values.

### **Example:**
```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
```

---

## **4. Understanding useReducer**

### **Algorithm:**
1. Import `useReducer` from React.
2. Define a reducer function with `state` and `action` parameters.
3. Use `useReducer(reducer, initialState)` to create state and dispatch function.
4. Dispatch actions to update state based on defined cases.

### **Example:**
```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

---

## **5. Understanding useRef**

### **Algorithm:**
1. Import `useRef` from React.
2. Create a ref using `useRef(initialValue)`.
3. Attach the ref to a DOM element using `ref` attribute.
4. Use `ref.current` to access or modify the element.

### **Example:**
```jsx
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

These algorithms and examples will help in understanding and applying React Hooks effectively.

