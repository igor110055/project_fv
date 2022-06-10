import React from "react";
import Footer from "../containers/footer";
import Title from "../components/title";
import "./JobsDetail.css";

export default function JobsDetail() {
    return (
        <React.Fragment>
            <div className="jd_main_wrapper">
                <div className="jd_main_content">
                    
                    <Title>
                        <h2 className="jd_title_text">Public Relations Manager</h2>
                    </Title>
                    
                    <div>
                        <div className="jd_pos_content">
                            <p className="pos_summary_content">
                                Foresight ventures is seeking qualified candidates for the position of Public Relations Manager. This position will be responsible for developing and executing Foresight’s PR campaign strategy. This role requires experience in international branding and public relations. non-crypto background accepted as well.
                            </p>
                            <div className="pos_desc_content">
                                <div className="pos_desc">
                                    <h4 className="desc_title">Role/Responsibilities</h4>
                                    <ul className="desc_details">
                                        <li>Responsible for developing and executing Foresight’s PR campaign strategy.</li>
                                        <li>Help promote Foresight’s industry insight and iconoclastic views.</li>
                                        <li>Oversee the content management on our various outlets (Twitter, medium, website).</li>
                                        <li>Seek out opportunities to establish Foresight’s media presence and influence.</li>
                                        <li>Maintain a productive relationship with our media partners and KOLs.</li>
                                    </ul>
                                </div>

                                <div className="pos_desc">
                                    <h4 className="desc_title">Requirements</h4>
                                    <ul className="desc_details">
                                        <li>Experience in international branding and public relations. Familiar with global media outlets such as Coindesk, Cointelegraph, etc. Non-crypto background accepted as well.</li>
                                        <li>Must be fluent in English, multilingual preferred.</li>
                                        <li>Confident presentation skills in both written and verbal communicatons.</li>
                                        <li>Strong passion for crypto marketing, community management, etc.</li>
                                        <li>A team player with great interpersonnal skills and attention to detail.</li>
                                    </ul>
                                </div>


                                <div className="pos_desc">
                                    <h4 className="desc_title">Contact us</h4>
                                    <p>Please send your personal information and Resume/CV to <span className="desc_mail_link">fv@foresightventures.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </React.Fragment>
        
    );
}