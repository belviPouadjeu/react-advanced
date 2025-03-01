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

---

# 2. React Hook: useSEffect

## Introduction to useEffect

The `useEffect` hook is one of the most powerful and commonly used hooks in React. It was introduced in React 16.8 as part of the Hooks API, allowing developers to manage side effects in functional components. Before hooks, side effects were managed using lifecycle methods in class components, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

## Why useEffect?

- **Simplification**: `useEffect` consolidates the functionality of multiple lifecycle methods into a single hook, making code more concise and easier to understand.
- **Functional Components**: It allows functional components to have side effects, which were previously only possible in class components.
- **Reusability**: Hooks promote the reuse of stateful logic across components without changing the component hierarchy.

## Basic Syntax and Usage

The `useEffect` hook has the following syntax:

```javascript
useEffect(() => {
  // Effect logic here

  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

### Running an Effect on Every Render
If you omit the dependency array, the effect will run after every render:

```javascript
useEffect(() => {
  console.log('This runs after every render');
});
```

### Limiting Effects with a Dependency Array
To control when the effect runs, you can pass a dependency array. The effect will only re-run if one of the dependencies has changed:

```javascript
useEffect(() => {
  console.log('This runs only when "someValue" changes');
}, [someValue]);
```

### Running an Effect Only Once (on Mount)
If you pass an empty dependency array, the effect will only run once, after the initial render:

```javascript
useEffect(() => {
  console.log('This runs only once, after the initial render');
}, []);
```

## Handling Side Effects

### Data Fetching
A common use case for `useEffect` is fetching data from an API when a component mounts:

```javascript
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    setData(data);
  };

  fetchData();
}, []);
```

### Event Listeners
You can also use `useEffect` to set up and clean up event listeners:

```javascript
useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

### Updating the DOM
`useEffect` can be used to directly manipulate the DOM, though this is less common in React due to its declarative nature:

```javascript
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

## Cleanup Functions

### Why Cleanup?
Some side effects need to be cleaned up to avoid memory leaks or unexpected behavior. For example, if you set up a subscription or an event listener, you should clean it up when the component unmounts or before the effect runs again.

### How to Cleanup
You can return a cleanup function from the effect:

```javascript
useEffect(() => {
  const subscription = someObservable.subscribe(value => {
    console.log(value);
  });

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

### Example: Cleaning Up Event Listeners

```javascript
useEffect(() => {
  const handleClick = () => {
    console.log('Document clicked');
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
}, []);
```

## Common Pitfalls (risks obstacles) and Best Practices

### Missing Dependencies
One common mistake is forgetting to include dependencies in the dependency array, which can lead to stale data or bugs:

```javascript
useEffect(() => {
  console.log(someValue);
}, []); // Missing dependency: someValue
```

**Best Practice**: Always include all dependencies that the effect relies on.

### Infinite Loops
Another common issue is causing infinite loops by updating state within an effect without proper dependencies:

```javascript
useEffect(() => {
  setCount(count + 1); // This will cause an infinite loop
}, [count]);
```

**Best Practice**: Ensure that state updates are conditional or that dependencies are managed correctly.

### Overusing(abusing, unnecessarily employing) useEffect
Sometimes, developers overuse `useEffect` for logic that could be handled more declaratively or with other hooks like `useMemo` or `useCallback`.

**Best Practice**: Only use `useEffect` for side effects that need to synchronize with the component's lifecycle.

## Practical Code Examples

### Data Fetching on Component Mount

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}
```

### Setting Up and Cleaning Up Event Listeners

```javascript
import React, { useEffect } from 'react';

function ResizeListenerComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Resize the window and check the console</div>;
}
```

### Conditionally Running Effects Based on State or Prop Changes

```javascript
import React, { useState, useEffect } from 'react';

function ConditionalEffectComponent({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const result = await response.json();
        setUserData(result);
      };

      fetchUserData();
    }
  }, [userId]);

  return (
    <div>
      {userData ? <pre>{JSON.stringify(userData, null, 2)}</pre> : 'No user data'}
    </div>
  );
}
```

## Conclusion
The `useEffect` hook is a versatile(adaptable, flexible, ) tool for managing side effects in React functional components. By understanding its syntax, usage, and best practices, you can write more efficient and maintainable code.

## Challenge 1: Fetch and Display GitHub Users

### Objective:
Create a React component that fetches GitHub users from the API and displays their image, username, and profile link. Focus on building robust logic and state management.

### Requirements

#### Import Dependencies:
- Import `useState` and `useEffect` from React.

#### State Setup:
- `users`: An array to store the list of users (default value: `[]`).
- `loading`: A boolean to indicate loading state (default value: `true`).
- `error`: A state to capture any errors during fetching (default value: `null`).

#### `useEffect` Setup:
- Use `useEffect` to perform the fetch only on the initial render by providing an empty dependency array `[]`.
- Inside `useEffect`, define an asynchronous function to handle the fetch logic.

#### Fetch Functionality:
- Use the URL: `https://api.github.com/users` to retrieve the data.
- Implement the fetch logic using `async/await` within a `try/catch` block:
  - **Try:** Fetch the data, convert the response to JSON, and update the `users` state.
  - **Catch:** Handle any errors by updating the `error` state.
- Once the fetch completes (successfully or not), update the `loading` state to `false`.

#### Display Logic:

- **Loading State:**
  - If `loading` is `true`, display a "Loading..." message.

- **Error State:**
  - If `error` is not `null`, display an error message.

- **Users List:**
  - If data is successfully fetched, iterate over the `users` array.
  - For each user, display:
    - Their image (e.g., using the `avatar_url` property).
    - Their username (e.g., using the `login` property).
    - A link to their GitHub profile (e.g., using the `html_url` property).
  - Make sure to include a unique `key` prop for each list item.


## Bonus Challenges when we will lean react query

### Pagination:
- Fetch more users using the GitHub API's pagination feature (e.g., `https://api.github.com/users?since=XYZ`).

### Search Functionality:
- Add a search bar to filter users by their username.

### Lazy Loading:
- Implement lazy loading for images to improve performance.

## Challenge 2 : Cleanup Function in useEffect

### Objective
Your goal is to create a React application that demonstrates the use of a cleanup function in the `useEffect` hook. The application will include a button to toggle the visibility of a second component. Inside the second component, you will use `useEffect` to run an effect only on the initial render and include a cleanup function to handle resource cleanup when the component unmounts.

### Requirements

#### **State Management**
- Create a state variable `showSecondComponent` using the `useState` hook.
- Initialize the state to `false`.

#### **Toggle Button**
- Render a button in the main component that toggles the value of `showSecondComponent` between `true` and `false`.
- The button text should dynamically change based on the state:
  - If `showSecondComponent` is `false`, the button should say **"Show Second Component"**.
  - If `showSecondComponent` is `true`, the button should say **"Hide Second Component"**.

#### **Conditional Rendering**
- Conditionally render a second component (`SecondComponent`) based on the value of `showSecondComponent`.
  - If `showSecondComponent` is `true`, render the `SecondComponent`.
  - If `showSecondComponent` is `false`, do not render the `SecondComponent`.

#### **useEffect in SecondComponent**
- Inside the `SecondComponent`, use the `useEffect` hook to run an effect only on the initial render (i.e., when the component mounts).
- The effect should:
  - Log a message to the console: **"SecondComponent mounted or re-rendered"**.
  - Set up a `setInterval` to simulate a subscription (e.g., log **"Fetching data..."** every second).

#### **Cleanup Function**
- Add a cleanup function in the `useEffect` hook.
- The cleanup function should:
  - Log a message to the console: **"SecondComponent unmounted"**.
  - Clear the interval created by `setInterval`.

#### **Logging**
- Use `console.log` to track the lifecycle of the component:
  - When the component mounts.
  - When the interval runs.
  - When the component unmounts.

#### **Testing**
- Toggle the button multiple times to observe the component mounting and unmounting.
- Verify that the interval is cleared when the component unmounts.

### Steps to Implement

#### **1. Set Up the Main Component:**
- Create a state variable `showSecondComponent` using `useState`.
- Render a button that toggles the state.
- Conditionally render the `SecondComponent` based on the state.

#### **2. Create the SecondComponent:**
- Use `useEffect` to run an effect only on the initial render.
- Set up a `setInterval` inside the effect.
- Add a cleanup function to clear the interval and log the unmounting message.

#### **3. Test the Application:**
- Click the button to show and hide the `SecondComponent`.
- Observe the console logs to verify that:
  - The component mounts and the interval starts.
  - The component unmounts and the interval is cleared.

---

## Challenge 2: Implement a Cleanup Function with `useEffect` in React

### **Objective:**
Build a small React application to demonstrate how to set up a side effect with `useEffect` and properly clean it up when a component unmounts. This challenge will help you understand how to manage timers or other side effects to prevent memory leaks.

---

### **Requirements**

#### **Parent Component**

##### **State Setup:**
- Create a state variable (e.g., `showChild`) using `useState`, initialized to `false`.

##### **Toggle Button:**
- Render a button in the JSX that toggles the `showChild` state.
- The button's label should change dynamically (e.g., "Show Child" when the child is hidden and "Hide Child" when it's visible).

##### **Conditional Rendering:**
- Based on the value of `showChild`, conditionally render a child component (e.g., `<ChildComponent />`).

---

#### **Child Component**

##### **Basic Rendering:**
- Display a simple message (e.g., "Child Component Active") and optionally a counter that shows elapsed time.

##### **`useEffect` Setup:**
- Inside the child component, use the `useEffect` hook with an empty dependency array (`[]`) so that it runs only on the initial render.
- Within the effect, set up a side effect (for example, an interval timer that updates a counter every second).

##### **Cleanup Function:**
- Return a cleanup function from the `useEffect` hook that clears the interval timer using `clearInterval`.
- Log a message to the console (e.g., "Cleanup: Child component unmounted, timer cleared") to verify that the cleanup occurs when the component unmounts.

---


# 3. React Hook: useSContext



