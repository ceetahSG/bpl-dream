import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
interface IPlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  SetSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  SetSelectedPlayers,
}: IPlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectedPlayer = () => {
    const newCoin = coin - player.price;
    if (newCoin < 0) {
      setIsSelected(false);
      toast.error("Not enough coin");
    } else {
      setCoin(newCoin);
      setIsSelected(true);
      toast.success(`${player.playerName} is purchased successfully.`);
      SetSelectedPlayers([...selectedPlayers, player]);
    }
  };
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Player Image */}
      <figure className="relative h-64 overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-base-100/90 px-3 py-1.5 text-xs font-bold shadow backdrop-blur-sm">
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body gap-4">
        {/* Player Name */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FaUser className="text-primary" />
            {player.playerName}
          </h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-base-content/60">
            <FaFlag />
            <span>{player.origin}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-0"></div>

        {/* Playing Style */}
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-base-content/50">
            Playing Style
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Batting</p>

              <p className="mt-1 font-semibold">{player.battingStyle}</p>
            </div>

            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Bowling</p>

              <p className="mt-1 font-semibold">{player.bowlingStyle}</p>
            </div>
          </div>
        </div>

        {/* Price + Button */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-base-content/50">
              Player Price
            </p>

            <p className="text-xl font-extrabold text-primary">
              ${player.price.toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => handleSelectedPlayer()}
            disabled={isSelected}
            className="btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
