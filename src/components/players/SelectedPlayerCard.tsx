import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import { RiDeleteBin6Fill } from "react-icons/ri";
interface ISelecteDPlayerCardProps {
  player: Iplayer;
  selectedPlayers: Iplayer[];
  SetSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  SetSelectedPlayers,
  coin,
  setCoin,
}: ISelecteDPlayerCardProps) => {
  const handleRemovePlayer = (player: Iplayer) => {
    const restPlayer = selectedPlayers.filter(
      (selectedPlayers) => selectedPlayers.playerName != player.playerName,
    );
    SetSelectedPlayers(restPlayer);
    const newCoin = coin + player.price;
    setCoin(newCoin);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 shadow-md backdrop-blur-sm">
        {/* Player Image */}
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-800">
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Player Info */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-bold text-black">
            {player.playerName}
          </h3>

          <p className="mt-1 text-sm text-gray-400">Batting Style</p>

          <p className="text-sm font-medium text-black">
            {player.battingStyle}
          </p>
        </div>

        {/* Selected indicator */}
        <button
          onClick={() => handleRemovePlayer(player)}
          className=" text-red-400"
        >
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
