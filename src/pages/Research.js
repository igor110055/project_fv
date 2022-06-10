import React from "react";
import { Link } from "react-router-dom";
import Main from "../containers/main";
import Footer from "../containers/footer";
import Title from "../components/title";
import Article from "../components/research_article";
import LoadMore from "../components/load_more";

import { articles } from "../assets/data/articles.js";
import "./Research.css";

export default function Research() {
    return (
        <React.Fragment>
            <Main>
                <Title>
                    <h1>Our Researches</h1>
                </Title>

                <div className="research_articles_wrapper">
                    {articles.map((article) => (
                        <Link to={`/research/${article.id}`} key={article.id}>
                            <Article key={article.headline} {...article} />
                        </Link>
                    ))}
                </div>

                <div className="research_ld_wrappper">
                    <LoadMore />
                </div>

                <div className="research_pagi_wrapper">
                    <ul className="research_pagi_content">
                        <li className="pagi_box pagi_box_selected">1</li>
                        <li className="pagi_box">2</li>
                        <li className="pagi_box">3</li>
                        <li className="pagi_box">4</li>
                        <li className="pagi_box">5</li>
                    </ul>
                </div>

            </Main>

            <Footer />
        </React.Fragment>
    );
}