import calTime from "../../../assets/caltime.svg";
import React from "react";
import simpleContents from "./simpleContents.css";

const SimpleContents = () => {
    return (
        <div className="simple-container-body-contents">
            <div className="simple-container-body-first">
                <p className="category">Publish</p>
                <h1 className="title">Save time
                    by scheduling posts</h1>
                <p className="words">
                    Building an enterprise doesn't need
                    nightmare or cost your thousands.
                    Felix is purpose built.</p>
            </div>

            <hr className="horizontal-line"/>

            <div className="simple-container-body-second">
                <img src={calTime} alt="icon"/>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default SimpleContents;