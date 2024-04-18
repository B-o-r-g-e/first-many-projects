import React from 'react';
import './bottom-board.css'
import logo from "../../assets/Logo1.png"

const BottomBoard = () => (
    <div className="BottomBoard-container common">
        <div className="BottomBoard">
            <div className="BottomBoard-top">
                <div className="BottomBoard-top-left">
                    <div className="BottomBoard-top-left-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="BottomBoard-top-right-social">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>

                <div className="BottomBoard-top-middle"></div>
                <div className="BottomBoard-top-right"></div>
            </div>

            <div className="BottomBoard-bottom"></div>
        </div>
    </div>
)

export default BottomBoard