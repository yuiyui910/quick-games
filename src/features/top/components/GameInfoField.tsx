import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { gameInfo } from "types/gameInfo";

export const GameInfoField = (gameInfo: gameInfo) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(gameInfo.url)}>
      <div>
        <img src={gameInfo.imagePath} alt="五目並べ Ex の画像" />
      </div>
      <div>
        <div>{gameInfo.name}</div>
        <div>{gameInfo.outline}</div>
      </div>
    </div>
  );
};
