import React, { useState, useEffect } from 'react';
import peopleData from './data';
import './UseStateArray.css';

const UseStateArray = () => {
    // Load saved data from local storage or use default data  
    const [people, setPeople] = useState(() => {  
        // Attempt to retrieve the saved list from local storage  
        const savedPeople = localStorage.getItem('peopleList');  
        
        // If there is saved data in local storage, parse it from JSON format and use it  
        // Otherwise, fall back to the default peopleData from the file  
        return savedPeople ? JSON.parse(savedPeople) : peopleData;  
        // JSON.parse converts a JSON string back into a JavaScript string
    });

    // Save the current list to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('peopleList', JSON.stringify(people));
        // JSON.stringify converts JavaScript object or array into a JSON string
    }, [people]);

    // Remove single element by id
    const removePerson = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        // person.id !== id is a condition that checks if the id of the current person is not equal to the id you want to remove.
        // If the condition is true, the person is included in the new array.
        // If the condition is false, the person is excluded from the new array.
        setPeople(newPeople);
    };

    // Clear all items
    const clearList = () => {
        setPeople([]);
    };

    // Restore default data
    const resetList = () => {
        setPeople(peopleData);
    };

    return (
        <div className="container">
            <h2 className="title">UseState with Array</h2>
            {people.length > 0 ? (

                <div className="people-list">

                    {people.map((person) => {
                        const { id, name } = person;
                        return (
                            <div key={id} className="person-card">
                                <h4>{name}</h4>
                                <button className="remove-btn" onClick={() => removePerson(id)}>Remove</button>
                            </div>
                        );
                    })}
                </div>

            ) : (
                <p className="empty-message">No people left in the list.</p>
            )}
    
            <div className="button-group">
                <button className="clear-btn" onClick={clearList}>Clear List</button>
                <button className="reset-btn" onClick={resetList}>Reset List</button>
            </div>
        </div>
    );
};

export default UseStateArray;
