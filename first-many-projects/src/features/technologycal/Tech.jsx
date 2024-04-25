import React from 'react';
import './tech.css'
import logo from '../../assets/logo.svg'

const Tech = () => (
    <div className="tech-container">
        <div className="tech">
            <div className="tech-logo-area">
                <img className="tech-logo" src={logo} alt="Our Logo" />
            </div>
        </div>
    </div>
)

export default Tech