import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from '../containers/modal';
import { ReactComponent as Logo } from "../assets/svg/nav_logo.svg";
import { ReactComponent as Search } from "../assets/svg/nav_search.svg";
import { ReactComponent as Close } from "../assets/svg/nav_close.svg";
import { ReactComponent as Menu } from "../assets/svg/nav_menu.svg";

import "./nav.css";

export default function Nav() {
    const [modal, setModal] = useState(false);

    let defaultLink = "nav_link";
    let activeLink = "active_nav_link";

    let defaultIconLink = "nav_icon";
    let activeIconLink = "active_nav_icon";

    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav_wrapper">
                <div className="nav_content">
                    <div className="nav_logo_wrapper">
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                        
                    </div>
    
                    <ul className="nav_link_wrapper">
                        <li className="nav_link_item">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : defaultLink}>Home</NavLink>
                        </li>
                        <li className="nav_link_item">
                            <NavLink to="portfolio" className={({ isActive }) => isActive ? activeLink : defaultLink}>Portfolio</NavLink>
                        </li>
                        <li className="nav_link_item">
                            <NavLink to="research" className={({ isActive }) => isActive ? activeLink : defaultLink}>Research</NavLink>
                        </li>
                        <li className="nav_link_item">
                            <NavLink to="partners" className={({ isActive }) => isActive ? activeLink : defaultLink}>Partners</NavLink>
                        </li>
                        <li>
                            <NavLink to="search">
                                {({ isActive }) => (
                                    <span className={isActive ? activeIconLink : defaultIconLink}>
                                        <Search />
                                        <span onClick={() => navigate(-1)}><Close /></span>
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav_menu_wrapper" onClick={() => setModal(true)}>
                        <Menu />
                    </div>
                </div>


                
                <Modal isopen={modal} setIsOpen={setModal}>
                    <div className="modal_icon_wrapper">
                        <div className="modal_icon_item" onClick={() => setModal(false)}>
                            <NavLink to="search" className={({ isActive }) => isActive ? activeLink : defaultLink}>
                                <Search />
                            </NavLink>
                        </div>

                        <div className="modal_icon_item modal_icon_close" onClick={() => setModal(false)}>
                            <Close />
                        </div>
                    </div>


                    <ul className="modal_link_wrapper">
                        <li className="modal_link_item" onClick={() => setModal(false)}>
                            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : defaultLink}>Home</NavLink>
                        </li>
                        <li className="modal_link_item" onClick={() => setModal(false)}>
                            <NavLink to="portfolio" className={({ isActive }) => isActive ? activeLink : defaultLink}>Portfolio</NavLink>
                        </li>
                        <li className="modal_link_item" onClick={() => setModal(false)}>
                            <NavLink to="research" className={({ isActive }) => isActive ? activeLink : defaultLink}>Research</NavLink>
                        </li>
                        <li className="modal_link_item" onClick={() => setModal(false)}>
                            <NavLink to="partners" className={({ isActive }) => isActive ? activeLink : defaultLink}>Partners</NavLink>
                        </li>
                    </ul>
                </Modal>
                
            </div>
        </nav>
    );
}