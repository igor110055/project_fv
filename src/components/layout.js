import React from "react";
import Nav from "../containers/nav";
import Footer from "../containers/footer";
import "../containers/main.css";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Nav />
            <main className="main_wrapper">
                <div className="main_content">
                    {children}
                </div>
            </main>
            <Footer />
        </React.Fragment>
        
    )
}