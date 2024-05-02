import React from 'react';
import './brand-business.css'
import chart from '../../assets/chart.png'
import schedule from '../../assets/Shedule.png'
import trusted from '../../assets/Trusted.png'

const BrandBusiness = () => (
    <div className="BrandBusiness-container">
        <div className="BrandBusiness">
            <img src={chart} alt="" className="chart"/>
            <img src={schedule} alt="" className="schedule"/>
            <img src={trusted} alt="" className="trusted"/>
        </div>
    </div>
)

export default BrandBusiness