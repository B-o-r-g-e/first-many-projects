import React from 'react';
import './connect.css'
import schedule from '../../assets/Shedule.png'
import {Link} from "react-router-dom";
// import socials from "../../assets/socials.png"

const Connect = () => (
    <div className="connect-container">
        <div className="connect">
            <div className="connect-left">
                <h1>Connect all the social
                    networks you love</h1>
                <p>We currently support Facebook, Instagram, LinkedIn and Twitter. More to come. Felix is purpose built for ease of use and complete flexability.</p>
                <Link to='/SignIn'>
                    <button>Get Started</button>
                </Link>
            </div>

            <div className="connect-right">
                <img src={schedule} alt="socials"/>
            </div>
        </div>
    </div>
)

export default Connect