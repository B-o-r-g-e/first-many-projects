import React from 'react';
import './library.css'
import { Board, Tool, TrialOffer, Working, Family, Simple, Footer, Brands, BottomBoard, DoingBoard, NewsArticle, Connect, DoingSecond, BrandBusiness, Tech, NavBar} from '../index.js'

const Library = () => (
    <div className="library">
        <NavBar />
        <div className="boards">
            <Board />
            <BottomBoard />
        </div>
        <Brands />
        <div className="ToolBrand">
            <Tool />
            <BrandBusiness />
        </div>
        <Simple />
        <div className="DoingBoard-container">
            <DoingBoard />
            <DoingSecond />
        </div>
        {/*<Connect />*/}
        {/*<Working />*/}
        {/*<Family />*/}
        {/*<NewsArticle />*/}
        {/*<TrialOffer />*/}
        {/*<Tech />*/}
        {/*<Footer />*/}
    </div>
)

export default Library