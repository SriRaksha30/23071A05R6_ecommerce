import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginned() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();      
        navigate('/contact');
    };

    return (
        <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 15 }}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                            style={{ width: '50%', padding: 8, marginTop: 5 }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 15 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            style={{ width: '50%', padding: 8, marginTop: 5 }}
                        />
                    </label>
                </div>
                <button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
            </form>
            <footer>
                <p >23071A05R6 @copyrights</p>
            </footer>
        </div>
    );
}

export default Loginned;