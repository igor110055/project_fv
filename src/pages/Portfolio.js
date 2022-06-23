import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";

import PortfolioGrid from "../components/portfoliogrid";
import { portfolio } from "../assets/data/portfolio";

import "./Portfolio.css"

export default function Portfolio() {
    return (
        <Layout>
                <Title>
                    <h1>Our investments</h1>
                </Title>

                <section className="portfolio-section">
                    <PortfolioGrid items={portfolio} />

                    <div className="portfolio__text-wrapper">
                        <p className="portfolio__text">
                            Any investments or portfolio companies mentioned, referred to, or described on this page are not representative of all investments in vehicles managed by Foresight Ventures and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. Exits include current and former Foresight Ventures portfolio companies which have been acquired as well as companies which have undergone an initial public offering or direct public offering of shares. Certain publicly traded companies on this list may still be held in Foresight Ventures funds. A list of investments made by funds Excluded from this list are investments for which the issuer has not provided permission for Foresight Ventures to disclose publicly as well as unannounced investments in publicly traded digital assets. Further, the list of investments is updated monthly and as such may not reflect most recent ForesightVentures investments. Past results of Foresight Ventures investments, pooled investment vehicles, or investment strategies are not necessarily indicative of future results.
                        </p>
                    </div>
                </section>
        </Layout>
    );
}