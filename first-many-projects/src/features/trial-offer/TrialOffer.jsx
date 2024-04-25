import React from 'react';
import './trial-offer.css'
import benefitIcon from '../../assets/benefitIcon.svg'

const TrialOffer = () => (
    <div className="trial-offer-container">
        <div className="trial-offer">
            <div className="trial-offer-left">
                <h1></h1>
                <p></p>
                <div className="input-area">
                    <input type="text" placeholder={'Enter your Email'}/>
                    <button>start</button>
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
                <img src="" alt=""/>
            </div>
        </div>
    </div>
)

export default TrialOffer