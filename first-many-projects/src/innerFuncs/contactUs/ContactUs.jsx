import React from 'react';
import './ContactUs.css'
import {Navbar} from "../../Components/index.js";

const ContactUs = () => {
    return (
        <div className="contactUs-container">
            <div className="contactUs">
                <div className="contactUs-nav">
                    <Navbar />
                </div>
                <div className="contactUs-header">
                    <h1>Let's Connect and Navigate Your Tech Goals</h1>
                    <p>We are here to listen, advice, and help you achieve
                        your tech dreams. Schedule your call today</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;