import React, { useState } from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import { avatar } from "../assets/data/more-team-avatar";
import { ReactComponent as Close } from "../assets/svg/nav_close.svg";

import "./MoreTeam.css";

export default function MoreTeam() {
    const [checked, setChecked] = useState("0");

    return (
        <Layout>
            <Title>
                <h1>Team</h1>
            </Title>

            <section className="more-team-section">
                <div className="more-team-section__list">
                    {avatar.map(({ id, name, image }) => (
                        <div className="team-member" key={id}>
                            <input type="checkbox" className="check" id={`checked-${id}`} hidden value={id} onChange={(e) => setChecked(e.target.value)} checked={checked === id.toString()} />
                            <label className="team-member__label" htmlFor={`checked-${id}`}>
                                <div className="team-member__thumbnail-wrapper">
                                    <img className="team-member__thumbnail" src={image} alt={`img-${id}`} />
                                </div>
                                <p className="team-member__name">{name} - {id}</p>
                            </label>
                            
                            
                            <div className="team-member__content-wrapper">
                                <div className="team-member__content">
                            
                                <div className="team-member__content-close" onClick={() => setChecked("0")}>
                                    <Close />
                                </div>


                                <div className="team-member__content-info">
                                    <div className="team-member__content-thumbnail-wrapper">
                                        <img className="team-member__content-thumbnail" src={image} alt={`img-${id}`} />
                                    </div>

                                    <h3 className="team-member__content-name">{name} - {id}</h3>

                                    <div className="team-member__content-links-wrapper">
                                        <span className="team-member__content-link">Twitter: @abcds</span>
                                        <span className="team-member__content-link">LinkedIn</span>
                                        <span className="team-member__content-link">Website</span>
                                    </div>
                                    <div className="team-member__content-bio">
                                        <p>Foresight Ventures is a General Partner at Andreessen Horowitz where he focuses on technology investments in financial services.</p>
                                        <p>Foresight Ventures was previously a senior executive in Firmwide Strategy at Goldman Sachs where he helped lead partnerships, new ventures and M&A. Before joining the firm, David was the Founder and CEO of Bond Street, which aimed to transform small business lending through technology, data and design. Bond Street was acquired by Goldman Sachs in October 2017 as part of the firm’s digital finance business. Previously, David was a venture investor at Spark Capital and a founding associate of Locus Analytics, a start-up asset management firm. Foresight Ventures graduated from Harvard University with a degree in Biochemical Sciences.</p>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="overlay" onClick={() => setChecked("0")}></div>
                        </div>
                    ))}
                </div>
            </section>

        </Layout>
    );
}