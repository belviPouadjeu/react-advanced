import { useState, useEffect } from "react";
import "./FetchUsers.css"; // Import the CSS file

const url = 'https://api.github.com/users';

const FetchUsers = () => {
    // State variables
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect to fetch data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                console.log(data);
                
                setUsers(data); // Update users state with fetched data
            } catch (err) {
                setError(err.message); // Set error state if fetch fails
            } finally {
                setLoading(false); // Set loading to false after fetch completes
            }
        };

        fetchUsers(); // Call the fetch function
    }, []); // Empty dependency array ensures this runs only once

    // Display loading or error message
    if (loading) {
        return <div className="loading">Loading ...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    // Render the list of users
    return (
        <section className="user-section">
            <h1 className="title">Fetch GitHub Users</h1>
            <ul className="user-list">
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id} className="user-item">
                            <img 
                                src={avatar_url} 
                                alt={login} 
                                loading="lazy" 
                                className="user-avatar"
                            />
                            <div className="user-info">
                                <h5 className="user-name">{login}</h5>
                                <a 
                                    href={html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="user-link"
                                >
                                    {html_url}
                                </a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default FetchUsers;
