import React from 'react';
import './doing-board.css'
import {Link} from "react-router-dom";

const DoingBoard = () => (
    <div className="doing-board-container">
        <div className="doing-board">
            <div className="doing-board-left">
                <h1>Doing Everything <br/>
                    Yourself is Difficult</h1>
                <p>Crush your social goals.Again and again</p>
            </div>
            <Link to="/">
                <div className="doing-board-right">
                    <button>Contact Us</button>
                </div>
            </Link>
        </div>
    </div>
)

export default DoingBoard