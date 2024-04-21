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
        {/*<Tool />*/}
        {/*<BrandBusiness />*/}
        {/*<Simple />*/}
        {/*<DoingBoard />*/}
        {/*<DoingSecond />*/}
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