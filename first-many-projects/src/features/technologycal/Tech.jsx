import React from 'react';
import './tech.css'
import logo from '../../assets/logo.svg'

const Tech = () => (
    <div className="tech-container">
        <div className="tech">
            <img src={logo} alt="Our Logo" />
            <button>See our Case Studies</button>
        </div>
    </div>
)

export default Tech