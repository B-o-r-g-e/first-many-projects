import React from "react";
import './PlansHeader.css';
import people from '../../../assets/people.png'
import ai from '../../../assets/ai.png'

const PlansHeader = () => {
    return (
        <div className="gpt3__header section__padding" id={'home'}>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    $0 for 3 months of Premium
                </h1>
                <p>
                    Nullam interdum libero at nisi auctor, at lacinia mi tristique.
                    Vivamus dictum bibendum erat, in malesuada leo congue eget. Aliquam t
                    empor tellus sed turpis lacinia dictum. Nunc eleifend, eros non
                    congue molestie, erat dui bibendum turpis, non pellentesque
                    turpis felis eu elit. Integer nec efficitur libero.
                </p>
                <div className="plansHeader-buttons">
                    <button className={'free-months'} type={"button"}>Try free for 3 months</button>
                    <button className={'view-plans'} type={"button"}>View all plans</button>
                </div>

                <div className="gpt3__header-content_people">
                    <img src={people} alt="people"/>
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai"/>
            </div>
        </div>
    )
}

export default PlansHeader;