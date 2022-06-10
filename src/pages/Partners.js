import React from "react";
import Main from "../containers/main";
import Footer from '../containers/footer';
import Title from "../components/title";
import BrandGrid from "../components/brand_grid";
import Accelerator from "../components/accelerator";

import AcceleratorImage from "../assets/images/partners_act.svg";
import accelerators from '../assets/data/accelerators.json';
import { partners } from '../assets/data/partners';

import "./Partners.css";

export default function Partners() {

    return (
        <React.Fragment>
            <Main>
                <Title>
                    <h1>Partners</h1>
                </Title>
                <div className="partners_pn_wrapper">
                    <BrandGrid items={partners} />
                </div>

                <Title>
                    <h1>Accelerator</h1>
                </Title>
                <div className="partners_act_wrapper">
                    <img className="act_image" src={AcceleratorImage} alt="one-stop acceleration program" />
                    <div className="act_subtext_content">
                        <span className="act_line"></span>
                        <p className="act_subtext">We offer full-cycle support through three platforms: Foresight Ventures, Bitget, Bitkeep.</p>
                        <span className="act_line"></span>
                    </div>
                    <div className="act_list_wrapper">
                        {accelerators.map((accelerator) => (
                            <Accelerator key={accelerator.institution} {...accelerator} />
                        ))}
                    </div>
                </div>

                <Title>
                    <h1>Hackthon</h1>
                </Title>
                <div className="partners_hct_wrapper">
                    <p>hackton content</p>
                </div>

            </Main>
            <Footer />
        </React.Fragment>
        // <main className="main_wrapper">
        //     <div className="content_wrapper">
        //         <Title text="partners" />
        //         <div className="partner_cards_items_wrappper">
        //             <Cards items={partners} />
        //         </div>

        //         <Title text="accelerator" />
        //         <div>
        //             {accelerators.map((accelerator) => (
        //                 <Accelerator key={accelerator.institution} {...accelerator} />
        //             ))}
        //         </div>

        //         <Title text="hackthon" />
        //         <p>hackthon</p>
        //     </div>
        //     <Footer />
        // </main>
    )
}