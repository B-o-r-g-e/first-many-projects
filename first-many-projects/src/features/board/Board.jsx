import React from 'react';
import './board.css'
import {Link} from "react-router-dom";

const Board = () => (
    <div className="Board common" id={'home'}>
        <div className="Board-container">
            <h1>All In One Social Media Management
                Solution For Businesses</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link to={"/CreateAccount"}>
                <button>Create Free Account</button>
            </Link>
        </div>
    </div>
)

export default Board