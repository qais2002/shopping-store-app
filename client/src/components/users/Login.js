import React, { useState } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import { Link, useHistory } from 'react-router-dom';
import './user.css';
import apiUrl from '../../axios';

export default function Login() {
    const [error, setError] = useState(null);

    const history = useHistory();
    const {
        email,
        setEmail,
        password,
        setPassword
    } = useUserContext();


    const handleLogin = async (e) => {
        try {
            const token = await localStorage.getItem('token');
            e.preventDefault();
            const response = await apiUrl.post('/users/login', {
                email: email,
                password: password,
                headers: {
                    Authorization: `Bearer ${token}`
            }
            });
            console.log(response.data);
            history.push('/')
        } catch (err) {
            setError('Email or Password is incorrect!');
        }
        
     }

    return (
        <>
            <div className="login-container">
                <div className="login-title">
                    <h1>Log in</h1>
                </div>
                {error && <h4 className="error" >{error}</h4>}
                <form onSubmit={handleLogin} className="signup-form ">
                    <div className="email-container">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password-container">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-button">Log in</button>
                    <h3>Create an account? <Link to="/users/signup">Sign up</Link></h3>
                </form>
            </div>
        </>
    );
}
