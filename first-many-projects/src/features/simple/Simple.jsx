import React from 'react';
import './simple.css'
import SimpleContents from "./simpleContents/SimpleContents.jsx";
import calTime from '../../assets/caltime.svg'
import calTime1 from '../../assets/caltime1.svg'
import calTime2 from '../../assets/caltime2.svg'
import calTime3 from '../../assets/caltime3.svg'
import calTime4 from '../../assets/caltime4.svg'
import calTime5 from '../../assets/caltime5.svg'

const Simple = () => (
    <div className="simple-container">
        <div className="simple-container-header">
            <h1>Simple, Yet Powerful Features</h1>
        </div>

        <div className="simple-container-body">
            <SimpleContents categories={'Publish'} titles={'Save time by scheduling posts'} theIcon={calTime} />
            <SimpleContents categories={'respond'} titles={'All your conversations in one place'} theIcon={calTime1} />
            <SimpleContents categories={'Automate'} titles={'Truly automate your social media'} theIcon={calTime2} />
            <SimpleContents categories={'monitor'} titles={'Listen to what they say about you'} theIcon={calTime3} />
            <SimpleContents categories={'Analyze'} titles={'Detailed insights for your social media'} theIcon={calTime4} />
            <SimpleContents categories={'Creative Content'} titles={'Artificial Intelligence trained Team'} theIcon={calTime5} />
        </div>

    </div>
)

export default Simple