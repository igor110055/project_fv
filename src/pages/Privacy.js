import React from "react";
import Main from "../containers/main";
import Footer from "../containers/footer";
import Title from "../components/title";

export default function Privacy() {
    return (
        <React.Fragment>
            <Main>
                <Title>
                    <h1>Terms of use & Privacy</h1>
                </Title>

                <div>
                    <p>privacy content</p>
                </div>

            </Main>

            <Footer />
        </React.Fragment>

    );
}