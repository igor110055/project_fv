import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";

import PortfolioGrid from "../components/portfoliogrid";
import { partner } from "../assets/data/build-partner";


export default function BuildPartner() {
    return (
        <Layout>
            <Title>
                <h1>Partner</h1>
            </Title>

            <section className="build-partner-section">
                <PortfolioGrid items={partner} />
            </section>
        </Layout>
    );
}