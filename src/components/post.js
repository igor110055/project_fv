import React from "react";
import "./post.css";
import { ReactComponent as Play } from "../assets/svg/icon_play.svg";


export default function Post({ headline, url, description, author, image, section, period }) {

    return (
        <article className="post-list__item">
            <div className="post-list__item-content-wrapper">
                <div className="post-list__item-link-wrapper" onClick={() => window.open(url, "_blank")}>

                    <div className={`post-list__item-image-wrapper ${section}-image-wrapper`}>
                        {section === "newsnevents" && <div className="newsnevents-icon-play"><Play /></div>}
                        <img className="post-list__item-image" loading="lazy" src={image} alt={headline} />
                    </div>
                    <h4 className="post-list__item-headline">{headline}</h4>
                    <div className="post-list__item-description-wrapper">
                        <p className="post-list__item-description">{description}</p>
                    </div>
                    {section === "research" &&
                        <div className="post-list__item-byline">
                            <span className="byline__prefix">by </span>
                            <span className="byline__author">{author}</span>
                        </div>
                    }

                    {section === "hackathon" &&
                        <div className="post-list__item-byline">
                            <span className="byline__author">{period}</span>
                        </div>
                    }

                </div>
            </div>
        </article>
    );



}