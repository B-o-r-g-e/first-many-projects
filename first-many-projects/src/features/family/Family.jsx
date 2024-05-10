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
                            <Personnel position={'Managing Director'} name={'James Smith'} image={dp} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius libero ac diam lacinia, non cursus ipsum tristique. Fusce fringilla justo vel sapien ultrices, in malesuada nulla tincidunt. Quisque congue sapien vel tellus fermentum, quis ultricies leo dignissim. Integer ac eros at velit gravida rhoncus vel ac urna.'} />
                            <Personnel position={'Worker'} name={'John Johnson'} image={john} desc={'Suspendisse potenti. Sed euismod lectus non lorem tincidunt, id malesuada erat rutrum. Curabitur id odio nec felis fringilla consequat. Nullam id leo non justo luctus fermentum. Vivamus eu nunc ac ligula pharetra laoreet. Aliquam erat volutpat.'} />
                            <Personnel position={'Worker'} name={'Patricia Brown'} image={Patricia} desc={'Nullam interdum libero at nisi auctor, at lacinia mi tristique. Vivamus dictum bibendum erat, in malesuada leo congue eget. Aliquam tempor tellus sed turpis lacinia dictum. Nunc eleifend, eros non congue molestie, erat dui bibendum turpis, non pellentesque turpis felis eu elit.'} />
                            <Personnel position={'Worker'} name={'Jennifer Davis'} image={Jennifer} desc={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam venenatis tellus vel ultrices faucibus. Sed auctor magna eget magna auctor tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris suscipit elit velit.'} />
                            <Personnel position={'Worker'} name={'Linda Wilson'} image={Linda} desc={'Maecenas molestie libero at erat consequat tincidunt. Cras interdum ante vitae nisl auctor, sed varius libero vulputate. Nulla tincidunt justo in tortor pretium, eget ultrices nulla posuere. Phasellus faucibus erat nec justo gravida, vitae lacinia velit varius. Aenean posuere risus nec libero ultrices, id consequat eros auctor.'} />
                            <Personnel position={'Worker'} name={'Elizabeth Moore'} image={Elizabeth} desc={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut lacinia euismod justo, eu tristique nisl bibendum ut. Maecenas vel nisi in risus dignissim pulvinar non et justo. Fusce nec tellus nec justo auctor egestas. Ut ac nisi nec risus consequat commodo.'} />
                            <Personnel position={'Worker'} name={'Susan Anderson'} image={Susan} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius libero ac diam lacinia, non cursus ipsum tristique. Fusce fringilla justo vel sapien ultrices, in malesuada nulla tincidunt. Quisque congue sapien vel tellus fermentum, quis ultricies leo dignissim.'} />
                            <Personnel position={'Worker'} name={'Jessica Taylor'} image={Jessica} desc={'Suspendisse potenti. Sed euismod lectus non lorem tincidunt, id malesuada erat rutrum. Curabitur id odio nec felis fringilla consequat. Nullam id leo non justo luctus fermentum. Vivamus eu nunc ac ligula pharetra laoreet.'} />
                            <Personnel position={'Worker'} name={'Sarah Martinez'} image={Sarah} desc={'Maecenas molestie libero at erat consequat tincidunt. Cras interdum ante vitae nisl auctor, sed varius libero vulputate. Nulla tincidunt justo in tortor pretium, eget ultrices nulla posuere. Phasellus faucibus erat nec justo gravida, vitae lacinia velit varius.'} />
                            <Personnel position={'Worker'} name={'Mary Johnson'} image={Mary} desc={'Mauris suscipit elit velit, nec egestas leo blandit at. Vivamus vitae sapien in libero efficitur ullamcorper. Donec eu nibh lacinia, gravida nisl eget, cursus est. Curabitur ultricies scelerisque felis at varius. Duis vestibulum lectus eu magna malesuada ultricies. Suspendisse sit amet ipsum massa.'} />
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