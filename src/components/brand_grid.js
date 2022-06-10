import React from "react";
import "./brand_grid.css";

export default function BrandGrid({ items }) {
    return (
        <div className="cards_items_content">
            {items.map(({ text, image }) => (
                <div className="cards_item_wrapper" key={text}>
                    <div className="cards_item_content">
                        <img className="cards_item_image" src={image} alt={text} />
                        <p className="cards_item_text">{text}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}