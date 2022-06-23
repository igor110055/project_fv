import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import "./MoreJobs.css";

export default function MoreJobs() {
    return (
        <Layout>
            <Title>
                <h1>Jobs</h1>
            </Title>

            <section className="more-jobs-section">
                <div className="getro">
                    <h4 className="getro__text">powered by </h4>
                    <span className="getro__logo"></span>
                </div>
            </section>

        </Layout>
    );
}