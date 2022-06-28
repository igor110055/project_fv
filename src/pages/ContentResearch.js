import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import Post from "../components/post";
import Button from "../components/button";

import { research } from "../assets/data/content-research.js";
import "./ContentResearch.css";

export default function ContentResearch() {
    return (
        <Layout>
            <Title>
                <h1>Our Researches</h1>
            </Title>

            <section className="content-research-section">
                <div className="post-list">
                    {research.map((item) => (
                        <Post key={item.id} {...item} section="research" />
                    ))}
                </div>

                <div className="research_ld_wrappper">
                    <Button text="load more" />
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

            </section>

        </Layout>
    );
}