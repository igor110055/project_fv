import React from "react";
import Layout from "../components/layout";
import Title from "../components/title";
import Accelerator from "../components/accelerator";
import { accelerator } from '../assets/data/build-accelerator';
import "./BuildAccelerator.css";

export default function BuildAccelerator() {
    return (
        <Layout>
            <Title>
                <h1>Accelerator</h1>
            </Title>

            <section className="build-accelerator-section">
                <div className="act-hero-image-wrapper">
                    <div className="act-hero-image" /> 
                </div>

                <div className="act-textline">
                    <p className="act-textline__text">We offer full-cycle support through three platforms: Foresight Ventures, Bitget, Bitkeep.</p>
                    <div className="act-textline__line"></div>
                </div>

                
                <div className="act-list">
                    {accelerator.map((item) => (
                        <Accelerator key={item.institution} {...item} />
                    ))}
                </div>
                
            </section>
        </Layout>
    );
}