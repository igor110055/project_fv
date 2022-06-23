import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import Post from "../components/post";
import { newsnevents } from "../assets/data/content-newsnevents.js";

export default function ContentNewsNEvents() {
    return (
        <Layout>
            <Title>
                <h1>News & Events</h1>
            </Title>

            <section className="content-research-section">
                <div className="post-list">
                    {newsnevents.map((item) => (
                        <Post key={item.id} {...item} section="newsnevents" />
                    ))}
                </div>
            </section>
        </Layout>
    );
}