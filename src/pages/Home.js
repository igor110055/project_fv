import React from "react";
import { NavLink } from "react-router-dom";
import Main from "../containers/main";
import Footer from "../containers/footer";

import Heroes from "../components/heroes";
import LoadMore from "../components/load_more";

import { articles } from "../assets/data/articles";
import { ReactComponent as Arrow } from "../assets/svg/main_article_arrow.svg";
import "./Home.css";


export default function Home() {
    return (
        <React.Fragment>
            <Main>
                <div className="home_heroes_wrapper">
                    <Heroes />
                </div>

                <div className="home_research_wrapper">
                    <div className="rs_header_wrapper bd_bt_black">
                        <h2 className="rs_title">Latest Research</h2>
                        <NavLink to="/research">
                            <h4 className="rs_rm">Read More</h4>
                        </NavLink>
                    </div>

                    <div>
                        {articles.slice(0, 3).map((article) => (
                            <Aritcle {...article} key={article.id} />
                        ))}
                    </div>

                    <div className="home_ld_wrapper">
                        <LoadMore />
                    </div>
                </div>
            </Main>

            <Footer />
        </React.Fragment>
    );
}


function Aritcle({ headline, author, published, image, id }) {
    return (
        <div className="home_article_wrapper">
            <div className="article_info">
                <h3 className="article_headline">{headline}</h3>
                <div className="article_sub">
                    <h4>by {author}</h4>
                    <p>{published}</p> 
                </div>

            </div>
            
            <NavLink className="article_more" to={`/research/${id}`}>
                <p>Read the full article</p>
                <Arrow />
                
            </NavLink>

            <img className="article_img" src={image} alt={headline}></img>

        </div>
    )
}