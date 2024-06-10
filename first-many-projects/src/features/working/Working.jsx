import React from 'react';
import './working.css'
import WorkingSteps from './WorkingSteps/WorkingSteps.jsx'
import {Link} from "react-router-dom";

const Working = () => (
    <div className="working-container">
        <div className="working">
            <div className="working-right">
                <h1>Our Working Process - How <br/>
                    We Work For Our <br/> Customers</h1>
                <p>We currently support Facebook, Instagram,
                    LinkedIn and Twitter. More to come.</p>
                <Link to='/SignIn'>
                    <button>Get Started</button>
                </Link>
            </div>

            <div className="working-left">
                <div className="each-content-container">
                    <WorkingSteps step={'01'} heading={'Create your free account'} explain={'Building ddfgan enterprise doesn\'t need nightmare or cost your thousands. Felix is purpose built.'} />
                    <WorkingSteps step={'02'} heading={'Connect your\n' + 'channels'} explain={'Building ddfgan enterprise doesn\'t need nightmare or cost your thousands. Felix is purpose built.'} />
                    <WorkingSteps step={'03'} heading={"Schedule your\n" + "posts"} explain={'Building ddfgan enterprise doesn\'t need nightmare or cost your thousands. Felix is purpose built.'} />
                    <WorkingSteps step={'04'} heading={"Publish & get your\n" + "planning on point"} explain={'Building ddfgan enterprise doesn\'t need nightmare or cost your thousands. Felix is purpose built.'} />
                </div>
            </div>
        </div>
    </div>
)

export default Working