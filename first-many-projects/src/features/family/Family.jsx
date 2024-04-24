import React from 'react';
import './family.css'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import dp from '../../assets/dp.png'
import dpIcon from '../../assets/dpIcon.png'
import star from '../../assets/Star.png'

const Family = () => (
    <div className="family-container">
       <div className="family">
           <div className="family-top">
               <h1>Our Happy Family</h1>
               <div className="modal">
                   <button className="prev">
                       <img src={chevronLeft} alt="modal-prev"/>
                   </button>
                   <div className="modal-mid">
                       <div className="dp-container">
                           <img src={dp} alt=""/>
                           <img src={dpIcon} alt=""/>
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
                   <img src={chevronRight} alt="" className="next"/>
               </div>
           </div>

           <div className="family-bottom"></div>
       </div>
    </div>
)

export default Family