import React from "react";
import "./simpleContents.css";

const SimpleContents = ({categories, titles, theIcon}) => {
    return (
        <div className="simple-container-body-contents">
            <div className="simple-container-body-first">
                <p className="category">{categories}</p>
                <h1 className="title">{titles}</h1>
                <p className="words">
                    Building an enterprise doesn't need
                    nightmare or cost your thousands.
                    Felix is purpose built.</p>
            </div>

            <hr className="horizontal-line"/>

            <div className="simple-container-body-second">
                <img src={theIcon} alt="icon"/>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default SimpleContents;