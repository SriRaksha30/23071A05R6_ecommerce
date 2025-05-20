import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file for styling
function Registration() {
   const navigate = useNavigate();
   
       const handleSubmit = (event) => {
           event.preventDefault();
           navigate('/');
       };
       
// Mock function to check registered users
const checkRegisteredUsers = () => {
        const registeredUsers = [
                { username: 'user1', email: 'user1@example.com' },
                { username: 'user2', email: 'user2@example.com' },
        ];
        console.log('Registered Users:', registeredUsers);
};

// Call the function to check registered users
checkRegisteredUsers();
    return (
        <div>
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                        <div>
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" required />
                        </div>
                        <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                        </div>
                        <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                        </div>
                        <button type="submit">Register</button>
                </form>
        </div>
    );
}

export default Registration;