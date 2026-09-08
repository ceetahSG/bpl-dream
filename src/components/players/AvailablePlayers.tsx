import type { Iplayer } from "../../types/player";

import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-10 my-10">
      {players.map((player: Iplayer, ind: number) => {
        return <PlayerCard key={ind} player={player} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
