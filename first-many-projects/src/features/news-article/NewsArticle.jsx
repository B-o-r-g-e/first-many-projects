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

            <div className="news-article-bottom"></div>
        </div>
    </div>
)

export default NewsArticle