import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";

import PlayerCard from "./PlayerCard";
interface Iprops {
  players: Iplayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  SetSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  SetSelectedPlayers,
}: Iprops) => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-10 my-10">
      {players.map((player: Iplayer, ind: number) => {
        return (
          <PlayerCard
            key={ind}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            SetSelectedPlayers={SetSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
