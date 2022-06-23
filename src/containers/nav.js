import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Accordion from "../components/accordion";

import { ReactComponent as Logo } from "../assets/svg/nav_logo.svg";
import { ReactComponent as Search } from "../assets/svg/nav_search.svg";
import { ReactComponent as Close } from "../assets/svg/nav_close.svg";

import "./nav.css";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropped, setDropped] = useState("");

    // let defaultLink = "nav_link";
    // let activeLink = "active_nav_link";

    let defaultIconLink = "nav_icon";
    let activeIconLink = "active_nav_icon";

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if (!isOpen) setDropped("");
    }

    const navigate = useNavigate();

    return (
        <header id="header">
            <div className="header-container">
                <div className="site-header">
                    
                    <div className={"site-header__menu" + (isOpen ? " open" : "")} onClick={toggleMenu}>
                        <span></span>
                    </div>
                    
                    <Link className="site-header__brand" to="/">
                        <Logo />
                    </Link>


                    <nav className="site-header__nav-desktop">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <div className="has-drop">
                                <div className="has-drop__title">Content
                                    <span className="icon-chevron"></span>
                                </div>
                                <div className="has-drop__content-wrapper">
                                    <ul className="has-drop__content">
                                        <li>
                                            <Link to="/content/research">Research</Link>
                                        </li>
                                        <li>
                                            <Link to="/content/news&events">News & Events</Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div  className="has-drop">
                                <div  className="has-drop__title">Build
                                    <span className="icon-chevron"></span>
                                </div>
                                <div className="has-drop__content-wrapper">
                                    <ul className="has-drop__content">
                                        <li>
                                            <Link to="/build/accelerator">Accelerator</Link>
                                        </li>
                                        <li>
                                            <Link to="/build/hackathon">Hackathon</Link>
                                        </li>
                                        <li>
                                            <Link to="/build/partner">Partner</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <li>
                                <Link to="/media">Media</Link>
                            </li>

                            <div className="has-drop">
                                <div className="has-drop__title">More
                                    <span className="icon-chevron"></span>
                                </div>
                                <div className="has-drop__content-wrapper">
                                    <ul className="has-drop__content">
                                        <li>
                                            <Link to="/more/team">Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/more/jobs">Jobs</Link>
                                        </li>
                                        <li>
                                            <Link to="/more/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </nav>

                    <CSSTransition in={isOpen} timeout={200} classNames="site-header__nav-transition" unmountOnExit>
                        <nav className="site-header__nav-mobile">
                            <ul>
                                <li onClick={toggleMenu}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li onClick={toggleMenu}>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>

                                <Accordion active={dropped === "content"}>
                                    <Accordion.Title onToggle={(e) => setDropped((dropped) => (dropped === "content" ? "" : "content"))}>Content</Accordion.Title>
                                    <Accordion.Content>
                                        <li onClick={toggleMenu}>
                                            <Link to="/content/research">Research</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to="/content/news&events">News & Events</Link>
                                        </li>
                                    </Accordion.Content>
                                </Accordion>

                                <Accordion active={dropped === "build"}>
                                    <Accordion.Title onToggle={(e) => setDropped((dropped) => (dropped === "build" ? "" : "build"))}>Build</Accordion.Title>
                                    <Accordion.Content>
                                        <li onClick={toggleMenu}>
                                            <Link to="/build/accelerator">Accelerator</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to="/build/hackathon">Hackathon</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to="/build/partner">Partner</Link>
                                        </li>
                                    </Accordion.Content>
                                </Accordion>
                                
                                <li>
                                    <Link to="/media">Media</Link>
                                </li>

                                <Accordion active={dropped === "more"}>
                                    <Accordion.Title onToggle={(e) => setDropped((dropped) => (dropped === "more" ? "" : "more"))}>More</Accordion.Title>
                                    <Accordion.Content>
                                        <li onClick={toggleMenu}>
                                            <Link to="/more/team">Team</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to="/more/jobs">Jobs</Link>
                                        </li>
                                        <li onClick={toggleMenu}>
                                            <Link to="/more/contact">Contact</Link>
                                        </li>
                                    </Accordion.Content>
                                </Accordion>
                            </ul>
                        </nav>
                    </CSSTransition>
                    <div className={"nav-overlay" + (isOpen ? " open" : "")}></div>


                    <NavLink className="site-header__search" to="/search">
                        {({ isActive }) => (
                            <span className={isActive ? activeIconLink : defaultIconLink}>
                                <Search />
                                <span onClick={() => navigate(-1)}><Close /></span>
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </header>
    );
}




