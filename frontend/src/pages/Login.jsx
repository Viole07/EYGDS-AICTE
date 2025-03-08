import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            if (response.data.message === "User logged in") {
                const token = response.data.token; // Get the token from the response
                localStorage.setItem("token", token); // Store the token in local storage
                setIsLoggedIn(true);
                navigate('/home');
            }
        } catch (err) {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="auth-background">
            <div className="auth-container">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {error && <p className="error">{error}</p>}
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>New user? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};  

export default Login;
