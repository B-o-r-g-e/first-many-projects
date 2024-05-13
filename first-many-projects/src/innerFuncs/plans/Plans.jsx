import React from 'react';
import './Plans.css'
import PlansHeader from "./plansHeader/PlansHeader.jsx";
import PlansDifference from "./plansDifference/plansDifference.jsx";
import PlansNav from "./plansNav/plansNav.jsx";
import PlansFooter from "./plansFooter/PlansFooter.jsx";

const Plans = () => {
    return (
        <div className="plans">
            <div className="gradient__bg">
                <PlansNav />
                <PlansHeader/>
            </div>
            <PlansDifference />
            <PlansFooter />
        </div>
    )
}

export default Plans;