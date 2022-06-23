import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { media } from "../assets/data/media";
import "./Media.css";

export default function Media() {
    return (
        <Layout>
            <Title>
                <h1>Media</h1>
            </Title>

            <section className="media-section">
                <div className="media-list">
                    {media.map(({ id, headline, description, image, url, address }) => (
                        <article className="media-list__item" key={id}>
                            <div className="media-list__item-link-wrapper" onClick={() => window.open(url, "_blank")}>

                                <div className="media-list__item-image-wrapper">
                                    <img className="media-list__item-image" loading="lazy" src={image} alt={headline} />
                                </div>

                                <div className="media-list__item-info-wrapper">
                                    <h4 className="media-list__item-headline">{headline}</h4>
                                    <p className="media-list__item-description">{description}</p>
                                    <p className="media-list__item-address-wrapper">
                                        <span className="media-list__item-address">{address}</span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                    
                </div>
            </section>

        </Layout>
    );
}