import React from 'react';
import './article.css';

const Article = ({details}) => {

    return (
        <div className='article'>

            <article className='article-details'>

                <h3 className="article-details-title">{details.title}</h3>
                <span className="article-details-title">{details.price} euros</span>

            </article>
        </div>

    )
}

export default Article;

