import React from 'react';
import './bottom-board.css'
import logo from "../../assets/Logo1.png"
import facebook from "../../assets/Fb.png"
import Pinterest from "../../assets/Pintrest.png"
import instagram from "../../assets/Insta.png"
import twitter from "../../assets/Twiter.png"
import add from "../../assets/add.png"
import love from "../../assets/love.png"
import more from "../../assets/chevron-down.png"

const BottomBoard = () => (
    <div className="BottomBoard-container">
        <div className="BottomBoard">
            <div className="BottomBoard-top">
                <div className="BottomBoard-top-left">
                    <div className="BottomBoard-top-left-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="BottomBoard-top-right-social">
                        <img className={'insta'} src={instagram} alt="instagram"/>
                        <img className={'fb'} src={facebook} alt="facebook"/>
                        <img className={'twitter'} src={twitter} alt="twitter"/>
                        <img className={'pinterest'} src={Pinterest} alt="pinterest"/>
                        <div className="more">
                            <img className={'mre'} src={add} alt="more"/>
                        </div>
                    </div>
                    <div className="BottomBoard-top-right-today">
                        Today
                    </div>
                </div>

                <div className="BottomBoard-top-middle">
                    <div className="BottomBoard-top-right-today mid stories">
                        Stories
                        <img src={more} alt="more"/>
                    </div>
                    <div className="BottomBoard-top-right-today mid post">Post</div>
                    <div className="BottomBoard-top-right-today mid blog">Blog</div>
                </div>

                <div className="BottomBoard-top-right">
                    <div className="BottomBoard-top-right-today mid prev">Preview</div>
                    <div className="BottomBoard-top-right-today mid week">Week</div>
                    <div className="BottomBoard-top-right-today mid month">Month</div>
                    <div className="love">
                        <img src={love} alt="love"/>
                    </div>
                </div>
            </div>

            <hr className="horizontal-line"/>

            <div className="BottomBoard-bottom"></div>
        </div>
    </div>
)

export default BottomBoard