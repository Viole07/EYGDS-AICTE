import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <h2>Welcome to TastyBites</h2>
            <p>Please log in or register to continue.</p>
            <Link to="/login" style={{textDecoration:'none'}}>Login</Link><br />
            <Link to="/register" style={{textDecoration:'none'}}>Register</Link>
        </div>
    );
};

export default LandingPage;
