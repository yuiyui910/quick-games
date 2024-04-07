import React from "react";
import { games } from "../../data/games";
import { GameInfoField } from "./components/GameInfoField";

export const Top = () => {
  return (
    <>
      {games.map((game) => (
        <GameInfoField key={game.id} {...game} />
      ))}
    </>
  );
};
