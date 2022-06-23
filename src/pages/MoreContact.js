import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { ReactComponent as Arrow } from "../assets/svg/main_article_arrow.svg";

import "./MoreContact.css";

export default function MoreContact() {
    return (
        <Layout>
            <Title>
                <h1>Get in touch</h1>
            </Title>

            <section className="more-contact-section">
                <div className="contact-content">
                    <h2 className="contact-mail">fv@foresightventures.com</h2>

                    <a className="article_more" href="mailto: fv@foresightventures.com">
                        <p>Contact Now</p>
                        <Arrow />
                    </a>
                </div>
            </section>
        </Layout>

    );
}