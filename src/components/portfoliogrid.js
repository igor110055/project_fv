import React from "react";
import "./portfoliogrid.css";

export default function PortfolioGrid({ items }) {

    return (
        <div className="portfolio-list">
            <div className="portfolio-list__grid">
                {items.map(({ id, image, text }) => (
                    <div className="company" key={id}>
                        <div className="company__thumbnail-wrapper">
                            <img className="company__thumbnail" loading="lazy" src={image} alt={text} />
                        </div>
                        <div className="company__name-wrapper">
                            <p className="company__name">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}