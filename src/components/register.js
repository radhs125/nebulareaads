import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import girlcat from '../assets/girlcat.jpeg'; 
import NavBar from './navbar';
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const user = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            role: 'user' // Default role
        };

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert('Registration successful');
                navigate('/login'); // Redirect to login page on success
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="welcome-section">
                    <img src={girlcat} alt="a girl with cat" />
                    <h2>Welcome to NebulaReads</h2>
                    <h5>Your portal to endless books and learning.</h5>
                </div>
                <div className="login-section">
                    <h1>Hello!</h1>
                    <p>Please enter your contact details to Register</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                    <div className="register">
                        <h4>Already have an account?</h4>
                        <Link to="/login">Login here!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
