import React from "react";
import Cards from "../Cards/Cards";
import "./LaneComponent.css";

const LaneComponent = () => {
    return (
        <div className="lane-component">
            <div className="lane-name">Create new lane…</div>
            {/* <button className="lane-button">+</button> */}
            <Cards />
            <Cards />
        </div>
    )
}

export default LaneComponent;