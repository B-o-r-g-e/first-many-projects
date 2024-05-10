import React from "react";
import './DiffBottom.css'
import logo from '../../../../assets/logo.svg'

const DiffBottom = () => (
    <div className="diff-bottom">
        <div className="free">Free for 3 months</div>
        <div className="within">
            <div className="diff-bottom-top">
                <div className="premium-package">
                    <img src={logo} alt="logo"/>
                    Premium
                </div>
                <h1 className={'individual'}>Individual</h1>
                <div className="price-container">
                    <p className='for'>Free for 3 months</p>
                    <p className='price'>$10.99 / month after</p>
                </div>
            </div>

            <div className="horizontal-line new-line"/>

            <div className="diff-bottom-bottom">
                <div className="criteria">
                    <ul>
                        <li>1 Premium account</li>
                        <li>Cancel anytime</li>
                        <li>15 hours/month of listening time from our audiobooks subscriber catalog</li>
                    </ul>
                </div>
                <div className="activate-container">
                    <button>Free for 3 months</button>
                    <p>Individual plan only. $10.99/month after. Terms and conditions
                        apply. Open only to users who haven't already tried Premium.
                        Offer ends May 21, 2024.04
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default DiffBottom