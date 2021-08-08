import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './user.css'
import { useUserContext } from '../../contexts/UserContext';
import apiUrl from '../../axios';

export default function Signup() {
    const [error, setError] = useState(null);
    const confirmPassword = useRef();
    const history = useHistory();
    const {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword
    } = useUserContext();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword.current.value) {
            return setError('passwords do not match!');
        }

        try {
            e.preventDefault();
            const response = await apiUrl.post('/users/signup', {
                name: name,
                email: email,
                password: password
            });

        console.log(response.data);

        localStorage.setItem('token', response.data.token);
        history.push('/');
        } catch (err) {
            setError('Cannot create account!')
        }
    }

    return (
        <>
            <div className="signup-container">
                <div className="title">
                    <h1>Sign Up</h1>
                </div>
                { error && <h4 className="error" >{error}</h4>}
                <form onSubmit={handleSignup} className="signup-form">
                    <div className="name-container">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
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
                    <div className="password-container">
                        <label>Confirm password</label>
                        <input 
                            type="password" 
                            name="password" 
                            required
                            ref={confirmPassword}
                        />
                    </div>
                    <button type="submit" className="signup-button">Create account</button>
                </form>
                <h3>Already have an account? 
                    <Link to="/users/login"> Log in</Link>
                </h3>
            </div>
        </>
    );
}
