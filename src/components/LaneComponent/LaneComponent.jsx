import React from "react";
import Cards from "../Cards/Cards";
import "./LaneComponent.css";

const LaneComponent = ({ boardLane, onDragEnter, onDragEnd }) => {
  return (
    <div className="lane-component">
      <div className="lane-name">{boardLane.title}</div>
      {boardLane.cards.map((card, index) => (
        <Cards
          key={card.id}
          card={card}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
          boardId={boardLane.id}
        />
      ))}
    </div>
  );
};

export default LaneComponent;
