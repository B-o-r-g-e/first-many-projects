import React from 'react';
import './footer.css'
import planCriteria from '../../assets/planCriteria.png'

const Footer = () => (
    <div className="footer-container">
        <div className="footer">
            <div className="footer-left">
                <table>
                    <thead>
                    <tr>
                        <th>Resources</th>
                        <th></th>
                        <th>Utility Pages</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Home</td>
                        <td>Blog</td>
                        <td>Start here</td>
                    </tr>
                    <tr>
                        <td>About</td>
                        <td>Blog Post</td>
                        <td>Style guide</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>Careers</td>
                        <td>Password protected</td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                        <td>why choose us</td>
                        <td>404 Not found</td>
                    </tr>
                    <tr>
                        <td>Blog Post</td>
                        <td>Case studies</td>
                        <td>Licenses</td>
                    </tr>
                    <tr>
                        <td>Pricing</td>
                        <td></td>
                        <td>Changelog</td>
                    </tr>
                    <tr>
                        <td>Pricing Single</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="vertical-line"></div>

            <div className="footer-right-container">
                <div className="footer-right">
                    <div className="footer-right-left">
                        <div className="popular">Popular</div>
                        <p>Startup  $<span className='startup-count'>25</span></p>
                        <button>Choose Plan</button>
                    </div>

                    <div className="vertical-line footer-line"></div>

                    <div className="footer-right-right">
                        <div className="plan-criteria">
                            <img src={planCriteria} alt="icon"/>
                            Social Set
                        </div>
                        <div className="plan-criteria">
                            <img src={planCriteria} alt="icon"/>
                            150 posts per social
                        </div>
                        <div className="plan-criteria">
                            <img src={planCriteria} alt="icon"/>
                            5 users
                        </div>
                        <div className="plan-criteria">
                            <img src={planCriteria} alt="icon"/>
                            Phone Support
                        </div>
                        <div className="plan-criteria">
                            <img src={planCriteria} alt="icon"/>
                            Planning & publishing
                        </div>
                        <div className="plan-criteria">
                            <img src={planCriteria} alt="icon"/>
                            Analytics tools
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer