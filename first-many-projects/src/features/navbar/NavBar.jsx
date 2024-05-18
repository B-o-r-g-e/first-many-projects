import React, {useEffect, useState} from 'react';
import './navbar.css'
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg"
import {Link} from "react-router-dom";
import handleLogout from '../../Components/navbar/Navbar.jsx'



const NavBar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setIsSignedIn(true);
        }
    }, []);

    export const handleLogout = () => {
        localStorage.removeItem('email');
        setIsSignedIn(false);
    };

    return (
        <nav className="navbar navbar-container common" id='libNav'>
            <Link to="/">
                <div className="library-logo gpt3__navbar-links__logo">
                    <img src={logo} alt="logo"/>
                </div>
            </Link>

            <ul className="navbar-nav">
                <Link to="/">
                    <li className="nav-item">Home</li>
                </Link>
                <li className="nav-item"><a href={"#tool"}>Explore</a></li>
                <li className="nav-item"><a href={"#pricing"}>Pricing</a></li>
                <li className="nav-item"><a href={"#blog"}>Blog</a></li>
            </ul>

            <div className="cart-signIn">
                <Link to="/Cart">
                    <button className="cart-container">
                        <img src={cart} alt="cart"/>
                    </button>
                </Link>
                <Link to="/SignIn">
                    <div className="sign-container">
                        <button className="sign">Sign In</button>
                    </div>
                </Link>
            </div>
        </nav>
    )

}

export default NavBar;