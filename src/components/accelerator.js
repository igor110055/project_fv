import React from "react";
import "./accelerator.css";

export default function Accelerator({ institution, details }) {
    return (
        <div className="acc_content">
            <h2 className="acc_institution">{institution}</h2>
            <ul className="acc_details">
                {details.map(({ section, infos }) => (
                    <li className="acc_detail" key={section}>
                        <h4 className="acc_section">{section}</h4>
                        {infos.map((info, index) => (
                            <p className="acc_info" key={index}>{info}</p>
                        ))}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}