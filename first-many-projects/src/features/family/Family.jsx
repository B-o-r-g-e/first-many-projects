import React, {useEffect, useState} from 'react';
import './family.css'
import chevronLeft from '../../assets/chevron-left.png'
import dp from '../../assets/dp.png'
import john from '../../assets/John.jpg'
import Mary from '../../assets/mary.jpg'
import Patricia from '../../assets/Patricia.jpg'
import Jennifer from '../../assets/Jennifer.jpg'
import Linda from '../../assets/Linda.jpg'
import Elizabeth from '../../assets/Elizabeth.jpg'
import Susan  from '../../assets/Susan.jpg'
import Jessica from '../../assets/Jessica.jpg'
import Sarah from '../../assets/Sarah.jpg'
import {Link} from "react-router-dom";
import Personnel from "./pesonnel/Personnel.jsx";


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
                            <Personnel position={'Managing Director'} name={'James Smith'} image={dp} />
                            <Personnel position={'Worker'} name={'John Johnson'} image={john} />
                            <Personnel position={'Worker'} name={'Patricia Brown'} image={Patricia} />
                            <Personnel position={'Worker'} name={'Jennifer Davis'} image={Jennifer} />
                            <Personnel position={'Worker'} name={'Linda Wilson'} image={Linda} />
                            <Personnel position={'Worker'} name={'Elizabeth Moore'} image={Elizabeth} />
                            <Personnel position={'Worker'} name={'Susan Anderson'} image={Susan} />
                            <Personnel position={'Worker'} name={'Jessica Taylor'} image={Jessica} />
                            <Personnel position={'Worker'} name={'Sarah Martinez'} image={Sarah} />
                            <Personnel position={'Worker'} name={'Mary Johnson'} image={Mary} />
                        </div>
                        <button onClick={nextBtn} className="modal-prev next">
                            <img src={chevronLeft} alt="" className="next"/>
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