import React from 'react';
import dpIcon from "../../../assets/dpIcon.png";
import star from "../../../assets/Star.png";
import './Personnel.css'

const Personnel = ({ image, name, position }) => {
    return (
        <div className={`slide modal-mid`}>
            <div className="dp-container">
                <img className={'dp'} src={image} alt=""/>
                <img className={'dp-icon'} src={dpIcon} alt=""/>
            </div>

            <div className="name-container">
                <div className="name"> {name},</div>
                <div className="position"> {position}</div>
            </div>

            <img src={star} alt="" className="rating"/>

            <div className="details">
                Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                dummy text ever since the when an unknown printer
                took a galley of type and scrambled it to make a
                type specimen book.
            </div>
        </div>
    )
}

export default Personnel;