import React from "react";
import './plansDifference.css';
import logo from '../../../assets/logo.svg'
import DiffBottom from "./diffBottom/DiffBottom.jsx";

const PlansDifference= () => {
    return (
        <div className="plans-difference-container">
            <div className="plans-difference">
                <div className="diff-top">
                    <h1>Experience the difference</h1>
                    <p>Go Premium and enjoy full control with GPT4. Cancel anytime.</p>
                </div>

                <div className="diff-bottom-container">
                    <DiffBottom />
                    <DiffBottom />
                    <DiffBottom />
                    <DiffBottom />
                </div>
            </div>
        </div>
    )
}

export default PlansDifference;