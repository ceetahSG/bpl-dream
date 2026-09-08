import { type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import SelectedPlayerCard from "./SelectedPlayerCard";
interface ISelectedPlayersProps {
  selectedPlayers: Iplayer[];
  SetSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  selectedPlayers,
  SetSelectedPlayers,
  coin,
  setCoin,
}: ISelectedPlayersProps) => {
  if (selectedPlayers.length === 0) {
    return (
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl">No players selected yet</h2>
        <h3 className="mt-2 text-sm sm:text-base">
          Go to Available tab to select players
        </h3>
      </div>
    );
  }

  return (
    <div>
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard
          key={player.playerName}
          player={player}
          selectedPlayers={selectedPlayers}
          SetSelectedPlayers={SetSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
