import React from 'react';
import './trial-offer.css'
import benefitIcon from '../../assets/benefitIcon.svg'
import benefitImage from '../../assets/trialImage (2).png'
import {Link} from "react-router-dom";

const TrialOffer = () => (
    <div className="trial-offer-container">
        <div className="trial-offer">
            <div className="trial-offer-left">
                <h1>Start your 7-day free trial</h1>
                <p>Felix can help bring your dream website to life with ease.</p>
                <div className="input-area">
                    <input type="text" placeholder={'Enter your Email'}/>
                    <Link to="/CreateAccount">
                        <button>start</button>
                    </Link>
                </div>
                <div className="benefits">
                    <div className="each-benefits">
                        <img src={benefitIcon} alt=""/>
                        Free 7-day trial
                    </div>
                    <div className="each-benefits">
                        <img src={benefitIcon} alt=""/>
                        No credit card required
                    </div>
                    <div className="each-benefits">
                        <img src={benefitIcon} alt=""/>
                        Cancel anytime
                    </div>
                </div>
            </div>

            <div className="trial-offer-right">
                <img src={benefitImage} alt=""/>
            </div>
        </div>
    </div>
)

export default TrialOffer