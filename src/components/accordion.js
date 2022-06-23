import React, { useContext, createContext } from "react";
import { CSSTransition } from "react-transition-group";
import "./accordion.css";

const ToggleContext = createContext();

export default function Accordion({ children, active }) {
    return (
        <ToggleContext.Provider value={{active}}>
            <li className="accordion-item">
                {children}
            </li>
        </ToggleContext.Provider>
        
    );
}

Accordion.Title = function AccordionTitle({ children, onToggle }) {
    const { active } = useContext(ToggleContext);

    return (
        <div className={"accordion-item__title" + (active ? " accordion-item__title-active" : "")} onClick={() => onToggle()}>
            {children}
            <span className={"icon-chevron" + (active ? " icon-chevron-active" : "")}></span>
        </div>
    );
}

Accordion.Content = function AccordionContent({ children }) {
    const { active } = useContext(ToggleContext);

    return (
        <div className="accordion-item__content-wrapper">
            <CSSTransition in={active} timeout={300} classNames="accordion-item__content" unmountOnExit>
                <div className="holder">
                    <ul>{children}</ul>
                </div>
            </CSSTransition>
        </div>
    );
}