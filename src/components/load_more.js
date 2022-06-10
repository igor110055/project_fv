import React from "react";
import { ReactComponent as Add } from "../assets/svg/icn_add.svg";
import "./load_more.css";

export default function LoadMore() {
    return (
        <React.Fragment>
            <div className="loadmore_content">
                <h4 className="loadmore_text">Load More</h4>
                <Add />
            </div>
        </React.Fragment>
    )
}