import React from "react";
import './plansDifference.css';
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
                    <DiffBottom price={'10.99'} type={'Individual'} days={'Try free for 3 months'} />
                    <DiffBottom price={'5.99'} type={'Student'} days={'Try free for 1 months'} />
                    <DiffBottom price={'14.99'} type={'Duo'} days={2} />
                    <DiffBottom />
                </div>
            </div>
        </div>
    )
}

export default PlansDifference;