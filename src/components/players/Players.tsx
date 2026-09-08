import React, { use, useState } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}
const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState("available");
  //   optional way
  //   const handleUpdateButtonType = (type: "available" | "selected") => {
  //     setButtonType(type);
  //   };
  return (
    <div>
      <div className="container flex justify-between mx-auto gap-4 mb-2">
        {buttonType === "available" ? (
          <h2 className="font-bold text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-xl">Selected Players</h2>
        )}

        <div>
          <button
            onClick={() => setButtonType("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setButtonType("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {buttonType === "available" ? (
        <AvailablePlayers players={players}></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
