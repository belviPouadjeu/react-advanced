# React Hooks: From Beginner to Advanced

React Hooks, introduced in React 16.8, revolutionize how we write React applications by enabling functional components to manage state, handle side effects, and more—features once exclusive to class components. 

This guide will teach you React Hooks from beginner to advanced levels with clear explanations, hands-on examples, real-world use cases, best practices, and common pitfalls. We’ll cover:

- **useState**
- **useEffect**
- **useContext**
- **useRef**
- **useMemo**
- **useCallback**
- **useReducer**
- **Custom Hooks**

# 1. React Hook: useState

## **Explanation:**
- Manage state in functional components.
- returns an array with two elements: the current state value, and a function that we can use to update the state
- accepts default value as an argument
- state update triggers re-render

## **Real-World Use Case:**
Tracking form input values, toggling UI elements.

## **Example: Counter**

### **Starter Code:**

```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h4>You clicked {count} times</h4>
            <button className='btn' onClick={handleIncrement}>Click me</button>
        </div>
    );
}

export default Counter;
```

### 🚀 React Challenge: Enhanced Counter
Use the provided `Counter` component and modify it to meet the challenge requirements.

### **Objective:**
Modify the given `Counter` component to include the following functionalities:

1. **Decrement Button** - Add a button to decrease the counter.
2. **Reset Button** - Add a button to reset the counter to `0`.
3. **Prevent Negative Numbers** - Ensure the count never goes below `0`.
4. **Double Increment Feature** - Add a button that increases the count by `2` instead of `1`.

---

#### Initial Render and Re-Renders

In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

#### General Rules of Hooks

- starts with "use" (both -react and custom hooks)
- component must be uppercase
- invoke inside function/component body
- don't call hooks conditionally (cover later)
- set functions don't update state immediately (cover later)


## 🚀 **React useState with Array Challenge**  

## **📝 Challenge Statement**  
In this challenge, you will practice using the **useState** hook to manage an array of people in a React component. You will import a list of people from a separate data file and display them in the browser. Your goal is to implement the following functionalities:

---

## **✅ Core Tasks**  

### **📌 Task 1: Import and Initialize State**  
- Import a predefined array of people from a `data.js` file.  
- Use `useState` to store the list of people in the component.

### **📌 Task 2: Display the List of People**  
- Render the list of people dynamically using the `map` function.
- Each person should have a **name** and a **remove button** next to them.

### **📌 Task 3: Remove a Single Person**  
- Clicking the **"Remove"** button next to a person should remove only that person from the list.

### **📌 Task 4: Clear the Entire List**  
- Add a **"Clear List"** button that removes all people from the list.

### **📌 Task 5: Reset the List**  
- Add a **"Reset List"** button that restores the original data.

### **📌 Task 6: Styling**  
- Style the component using **CSS** to improve the user interface.
- Ensure buttons have hover effects and proper spacing.

---

## **🔥 Bonus Challenges (Optional, but recommended!)**  

### **🌟 Bonus 1: Disable the "Clear List" Button**  
- If the list is already empty, disable the **"Clear List"** button to prevent unnecessary actions.  

### **🌟 Bonus 2: Show a Message When the List is Empty**  
- When there are no people left, display a message saying: `"No people left to display!"`.  
- This message should disappear when the list is reset or when a new person is added.

### **🌟 Bonus 3: Persist Data in Local Storage**  
- Save the current list of people in **local storage** so that the data is retained even after a page refresh.  
- When the component mounts, check if there’s any saved data in local storage and load it.

---

# Common Pitfall

Don’t mutate state directly—it won’t trigger a re-render:

```jsx
// Wrong
const [items, setItems] = useState([]);
items.push('new item'); // No re-render

// Correct
setItems([...items, 'new item']);
```

## 💡 Challenge Statement: UseState with Object in React

### 🔹 Goal:

- Create a React component that manages and updates an object in state using the `useState` hook.
- The object should represent a person with the following properties:
  - `name` (string)
  - `age` (number)
  - `hobby` (string)

### 🔹 Requirements:

- Use an array of at least three people.
- Store the current person as an object in `useState`.
- Render the person's details (`name`, `age`, and `hobby`) in the browser.
- Add a button to cycle through the people in the array.
- When the user clicks the button, update the state with the next person.
- If the last person is displayed, loop back to the first person.
- Style the component for better UI (optional).

### 🔹 Bonus:

- Use a single state object instead of multiple state variables.
- Add some basic CSS styling to improve the UI.

💡 **Once the user clicks the button, a new person should be displayed in the browser.** 🚀


