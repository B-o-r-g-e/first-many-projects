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
import cup from "../../assets/cup.png"
import timer from "../../assets/Timer.png"
import image1 from "../../assets/Image.png"
import calendar from "../../assets/Calender.png"
import chat from "../../assets/Chat.png"
import imageIcon from "../../assets/Image-icon.png"
import graf from "../../assets/Graf.png"

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

            <div className="horizontal-line"/>

            <div className="BottomBoard-bottom">
                <div className="BottomBoard-bottom-first-layer">
                    <p className={'filter'}>Show Filter</p>
                    <img className={'cup'} src={cup} alt="cup"/>
                    <hr className="horizontal-line"/>
                    <p className="time">5:00AM</p>
                    <div className="timer">
                        <img src={timer} alt="timer"/>
                        10:00AM
                    </div>
                    <img className={'image1'} src={image1} alt="image"/>
                </div>

                <div className="BottomBoard-bottom-second-layer">
                    <div className="BottomBoard-bottom-second-layer-left">
                        <div className="BottomBoard-collage-menu">
                            <img src={calendar} alt=""/>
                            <img src={imageIcon} alt=""/>
                            <img src={chat} alt=""/>
                            <img src={graf} alt=""/>
                        </div>

                        <div className="BottomBoard-collage1">
                            <div className="small-box-container">
                                <img className={'small-box'} src={imageIcon} alt=""/>
                            </div>
                            <div className="medium-box-container">
                                <img className={'medium-box'} src={imageIcon} alt=""/>
                            </div>
                            <div className="small-box-container">
                                <img className={'small-box'} src={imageIcon} alt=""/>
                            </div>
                        </div>

                        <div className="BottomBoard-collage2"></div>
                    </div>

                    <div className="BottomBoard-bottom-second-layer-right"></div>
                </div>
            </div>
        </div>
    </div>
)

export default BottomBoard