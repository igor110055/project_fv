import React from "react";
import "./investment.css";

export default function Investment({ title, image }) {
    return (
        <div className="investment_content">
            <img src={image} alt={title} width="222px" height="222px" className="investment_image" />                 
            <p className="investment_title">{title}</p>
        </div>
    )
}