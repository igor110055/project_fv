import React from "react";
import "./heroes.css";

export default function Heroes() {
    return (
        <div className="heroes_content">
            <h1>special</h1>
            <h1>aggressive</h1>
            <h1>independent</h1>
            <h1>long
                <span className="heroes_line"></span>
                Term Mindset
                <span className="heroes_dot"></span>
            </h1>
        </div>
    );
}