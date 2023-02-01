import React, { useState, useReducer } from "react";
import LaneComponent from "../LaneComponent/LaneComponent";
import { ACTION_TYPES, initialState } from "../state/initialState";
import "./LaneContainer.css";

const reducer = (state, action) => {
  switch (action) {
    case ACTION_TYPES.EDIT_TARGET_CARD:
      return {
        ...state,
        targetCard: action.payload.targetCard,
      };
    case ACTION_TYPES.EDIT_BOARDS:
      return {
        ...state,
        boardLanes: action.payload.boardLanes,
      };
    default:
      return state;
  }
};

const LaneContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  const onDragEnter = (boardId, cardId) => {
    if (targetCard.cardId === cardId) return;

    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  const onDragEnd = (boardId, cardId) => {
    const sourceBoardIndex = state.boardLanes.findIndex(
      (item) => item.id === boardId
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = state.boardLanes[
      sourceBoardIndex
    ]?.cards?.findIndex((item) => item.id === cardId);
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = state.boardLanes.findIndex(
      (item) => item.id === targetCard.boardId
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = state.boardLanes[
      targetBoardIndex
    ]?.cards?.findIndex((item) => item.id === targetCard.cardId);
    if (targetCardIndex < 0) return;

    const tempBoardsList = [...state.boardLanes];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);

    tempBoardsList[targetBoardIndex].cards.splice(
      targetCardIndex,
      0,
      sourceCard
    );

    dispatch({
      type: ACTION_TYPES.EDIT_BOARDS,
      payload: {
        boardLanes: tempBoardsList,
      },
    });

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  return (
    <div className="lane-container">
      {state.boardLanes.map((boardLane) => (
        <LaneComponent
          key={boardLane.id}
          boardLane={boardLane}
          onDragEnter={onDragEnter}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
};

export default LaneContainer;
