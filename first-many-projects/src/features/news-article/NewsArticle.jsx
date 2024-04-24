import React from 'react';
import './news-article.css'
import NewsCon from "./newsCon/NewsCon.jsx";

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
                        <NewsCon title={'Detailed insights for your social media'}/>
                    </article>
                    <article className="article-box second-art">
                        <NewsCon title={'New Device Invention for Digital Platform'}/>
                    </article>
                    <article className="article-box second-art third-art">
                        <NewsCon title={'Business Strategy Make His Goal Achieve'}/>
                    </article>
                </div>
            </div>
        </div>
    </div>
)

export default NewsArticle