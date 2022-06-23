import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import { portfolio1, portfolio2, portfolio3 } from "../assets/data/portfolio";
import "./marquee.css";

export default function Marquee() {
    return (
        <React.Fragment>
            <div className="marquee">
                <div className="track">
                    <span className="track__animation -r">
                    {portfolio1.map(({ id, image, text }) => (
                        <span className="track__image-wrapper" key={id}>
                            <img className="track__image" src={image} alt={text} />
                        </span>
                    ))}
                    </span>
                    <span className="track__animation -r">
                    {portfolio1.map(({ id, image, text }) => (
                        <span className="track__image-wrapper" key={id}>
                            <img className="track__image" src={image} alt={text} />
                        </span>
                    ))}
                    </span>
                </div>

                <div className="track mt">
                    <span className="track__animation -twox">
                    {portfolio2.map(({ id, image, text }) => (
                        <span className="track__image-wrapper" key={id}>
                            <img className="track__image" src={image} alt={text} />
                        </span>
                    ))}
                    </span>
                    <span className="track__animation -twox">
                    {portfolio2.map(({ id, image, text }) => (
                        <span className="track__image-wrapper" key={id}>
                            <img className="track__image" src={image} alt={text} />
                        </span>
                    ))}
                    </span>
                </div>

                <div className="track mt">
                    <span className="track__animation -r -threex">
                    {portfolio3.map(({ id, image, text }) => (
                        <span className="track__image-wrapper" key={id}>
                            <img className="track__image" src={image} alt={text} />
                        </span>
                    ))}
                    </span>
                    <span className="track__animation -r -threex">
                    {portfolio3.map(({ id, image, text }) => (
                        <span className="track__image-wrapper" key={id}>
                            <img className="track__image" src={image} alt={text} />
                        </span>
                    ))}
                    </span>
                </div>
            </div>

            <div className="marquee-button-wrapper">
                <Link to="/portfolio">
                    <Button text="all portfolios" />
                </Link>
            </div>

        </React.Fragment>
    )
}