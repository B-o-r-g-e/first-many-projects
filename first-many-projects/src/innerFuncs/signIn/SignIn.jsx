import React, {useEffect} from 'react';
import './SignIn.css'
import {auth, provider} from "./googleSignIn/config.jsx";
import {signInWithPopup} from "firebase/auth"
import Home from "../../home/Home.jsx";
import logo from "../../assets/logo.svg";
import google from "../../assets/google.svg";

const SignIn = () => {
    const [values, setValues] = React.useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValues(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValues(localStorage.getItem("email"))
    }, []);

    return (
        <div className="signIn-container">
            <div className="signIn-logo-section">
                <img src={logo} alt="logo"/>
            </div>

            <div className="signIn">
                {values? <Home /> :
                    <button onClick={handleClick}>
                        <img src={google} alt="google"/>
                        Sign-in with Google</button>
                }
            </div>
        </div>


    )
}

export default SignIn;