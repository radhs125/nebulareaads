import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import adminLogo from '../assets/admin.png';
import NavBar from './navbar';
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === '123@gmail.com' && password === '123456789') {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/AdminHome');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <NavBar/>
        
        <div className="container">
            <div className="welcome-section">
                <img src={adminLogo} alt="Admin Logo" />
                <h2>Welcome to NebulaReads Admin</h2>
                <h5>Manage your portal efficiently.</h5>
            </div>
            <div className="login-section">
                <h1>Hello Admin!</h1>
                <p>Please enter your admin details to Login</p>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Admin Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error">{error}</p>}
                <div className="register">
                    <h4>Not an admin?</h4>
                    <Link to="/login">User Login</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AdminLogin;
