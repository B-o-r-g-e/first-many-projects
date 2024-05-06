import React from 'react';
import './navbar.css'
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg"




// const cart = () => {
//
// }

const NavBar = () => (
    <nav className="navbar navbar-container common">
        <div className="library-logo gpt3__navbar-links__logo">
            <img src={logo} alt="logo"/>
        </div>

        <ul className="navbar-nav">
            <li className="nav-item"><a href={"#home"}>Home</a></li>
            <li className="nav-item"><a href={"#tool"}>Explore</a></li>
            <li className="nav-item"><a href={"#pricing"}>Pricing</a></li>
            <li className="nav-item"><a href={"#blog"}>Blog</a></li>
        </ul>

        <div className="cart-signIn">
            <button className="cart-container">
                <img src={cart} alt="cart"/>
            </button>
            <div className="sign-container">
                <button className="sign">Sign In</button>
            </div>
        </div>
    </nav>
)

export default NavBar;