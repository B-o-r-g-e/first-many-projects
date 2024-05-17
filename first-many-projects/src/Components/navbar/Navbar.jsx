import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import logoutIcon from '../../assets/logout.png'; // Renamed to avoid confusion with the function
import './navbar.css';
import {Link} from "react-router-dom";

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">OpenAI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setIsSignedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('email');
        setIsSignedIn(false);
    };

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                {!isSignedIn ? (
                    <>
                        <Link to={"/SignIn"}>
                            <button className={'sss'}>Sign in</button>
                        </Link>
                        <button className='sign-up' type="button">Sign Up</button>
                    </>
                ) : (
                    <button className="logout" onClick={handleLogout}>
                        <img className='logout-img' src={logoutIcon} alt="logout" />
                        logout
                    </button>
                )}
            </div>

            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            {!isSignedIn ? (
                                <div className="gpt3__navbar-menu_container-links-sign">
                                    <p>Sign in</p>
                                    <button type="button">Sign Up</button>
                                </div>
                            ) : (
                                <button className="logout" onClick={handleLogout}>
                                    <img className='logout-img' src={logoutIcon} alt="logout" />
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
