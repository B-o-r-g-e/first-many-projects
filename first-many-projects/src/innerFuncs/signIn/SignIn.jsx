import React from 'react';
import './SignIn.css'
import {auth, provider} from "./googleSignIn/config.jsx";
import {signinWithPopup} from "firebase/auth"

const SignIn = () => {
    return (
        <div className="signIn">
            This is the SignIn
        </div>
    )
}

export default SignIn;