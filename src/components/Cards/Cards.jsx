import React from "react";
import "./Cards.css";

const Cards = ({ card, onDragEnter, onDragEnd, boardId }) => {
  return (
    <div
      className="cards-container"
      onDragEnter={(e) => {
        e.preventDefault();
        onDragEnter(boardId, card.id);
      }}
      onDragEnd={() => onDragEnd(boardId, card.id)}
      draggable
    >
      <div className="card-type">
        <span>{card.title}</span>
        <span>x</span>
      </div>
      <div className="card-description">{card.description}</div>
    </div>
  );
};

export default Cards;
