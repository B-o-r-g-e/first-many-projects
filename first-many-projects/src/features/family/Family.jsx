import React from 'react';
import './family.css'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'

const Family = () => (
    <div className="family-container">
       <div className="family">
           <div className="family-top">
               <h1>Our Happy Family</h1>
               <div className="modal">
                   <button className="prev">
                       <img src={chevronLeft} alt="previous"/>
                   </button>
                   <div className="mid">
                       <div className="dp-container">
                           <img src="" alt=""/>
                           <img src="" alt=""/>
                       </div>

                       <div className="name-container">
                           <div className="name"></div>
                           <div className="position"></div>
                       </div>

                       <img src="" alt="" className="rating"/>

                       <div className="details">

                       </div>
                   </div>
                   <img src={chevronRight} alt="" className="next"/>
               </div>
           </div>

           <div className="family-bottom"></div>
       </div>
    </div>
)

export default Family