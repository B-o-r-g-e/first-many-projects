import React from 'react';
import './tool.css'
import listIcon from '../../assets/list-icon.png';

const Tool = () => (
    <div className="tool-container common" id={'tool'}>
        <h1>The Tool That Feels Like a..</h1>
        <p>Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and complete flexability to create even the most powerful of products.</p>
        <div className="tool-list-container">
            <div className="tool-list-item">
                <img src={listIcon} alt=""/>
                Posting to social media, blogs, and messengers
            </div>
            <div className="tool-list-item">
                <img src={listIcon} alt=""/>
                Working with images and videos
            </div>
            <div className="tool-list-item">
                <img src={listIcon} alt=""/>
                The Future of Writing Blog Articles
            </div>
        </div>
        <button>Get Started</button>
    </div>
)

export default Tool