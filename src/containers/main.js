import React from "react";
import "./main.css";

export default function Main({ children }) {
    return (
        <main className="main_wrapper">
            <div className="main_content">
                {children}
            </div>
        </main>
    );
}