import React from 'react';
import './Plans.css'
import {Navbar} from "../../Components/index.js";
// import {Header} from "../../containers/index.js";
import PlansHeader from "./plansHeader/PlansHeader.jsx";
import PlansDifference from "./plansDifference/plansDifference.jsx";

const Plans = () => {
    return (
        <div className="plans">
            <div className="gradient__bg">
                <Navbar/>
                <PlansHeader/>
            </div>
                <PlansDifference />
            </div>
        </div>
    )
}

export default Plans;