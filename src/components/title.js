import React from "react";
import "./title.css"

export default function Title({ children }) {
    return (
        <div className="title_wrapper bd_bt_black">
            {children}
        </div>
    )
}