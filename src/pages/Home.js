import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

import Heroes from "../components/heroes";
import Button from "../components/button";
import Marquee from "../components/marquee";

import { research } from "../assets/data/content-research";
import { ReactComponent as Arrow } from "../assets/svg/main_article_arrow.svg";
import "./Home.css";


export default function Home() {
    const [articles, setArticles] = useState(research.slice(0, 3));
    const [index, setIndex] = useState(3);
    const [isMore, setIsMore] = useState(true);

    
    const loadmore = () => {
        if (index >= research.length) {
            setIsMore(false);
            return;
        }

        const newArticles = research.slice(index, index + 3);
        setArticles((prevState) => [...prevState, ...newArticles]);

        setIndex((prevState) => prevState + 3);
    }

    return (
        <Layout>
                <div className="home_heroes_wrapper">
                    <Heroes />
                </div>

                <div className="home_research_wrapper">
                    <div className="rs_header_wrapper bd_bt_black">
                        <h2 className="rs_title">Latest Research</h2>
                        <NavLink to="/content/research">
                            <h4 className="rs_rm">Read More</h4>
                        </NavLink>
                    </div>

                    <div>
                        {articles.map((article) => (
                            <Aritcle {...article} key={article.id} />
                        ))}
                    </div>
 
                    <div className="home_ld_wrapper" onClick={loadmore}>
                        {isMore ? <Button text="load more" /> : <h4 className="home-article-list__end">End of List</h4>}
                    </div> 
                </div>

                <div className="home-marquee">
                    <Marquee />
                </div>
        </Layout>
    );
}


function Aritcle({ headline, author, published, image, url }) {
    return (
        <div className="home_article_wrapper">
            <div className="article_info">
                <h3 className="article_headline" onClick={() => window.open(url, "_blank")}>{headline}</h3>
                <div className="article_sub">
                    <h4>by {author}</h4>
                    <p>{published}</p> 
                </div>

            </div>
            
            <div className="article_more" onClick={() => window.open(url, "_blank")}>
                <p>Read the full article</p>
                <Arrow />
            </div>
            
            <div className="article__img" onClick={() => window.open(url, "_blank")}>
                <img src={image} alt={headline}></img>
            </div>

        </div>
    )
}