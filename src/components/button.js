import React from "react";
import { ReactComponent as Add } from "../assets/svg/icn_add.svg";
import "./button.css";

export default function Button({ text }) {
    return (
        <React.Fragment>
            <div className="loadmore_content">
                <h4 className="loadmore_text">{text}</h4>
                <Add />
            </div>
        </React.Fragment>
    )
}