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
      <div className="container text-center mx-auto">
        <h2 className="text-3xl">No players selected yet</h2>
        <h3>Go to Available tab to select players</h3>
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
