import React from "react";
import './plansDifference.css';

const PlansDifference= () => {
    return (
        <div className="plans-difference">
            <div className="diff-top">
                <h1>Experience the difference</h1>
                <p>Go Premium and enjoy full control. Cancel anytime.</p>
            </div>

            <div className="diff-bottom-container">
                <div className="diff-bottom">
                    <div className="free">Free for 3 months</div>
                    <div className="diff-bottom-top">
                        <div className="premium-package">
                            <img src="" alt=""/>
                            Premium
                        </div>
                        <h1>Individual</h1>
                        <div className="price-container">
                            <h1>Free for 3 months</h1>
                            <p>$10.99 / month after</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PlansDifference;