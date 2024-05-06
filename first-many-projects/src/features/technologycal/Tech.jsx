import React from 'react';
import './tech.css'
import logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";

const Tech = () => (
    <div className="tech-container">
        <div className="tech">
            <img src={logo} alt="Our Logo" />
            <Link to='/CaseStudy'>
                <button>See our Case Studies</button>
            </Link>
        </div>
    </div>
)

export default Tech