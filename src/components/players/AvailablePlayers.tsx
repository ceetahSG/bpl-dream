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
    <div className="container mx-auto my-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:my-10 lg:grid-cols-3 xl:grid-cols-4">
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
