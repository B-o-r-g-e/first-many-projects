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
                <div className="contactUs-form-container">
                    <div className="contactUs-form">
                        <div className="contactUs-form-each">
                            <p>Name</p>
                            <input type="email" placeholder='Hello...'/>
                        </div>

                        <div className="contactUs-form-each">
                            <p>Email</p>
                            <input type='text' placeholder='Where should I reply'/>
                        </div>

                        <div className="contactUs-form-each message">
                            <p>Message</p>
                            <input type="text" placeholder='I want a help for...'/>
                        </div>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;