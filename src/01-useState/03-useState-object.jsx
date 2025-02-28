import React, { useState } from 'react';
import './UseStateObject.css'; // Import CSS file

const UseStateObject = () => {
    // Array of people to cycle through
    const people = [
        { name: 'Djomo Yves', age: 30, hobby: 'Reading' },
        { name: 'Belvinard', age: 25, hobby: 'Painting' },
        { name: 'Alex Yapo', age: 28, hobby: 'Gaming' },
    ];

    // Track current person with one state object
    const [index, setIndex] = useState(0);
    const [person, setPerson] = useState(people[0]);

    // Function to cycle through people
    const updatePerson = () => {
        const nextIndex = (index + 1) % people.length;
        setIndex(nextIndex);
        setPerson(people[nextIndex]);
    };

    // Function to increase age
    const increaseAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    };

    return (
        <div className="person-container">
            <h2>UseState with objects</h2>
            <h2>🎉 Meet {person.name}!</h2>
            <p><strong>Age:</strong> {person.age}</p>
            <p><strong>Hobby:</strong> {person.hobby}</p>
            <button className="next-btn" onClick={updatePerson}>Next Person</button>
            <button className="age-btn" onClick={increaseAge}>Increase Age</button>
        </div>
    );
}

export default UseStateObject;
