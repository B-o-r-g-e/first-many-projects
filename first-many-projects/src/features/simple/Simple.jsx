import React from 'react';
import './simple.css'
import SimpleContents from "./simpleContents/SimpleContents.jsx";
import calTime from '../../assets/caltime.svg'

const Simple = () => (
    <div className="simple-container">
        <div className="simple-container-header">
            <h1>Simple, Yet Powerful Features</h1>
        </div>

        <div className="simple-container-body">
            <SimpleContents categories={'Publish'} titles={'Save time by scheduling posts'} theIcon={calTime} />
        </div>

    </div>
)

export default Simple