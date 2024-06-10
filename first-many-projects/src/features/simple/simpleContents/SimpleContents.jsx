import React from "react";
import "./simpleContents.css";
import {Link} from "react-router-dom";

const SimpleContents = ({categories, titles, theIcon}) => {
    return (
        <div className="simple-container-body-contents">
            <div className="simple-container-body-first">
                <div className="category">{categories}</div>
                <h1 className="title">{titles}</h1>
                <p className="words">
                    Building an enterprise doesn't need
                    nightmare or cost your thousands.
                    Felix is purpose built.</p>
            </div>

            <hr className="horizontal-line"/>

            <div className="simple-container-body-second">
                <img src={theIcon} alt="icon"/>
                <Link to="/SignIn">
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default SimpleContents;