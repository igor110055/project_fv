import React from "react";
import { ReactComponent as Arrow } from "../assets/svg/main_article_arrow.svg";
import "./view_details.css";

export default function ViewDetails({ text, isHome }) {
    return (
        <div className={`vd_content ${isHome ? 'home_vd_content' : 'normal_vd_content'}`}>
            <p className="vd_text">{text}</p>
            <Arrow />
        </div>
    )
}