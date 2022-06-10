import React from "react";
import "./research_article.css";

export default function ResearchArticle({ image, headline, description, author }) {
    return (
        <div className="research_article_wrapper">
            <div className="image_box">
                <img className="research_article_image" src={image} alt={headline} />
            </div>
            <h4 className="research_article_headline">{headline}</h4>
            <p className={`research_article_desc ${headline.length >= 34 ? "line2" : "line4"} `}>{description}</p>
            <p className="research_article_author">by {author}</p>
        </div>
    );
}