import React from 'react';
import './PlansFooter.css'

const PlansFooter = () => {
    return (
        <div className="plans-footer-container">
            <div className="plans-footer">
                <div className="plans-footer-left">
                    <p>NEWSLETTER</p>
                    <div className="newsletter-register">
                        <input type="text" placeholder={'Enter your email'}/>
                        <button>Ask Question</button>
                    </div>
                </div>
                <div className="plans-footer-right"></div>
            </div>
        </div>
    )
}