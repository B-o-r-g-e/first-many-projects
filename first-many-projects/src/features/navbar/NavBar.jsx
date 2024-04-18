import React from 'react';
import './navbar.css'
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg"

const NavBar = () => (
    <nav className="navbar navbar-container">
        <div className="gpt3__navbar-links__logo">
            <img src={logo} alt="logo"/>
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">Explore</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Blog</li>
        </ul>

        <div className="cart-signIn">
            <div className="cart-container">
                <img src={cart} alt="cart"/>
            </div>
            <div className="signIn-container">
                <div className="signIn">Sign In</div>
            </div>
        </div>
    </nav>
)

export default NavBar;