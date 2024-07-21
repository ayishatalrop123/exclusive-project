
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginSignUp.css';

const LoginSignUp = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication logic
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (isLogin) {
            // Login
            const user = users.find(user => user.email === formData.email && user.password === formData.password);
            if (user) {
                alert('Login successful');
                navigate('/');
            } else {
                alert('Invalid email or password');
            }
        } else {
            // Sign Up
            users.push(formData);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful');
            navigate('/');
        }
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>  
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Address"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Continue</button>
                </form>
                <p className="loginsignup-login">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Sign up here' : 'Login here'}
                    </span>
                </p>
                <div className="loginsignup-agree">
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;












