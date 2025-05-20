import React from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
    };
    

    return (
        <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                        <div>
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" required />
                        </div>
                        <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit">Login</button>
                </form>
        </div>
    );
}

export default Login;