import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Medium } from "../assets/svg/link_medium.svg";
import { ReactComponent as Twitter } from "../assets/svg/link_twitter.svg";
import { ReactComponent as Mail } from "../assets/svg/link_email.svg";
import { ReactComponent as Add } from "../assets/svg/icn_add.svg";

import "./footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer_wrapper">
                <div className="footer_content">
                    <div className="footer_sub_wrapper">
                        <div className="sub_text">
                            <h4 className="sub_text_title">SUBSCRIBE</h4>
                            <p className="sub_text_sub">Get fresh takes, analysis, and essays on emerging tech in our monthly newsletter.</p>
                        </div>
                        
                        <div className="sub_input">
                            <input className="input_box" placeholder="Enter your email"></input>
                            <button className="input_button">
                                <Add />
                            </button> 
                        </div>
                    </div>

                    <div className="footer_brand_info">
                        <div className="footer-logo"></div>
                        {/* <Logo /> */}
                        <div className="footer_links">
                            <span onClick={() => window.open("https://foresightventures.medium.com/", "_blank")}>
                                <Medium />
                            </span>
                            <span onClick={() => window.open("https://twitter.com/ForesightVen", "_blank")}>
                                <Twitter />
                            </span>
                            <a href="mailto: fv@foresightventures.com">
                                <Mail />
                            </a>
                        </div>
                    </div>

                    <div className="footer_info_wrapper">
                        <div className="footer_link_wrapper">
                            
                            <Link to="/more/contact">Contact us</Link>
                            <span>|</span>
                            <Link to="/more/team">Team</Link>
                            <span>|</span>
                            <Link to="/more/jobs">Jobs</Link>
                            <span>|</span>
                            <Link to="/tos-privacy">Terms of Use & Privacy</Link>

                        </div>

                        <div className="footer_copyright">
                            © 2000-2022, Foresight Ventures Investments
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}