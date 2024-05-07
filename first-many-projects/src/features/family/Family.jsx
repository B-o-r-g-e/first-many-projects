import React, {useState} from 'react';
import './family.css'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import dp from '../../assets/dp.png'
import dpIcon from '../../assets/dpIcon.png'
import star from '../../assets/Star.png'
import {Link} from "react-router-dom";


const Family = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const previousButton = () => {
        const newIndex = currentSlideIndex === 0 ? 2 : currentSlideIndex - 1;
        setCurrentSlideIndex(newIndex)
    };

    const nextButton = () => {
        const newIndex = currentSlideIndex === 2 ? 0 : currentSlideIndex + 1;
        setCurrentSlideIndex(newIndex)
    };




    return (
        <div className="family-container">
            <div className="family">
                <div className="family-top">
                    <h1>Our Happy Family</h1>
                    <div className="modal">
                        <button onClick={previousButton} className="modal-prev">
                            <img src={chevronLeft} alt="modal-prev"/>
                        </button>
                        <div className="modal-content">
                            <div className={`slide modal-mid ${currentSlideIndex === 0 ? 'active' : ''}`}>
                                <div className="dp-container">
                                    <img className={'dp'} src={dp} alt=""/>
                                    <img className={'dp-icon'} src={dpIcon} alt=""/>
                                </div>

                                <div className="name-container">
                                    <div className="name"> Mick G.,</div>
                                    <div className="position"> Head of Sales and Marketing</div>
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
                            <div className={`slide modal-mid ${currentSlideIndex === 1 ? 'active' : ''}`}>
                                <div className="dp-container">
                                    <img className={'dp'} src={dp} alt=""/>
                                    <img className={'dp-icon'} src={dpIcon} alt=""/>
                                </div>

                                <div className="name-container">
                                    <div className="name"> Mick G.,</div>
                                    <div className="position"> butt of Sales and Marketing</div>
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
                            <div className={`slide modal-mid ${currentSlideIndex === 2 ? 'active' : ''}`}>
                                <div className="dp-container">
                                    <img className={'dp'} src={dp} alt=""/>
                                    <img className={'dp-icon'} src={dpIcon} alt=""/>
                                </div>

                                <div className="name-container">
                                    <div className="name"> Mick G.,</div>
                                    <div className="position"> tail of Sales and Marketing</div>
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
                        </div>
                        <button onClick={nextButton} className="modal-prev">
                            <img src={chevronRight} alt="" className="next"/>
                        </button>
                    </div>
                </div>

                <div className="horizontal-line new-line"/>

                <div className="family-bottom">
                    <h1 className={'business'}>Businesses all over the world trust
                        Buffer to build their brand</h1>
                    <div className="family-bottom-count-container">
                        <div className="family-bottom-count">
                            <h1>10 years</h1>
                            <p>In Business</p>
                        </div>
                        <div className="family-bottom-count">
                            <h1>75,000+</h1>
                            <p>Customers</p>
                        </div>
                        <div className="family-bottom-count">
                            <h1>100k+</h1>
                            <p>Monthly Blog Readers</p>
                        </div>
                        <div className="family-bottom-count">
                            <h1>1.2m+</h1>
                            <p>Social Followers</p>
                        </div>
                    </div>
                    <div className="join">
                        <p>Join 160,000+ small businesses like yours</p>
                        <Link to="/Plans">
                            <button>Select a Plan</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Family