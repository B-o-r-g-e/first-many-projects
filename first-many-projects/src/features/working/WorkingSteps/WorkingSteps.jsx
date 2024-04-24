import React from "react";
import "./WorkingSteps.css";

const WorkingSteps = ({step, heading, explain}) => {
    return (
        <div className="each-content">
            <h1>{step}</h1>
            <h2>{heading}</h2>
            <p>{explain}</p>
        </div>
    )
}

export default WorkingSteps;