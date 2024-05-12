import React, {useEffect, useState} from "react";
import './plansDifference.css';
import DiffBottom from "./diffBottom/DiffBottom.jsx";
import chevronLeft from "../../../assets/chevron-left.png";

const PlansDifference= () => {
    const [counter, setCounter] = useState(0);
    const [slides, setSlides] = useState([]);

    const prevBtn = () => {
        setCounter(prevCounter => prevCounter - 1);
    };

    const nextBtn = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    useEffect(() => {
        const slides = document.querySelectorAll('.each');
        setSlides(slides);
    }, []);

    useEffect(() => {
        // Hide/show previous button based on counter
        const prevButton = document.querySelector('.previous');
        if (prevButton) {
            counter > 0 ? prevButton.style.visibility = 'visible' : prevButton.style.visibility = 'hidden';
        }

        // Hide/show next button based on counter
        const nextButton = document.querySelector('.next');
        if (nextButton) {
            counter < slides.length - 3 ? nextButton.style.visibility = 'visible' : nextButton.style.visibility = 'hidden';
        }

        // Slide animation using translateX
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });

    }, [counter, slides]);



    return (
        <div className="plans-difference-container" id={'pricing'}>
            <div className="plans-difference">
                <div className="diff-top">
                    <h1>Experience the difference</h1>
                    <p>Go Premium and enjoy full control with GPT4. Cancel anytime.</p>
                </div>

                <div className="dfc">
                    <button onClick={prevBtn} className="modal-prev previous">
                        <img src={chevronLeft} alt="modal-prev"/>
                    </button>
                    <div className="diff-bottom-container">
                        <DiffBottom price={10.99} type={'Individual'} day={3} days={'Try free for 3 months'}/>
                        <DiffBottom change={'student'} price={5.99} type={'Student'} day={1}
                                    days={'Try free for 1 months'}/>
                        <DiffBottom change={'duo'} price={14.99} type={'Duo'} day={0} days={'Get Premium Duo'}/>
                        <DiffBottom change={'fam'} price={16.99} type={'Family'} days={'Get Premium Family'} day={0}/>
                    </div>
                    <button onClick={nextBtn} className="modal-prev next">
                        <img src={chevronLeft} alt="" className="next"/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PlansDifference;