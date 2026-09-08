import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}
const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState("available");
  const [selectedPlayers, SetSelectedPlayers] = useState<Iplayer[]>([]);
  //   optional way
  //   const handleUpdateButtonType = (type: "available" | "selected") => {
  //     setButtonType(type);
  //   };
  return (
    <div className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="container mx-auto mb-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {buttonType === "available" ? (
          <h2 className="font-bold text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-xl">Selected Players</h2>
        )}

        <div>
          <button
            type="button"
            onClick={() => setButtonType("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            type="button"
            onClick={() => setButtonType("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {buttonType === "available" ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          SetSelectedPlayers={SetSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          SetSelectedPlayers={SetSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
