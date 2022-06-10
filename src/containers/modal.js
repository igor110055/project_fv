import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";

export default function Modal({ children, isopen, setIsOpen }) {
    return (
        <>
            {ReactDOM.createPortal(
                <CSSTransition in={isopen} timeout={200} classNames="modal" unmountOnExit>
                        <div onClick={() => setIsOpen(false)}  className="overlay">
                            <div onClick={(e) => e.stopPropagation()} className="modal_wrapper">
                                {children}
                            </div>
                        </div>
                </CSSTransition>,
            document.body)}
        </>
    );
}