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
            </div>
        </div>
    )
}

export default ContactUs;