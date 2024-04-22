import React from 'react';
import './simple.css'

const Simple = () => (
    <div className="simple-container">
        <div className="simple-container-header">
            <h1>Simple, Yet Powerful Features</h1>
        </div>

        <div className="simple-container-body">
            <div className="simple-container-body-first">
                <p className="category">Publish</p>
                <h1 className="title">Save time
                    by scheduling posts</h1>
                <p className="words">
                    Building an enterprisedoesn't need
                    nightmare or cost your thousands.
                    Felix is purpose built.</p>
            </div>
            <div className="simple-container-body-second">
                <img src="" alt="icon"/>
                <button>Get Started</button>
            </div>
        </div>
    </div>
)

export default Simple