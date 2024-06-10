import React, {useEffect, useState} from 'react';
import './board.css'
import {Link} from "react-router-dom";

const Board = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setIsSignedIn(true);
        }
    }, []);

    return (
        <div className="Board common" id={'home'}>
            <div className="Board-container">
                <h1>All In One Social Media Management
                    Solution For Businesses</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {!isSignedIn
                    &&
                    <Link to={"/SignIn"}>
                        <button>Create Free Account</button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Board