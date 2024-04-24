import React from 'react';
import './news-article.css'
// import {Navbar} from "../../Components/index.js";

const NewsArticle = () => (
    <div className="news-article-container">
        <div className="news-article">
            <div className="news-article-top">
                <div className="news-article-left">
                    <h1>Latest News and Articles</h1>
                    <p>We currently support Facebook, Instagram,
                        LinkedIn and Twitter. More to come. Felix
                        is purpose built for ease of use and complete
                        flexability.</p>
                </div>
                <div className="news-article-right">
                    <button>See More News</button>
                </div>
            </div>

            <div className="news-article-bottom">
                <div className="article-container">
                    <article className="article-box">
                        <div className="article-img">
                            <div className="article-img-categories">
                                <p>Analyse</p>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="dateRead">
                            <div className="date">December 05, 2021</div>
                            <div className="read">3 min read</div>
                        </div>
                        <div className="article-body-container">
                            <h1>Detailed insights for your
                                social media</h1>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has
                                been the standard dummy.</p>
                            <p className="view-more ">View More</p>
                        </div>
                    </article>
                    <article className="article-box">
                        <div className="article-img">
                            <div className="article-img-categories">
                                <p>Analyse</p>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="dateRead">
                            <div className="date">December 05, 2021</div>
                            <div className="read">3 min read</div>
                        </div>
                        <div className="article-body-container">
                            <h1>Detailed insights for your
                                social media</h1>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has
                                been the standard dummy.</p>
                            <p className="view-more ">View More</p>
                        </div>
                    </article>
                    <article className="article-box">
                        <div className="article-img">
                            <div className="article-img-categories">
                                <p>Analyse</p>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div className="dateRead">
                            <div className="date">December 05, 2021</div>
                            <div className="read">3 min read</div>
                        </div>
                        <div className="article-body-container">
                            <h1>Detailed insights for your
                                social media</h1>
                            <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has
                                been the standard dummy.</p>
                            <p className="view-more ">View More</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
)

export default NewsArticle