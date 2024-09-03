import Image from "next/image";
import { GameImage, HistoryCardImage, Progress } from "../../base";

export const HistoryCard = ({ img }) => {
  return (
    <div className="bg-black/50 rounded-lg shadow-lg w-full flex items-center p-4">
      <HistoryCardImage img={img} />

      <div className="w-full p-2">
        <div className="w-full flex justify-between items-center">
          <h2 className="capitalize ">backgammon</h2>
          {/* <span>{foundUser.games.backgammon.level}</span> */}
        </div>
        <Progress />
        <div className="flex justify-between">
          {/* <span>{foundUser.games.backgammon.rank}</span> */}
          {/* <span>
            Played:{foundUser.games.backgammon.totalGamesPlayed} Won:
            {foundUser.games.backgammon.totalWins}
          </span> */}
        </div>
      </div>
    </div>
  );
};
