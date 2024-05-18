import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './SignIn.css';
import { auth, provider } from './googleSignIn/config.jsx';
import { signInWithPopup } from 'firebase/auth';
import Home from '../../home/Home.jsx';
import logo from '../../assets/logo.svg';
import google from '../../assets/google.svg';

const SignIn = () => {
    const [email, setEmail] = useState(null);
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const userEmail = result.user.email;
            setEmail(userEmail);
            localStorage.setItem('email', userEmail);
            navigate(-1); // Navigate back to the previous page
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
                <Link to={'/'}>
                    <img src={logo} alt="logo"/>
                </Link>
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
