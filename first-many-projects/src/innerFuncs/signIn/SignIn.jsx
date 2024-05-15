import React from 'react';
import './SignIn.css'
import {auth, provider} from "./googleSignIn/config.jsx";
import {signinWithPopup} from "firebase/auth"

const SignIn = () => {
    const handleClick = () => [
        signinWithPopup(auth, provider)
    ]

    return (
        <div className="signIn">
            <button>Sign-in with Google</button>
        </div>
    )
}

export default SignIn;