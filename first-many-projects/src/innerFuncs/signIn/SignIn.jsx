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
                {
                    values
                        ? <Home />
                        : <div className="login">
                            <h1>Log in to GPT3</h1>
                            <button onClick={handleClick}>
                                <img src={google} alt="google"/>
                                Continue with Google
                            </button>
                        </div>

                }
            </div>
        </div>


    )
}

export default SignIn;