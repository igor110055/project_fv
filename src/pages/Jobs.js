import React from "react";
import { Link } from "react-router-dom";
import Main from "../containers/main";
import Footer from "../containers/footer";
import Title from "../components/title";
import ViewDetails from "../components/view_details";
import positions from '../assets/data/positions.json';

import { ReactComponent as Location } from "../assets/svg/jobs_location.svg";
import "./Jobs.css";

export default function Jobs() {
    return (
        <React.Fragment>
            <Main>
                <Title>
                    <h1>Jobs</h1>
                </Title>

                <div className="jobs_wrapper">
                    <div className="jobs_content">
                        <p className="jobs_summary">
                            At Foresight Ventures, you will join a small team to work directly with our managing partners, portfolio companies and investors. These include several of the largest encryption companies and token projects, world-renowned PE and VC investors, and the founders of large public technology and financial companies. You should be passionate about encryption, adapt to a flexible and entrepreneurial work environment, and hope to quickly accelerate your career in encryption and investment.
                        </p>
                        <div className="position_wrapper">
                            {positions.map((position) => (
                                <Position key={position.id} {...position} />
                            ))}
                        </div>
                    </div>
                </div>
            </Main>


            <Footer />
        </React.Fragment>
    );
}

function Position({ title, published, summary, locations, way, id }) {
    return (
        <div className="pos_wrapper">
            <div className="pos_content">
                <div>
                    <h4 className="pos_tit">{title}</h4>
                    <p className="pos_pub">{published}</p>
                    <p className="pos_sum">{summary}</p>
                    <div className="pos_loc_content">
                        <Location />
                        <p className="pos_loc_text">
                        {locations.map((location) => (
                            <span key={location}>{location}/</span>
                        ))}
                        <span>{way}</span>
                        </p>
                    </div>
                </div>
                <Link to={`/jobs/${id}`}>
                    <ViewDetails text="View Details" />
                </Link>
            </div>
        </div>
    );
}