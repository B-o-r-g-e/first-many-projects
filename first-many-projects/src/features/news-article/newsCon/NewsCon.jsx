import React from 'react';
import './NewsCon.css'

const NewsCon = ({title}) => (
    <>
        <div className="article-img">
            <div className="article-img-categories">
                <p>Analyse</p>
                <p>Marketing</p>
            </div>
        </div>
        <div className="dateRead">
            <div className="date">December 05, 2021</div>
            <div className="read">3 min read</div>
        </div>
        <div className="article-body-container">
            <h1>{title}</h1>
            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has
                been the standard dummy.</p>
            <p className="view-more ">View More</p>
        </div>
    </>

)

export default NewsCon