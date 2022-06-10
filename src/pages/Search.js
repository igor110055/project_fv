import React from "react";
import Main from "../containers/main";
import { ReactComponent as SearchIcon } from "../assets/svg/icn_search.svg";
import "./Search.css"

export default function Search() {
    const items = ['Web3', 'Gamefi', 'ETH 2.0', 'Defi', 'Decentralization'];
    
    return (
        <Main>
            <div className="search_wrapper">

                <div className="search_input">
                    <input autoFocus="autofocus" className="search_input_box" placeholder="Start typing to search"></input>
                    <SearchIcon />
                </div>

                <div className="search_trend">
                    <p className="search_trend_title">Trending Search</p>
                    <div className="search_trend_items">
                        {items.map((item) => (
                            <p className="search_trend_item" key={item}>{item}</p>
                        ) )}
                    </div>
                </div>
                
            </div>
        </Main>
    );
}