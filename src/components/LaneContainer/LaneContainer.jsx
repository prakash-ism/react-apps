import React from "react";
import LaneComponent from "../LaneComponent/LaneComponent";
import './LaneContainer.css';

const LaneContainer = () => {
    return (
        <div className="lane-container">
            <LaneComponent />
            <LaneComponent />
        </div>
    )
}

export default LaneContainer;