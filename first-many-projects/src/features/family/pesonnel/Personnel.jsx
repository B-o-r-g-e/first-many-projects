import React, { useEffect, useState } from 'react';
import dpIcon from "../../../assets/dpIcon.png";
import star from "../../../assets/Star.png";
import './Personnel.css';

const Personnel = ({ image, name, position, desc }) => {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        // Update background image when 'image' prop changes
        setBackgroundImage(`url(${image})`);
    }, [image]); // Run effect when 'image' prop changes

    return (
        <div className="slide modal-mid">
            <div className="dp-container">
                <div className="dp-img-container" style={{ backgroundImage: backgroundImage }}></div>
                <img className="dp-icon" src={dpIcon} alt="DP Icon" />
            </div>

            <div className="name-container">
                <div className="name">{name},</div>
                <div className="position">{position}</div>
            </div>

            <img src={star} alt="Star" className="rating" />

            <div className="details">{desc}</div>
        </div>
    );
};

export default Personnel;
