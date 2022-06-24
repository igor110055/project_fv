import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svg/nav_logo.svg";
import { ReactComponent as Search } from "../assets/svg/nav_search.svg";
import { ReactComponent as Close } from "../assets/svg/nav_close.svg";

import "./nav.css";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    // let defaultLink = "nav_link";
    // let activeLink = "active_nav_link";

    let defaultIconLink = "nav_icon";
    let activeIconLink = "active_nav_icon";

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navigate = useNavigate();

    return (
        <div className={"site-header" + (isOpen ? " open" : "")}>
            <div className="site-header__bg"></div>

            <div className="site-header__burger" onClick={toggleMenu}>
                <div className={"burger" + (isOpen ? " open" : "")}>
                    <span className="bar topBar"></span>
                    <span className="bar btmBar"></span>
                </div>
            </div>

            <div className="site-header__logo">
                <NavLink to="/" className="site-header__logo-link">
                    <Logo />
                </NavLink>
            </div>


            <div className="site-header__search">
                <NavLink to="/search" className="site-header__search-link">
                    {({ isActive }) => (
                            <span className={isActive ? activeIconLink : defaultIconLink}>
                                <Search />
                                <span onClick={() => navigate(-1)}><Close /></span>
                            </span>
                        )}
                </NavLink>
            </div>

            <ul className={"site-header__menu" + (isOpen ? " open" : "")}>
                <li className="menu-item"><Link className="menu-item__link" to="/">Home</Link></li>
                <li className="menu-item"><Link className="menu-item__link" to="/portfolio">Portfolio</Link></li>
                <li className="menu-item"><span className="menu-item__link -span">Content <i className="menu-item__chevron"></i></span></li>
                <li className="menu-item -indent"><Link className="menu-item__link" to="/content/research">Research</Link></li>
                <li className="menu-item"><Link className="menu-item__link -indent" to="/content/newsnevents">News & Events</Link></li>
                <li className="menu-item"><span className="menu-item__link -span">Build <i className="menu-item__chevron"></i></span></li>
                <li className="menu-item -indent"><Link className="menu-item__link" to="/build/accelerator">Accelerator</Link></li>
                <li className="menu-item -indent"><Link className="menu-item__link" to="/build/hackathon">Hackathon</Link></li>
                <li className="menu-item"><Link className="menu-item__link -indent" to="/build/partner">Partner</Link></li>
                <li className="menu-item"><Link className="menu-item__link" to="/media">Media</Link></li>
                <li className="menu-item"><span className="menu-item__link -span">More <i className="menu-item__chevron"></i></span></li>
                <li className="menu-item -indent"><Link className="menu-item__link" to="/more/team">Team</Link></li>
                <li className="menu-item -indent"><Link className="menu-item__link" to="/more/jobs">Jobs</Link></li>
                <li className="menu-item"><Link className="menu-item__link -indent" to="/more/contact">Contact</Link></li>
            </ul> 

            <ul className="site-header__menu-desktop">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>

                <div className="has-drop">
                    <div className="has-drop__title">Content<i className="menu-item__chevron"></i></div>
                    <div className="has-drop__content-wrapper">
                        <ul className="has-drop__content">
                            <li><Link to="/content/research">Research</Link></li>
                            <li><Link to="/content/newsnevents">News & Events</Link></li>
                        </ul>
                    </div>
                </div>
                        
                <div  className="has-drop">
                    <div  className="has-drop__title">Build<i className="menu-item__chevron"></i></div>
                    <div className="has-drop__content-wrapper">
                        <ul className="has-drop__content">
                            <li><Link to="/build/accelerator">Accelerator</Link></li>
                            <li><Link to="/build/hackathon">Hackathon</Link></li>
                            <li><Link to="/build/partner">Partner</Link></li>
                        </ul>
                    </div>
                </div>

                <li><Link to="/media">Media</Link></li>
                            
                <div className="has-drop">
                    <div className="has-drop__title">More<i className="menu-item__chevron"></i></div>
                    <div className="has-drop__content-wrapper">
                        <ul className="has-drop__content">
                            <li><Link to="/more/team">Team</Link></li>
                            <li><Link to="/more/jobs">Jobs</Link></li>
                            <li><Link to="/more/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
    );
}