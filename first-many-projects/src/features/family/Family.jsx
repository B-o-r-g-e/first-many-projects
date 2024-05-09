import React, {useEffect, useState} from 'react';
import './family.css'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import dp from '../../assets/dp.png'
import dpIcon from '../../assets/dpIcon.png'
import star from '../../assets/Star.png'
import {Link} from "react-router-dom";


const Family = () => {
    const [counter, setCounter] = useState(0);
    const [slides, setSlides] = useState([]);

    // Fetch and set slides when component mounts
    useEffect(() => {
        const slides = document.querySelectorAll('.slide');
        setSlides(slides);
    }, []);

    const prevBtn = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    const nextBtn = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    useEffect(() => {
        // Hide/show previous button based on counter
        const prevButton = document.querySelector('.previous');
        if (prevButton) {
            counter > 0 ? prevButton.style.visibility = 'visible' : prevButton.style.visibility = 'hidden';
        }

        // Hide/show next button based on counter
        const nextButton = document.querySelector('.next');
        if (nextButton) {
            counter < slides.length - 1 ? nextButton.style.visibility = 'visible' : nextButton.style.visibility = 'hidden';
        }

        // Slide animation using translateX
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });

    }, [counter, slides]);




    return (
        <div className="family-container">
            <div className="family">
                <div className="family-top">
                    <h1>Our Happy Family</h1>
                    <div className="modal">
                        <button onClick={prevBtn} className="modal-prev previous">
                            <img src={chevronLeft} alt="modal-prev"/>
                        </button>
                        <div className="modal-content">
                            <div className={`slide modal-mid`}>
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
                            <div className={`slide modal-mid`}>
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
                            <div className={`slide modal-mid`}>
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
                        <button onClick={nextBtn} className="modal-prev next">
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