import Image from "next/image";
import game from "@/app/lib/assets/img/games/backgammon-wallpaper.jpeg";
import { Progress } from "../../components/base";

export const GamePageHeader = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <Image src={game} alt="backgammon" className="absolute -z-20" />
      <div className="flex items-center w-full h-full top-0 bottom-0 text-lg font-bold text-secondary bg-[rgba(22,21,56,0.9)] px-3">
        <div className="relative p-2">
          <i className="bi bi-star-fill text-blue-violet text-5xl"></i>
          <span className="absolute text-secondary left-[26px] top-[18px] text-2xl font-bold">
            3
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <Progress size="w-full " />
          <div className="w-full flex justify-between ">
            <span className="text-sm">Rookie</span>
            <span className="text-sm">Played:23 Won:15</span>
          </div>
        </div>
      </div>
    </div>
  );
};
