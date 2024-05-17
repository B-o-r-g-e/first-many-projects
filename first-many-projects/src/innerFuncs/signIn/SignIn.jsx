import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { auth, provider } from './googleSignIn/config.jsx';
import { signInWithPopup } from 'firebase/auth';
import Home from '../../home/Home.jsx';
import logo from '../../assets/logo.svg';
import google from '../../assets/google.svg';

const SignIn = () => {
    const [email, setEmail] = useState(null);

    const handleClick = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result)
            const userEmail = result.user.email;
            setEmail(userEmail);
            localStorage.setItem('email', userEmail);
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    if (email) {
        return <Home />;
    }

    return (
        <div className="signIn-container">
            <div className="signIn-logo-section">
                <img src={logo} alt="logo" />
            </div>
            <div className="signIn">
                <div className="login">
                    <h1>Log in to GPT-3</h1>
                    <button onClick={handleClick}>
                        <img src={google} alt="google" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
