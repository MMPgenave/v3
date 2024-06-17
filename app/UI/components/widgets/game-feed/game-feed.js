import Image from "next/image";
import icon from "@/app/lib/assets/img/games/backgammon.jpg";
import { Progress, GameFeedSubHeading as SubHeading } from "../../base";
import { randName } from "@/app/lib/utils";
export const GameFeed = () => {
  const randomName = randName();
  return (
    <div
      style={{ "background-color": "black" }}
      className="flex justify-between items-center p-2 gap-2 border-b-2 border-slate-300"
    >
      <Image className="rounded-full w-16 h-16 sm:w-20 sm:h-20" src={icon} alt="daily mission" />
      <div className="flex flex-col w-full">
        <div className="flex w-full items-center justify-between">
          <SubHeading>Backgammon </SubHeading>
          <span className="text-sm text-dim-gray">04/09/24</span>
        </div>
        <h2 className=" text-sm">{randomName} won</h2>
        <h2 className=" text-sm">you won</h2>
      </div>
    </div>
  );
};
