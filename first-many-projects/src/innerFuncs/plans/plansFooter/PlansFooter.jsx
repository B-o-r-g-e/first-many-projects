import React from 'react';
import './PlansFooter.css'

const PlansFooter = () => {
    return (
        <div className="plans-footer-container">
            <div className="plans-footer">
                <div className="plans-footer-left">
                    <p>NEWSLETTER</p>
                    <div className="newsletter-register">
                        <input type="text" placeholder={'Enter your email'}/>
                        <button>Ask Question</button>
                    </div>
                </div>
                <div className="plans-footer-right">
                    <table>
                        <thead>
                        <tr>
                            <th>About</th>
                            <th>Product</th>
                            <th>Legals</th>
                            <th>Blog</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Become Affiliate</td>
                            <td>Mockups</td>
                            <td>License</td>
                            <td>Business Stories</td>
                        </tr>
                        <tr>
                            <td>Go Unlimited</td>
                            <td>Presentations</td>
                            <td>Refund Policy</td>
                            <td>Digital Store</td>
                        </tr>
                        <tr>
                            <td>Service</td>
                            <td>Ui Kits</td>
                            <td>About Us</td>
                            <td>Social Media</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Wireframe Kits</td>
                            <td>Contact</td>
                            <td>Learning</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Themes & Templates</td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}