import React from "react";
import Main from "../containers/main";
import Footer from "../containers/footer";
import Title from "../components/title";
import BrandGrid from "../components/brand_grid";

import { investments } from "../assets/data/investments";
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <React.Fragment>
            <Main>
                <Title>
                    <h1>Our investments</h1>
                </Title>

                <div className="portfolio_grid_wrapper bd_bt_black">
                    <BrandGrid items={investments} />
                </div>


                <div className="portfolio_desc_wrapper">
                    <p className="portfolio_text">
                        Any investments or portfolio companies mentioned, referred to, or described on this page are not representative of all investments in vehicles managed by Foresight Ventures and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. Exits include current and former Foresight Ventures portfolio companies which have been acquired as well as companies which have undergone an initial public offering or direct public offering of shares. Certain publicly traded companies on this list may still be held in Foresight Ventures funds. A list of investments made by funds Excluded from this list are investments for which the issuer has not provided permission for Foresight Ventures to disclose publicly as well as unannounced investments in publicly traded digital assets. Further, the list of investments is updated monthly and as such may not reflect most recent ForesightVentures investments. Past results of Foresight Ventures investments, pooled investment vehicles, or investment strategies are not necessarily indicative of future results.
                    </p>
                </div>
            </Main>

            <Footer />
        </React.Fragment>
    );
}