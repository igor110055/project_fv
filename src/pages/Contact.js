import React from "react";
import Main from "../containers/main";
import Footer from "../containers/footer";
import Title from "../components/title";
import ViewDetails from "../components/view_details";
import "./Contact.css";

export default function Contact() {
    return (
        <React.Fragment>
            <Main>
                <Title>
                    <h1>Get in touch</h1>
                </Title>

                <div className="contact_wrapper">
                    <div className="contact_content">
                        <h2 className="contact_mail">fv@foresightventures.com</h2>
                        <ViewDetails text="Contact Now" />
                    </div>
                </div>

            </Main>

            <Footer />
        </React.Fragment>

    );
}