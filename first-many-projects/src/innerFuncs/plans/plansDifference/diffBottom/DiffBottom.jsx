import React from "react";
import './DiffBottom.css'
import logo from '../../../../assets/logo.svg'

const DiffBottom = ({days, day, type, price}) => (
    <div className="diff-bottom">
        <div className="free">Free for {day} months</div>
        <div className="within">
            <div className="diff-bottom-top">
                <div className="premium-package">
                    <img src={logo} alt="logo"/>
                    Premium
                </div>
                <h1 className={'individual'}>{type}</h1>
                <div className="price-container">
                    <p className='for'>Free for {day} months</p>
                    <p className='price'>${price}/ month after</p>
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
                    <button>{days}</button>
                    <p>Individual plan only. ${price}/month after. Terms and conditions
                        apply. Open only to users who haven't already tried Premium.
                        Offer ends May 21, 2024.04
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default DiffBottom