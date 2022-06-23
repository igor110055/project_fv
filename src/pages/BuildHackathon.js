import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import Post from "../components/post";
import { hackathon } from "../assets/data/build-hackathon";
import "./BuildHackathon.css";


export default function BuildHackathon() {
    return (
        <Layout>
            <Title>
                <h1>Hackathon</h1>
            </Title>

            <section className="build-hackathon-section">
                <div className="hackathon-hero">
                    <h3>Giving us your MVP, let's make it big</h3>
                    <p>Even if you only have a one-person team, we still believe in Your Potential to become the next big unicorn.</p>
                </div>

                <div className="post-list">
                    {hackathon.map((item) => (
                        <Post key={item.id} {...item} section="hackathon" />
                    ))}
                </div>
            </section>

        </Layout>
    );
}