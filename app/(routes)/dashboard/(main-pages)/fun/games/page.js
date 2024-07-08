"use client";
import backgammon from "@/app/lib/assets/img/games/backgammon-wallpaper.jpeg";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/app/lib/config/routes";

const Games = () => {
  return (
    <div className="grid lg:grid-cols-2  justify-center items-center gap-4 md:p-10 p-4  ">
      <Link href={routes.GAMESLIST.BACKGAMMON} className="relative rounded-lg cursor-pointer ">
        <Image className="md:w-full rounded-lg " src={backgammon} alt="backgammon" />
        <h2 className="flex items-center justify-center absolute w-full top-0 bottom-0 text-4xl font-bold text-secondary bg-[rgba(22,21,56,0.8)] hover:bg-[rgba(22,21,56,0.7)] transition-all hover:text-5xl rounded-lg">
          <span className="p-2">Backgammon</span>
        </h2>
      </Link>
      <Link href={routes.GAMESLIST.BACKGAMMON} className="relative rounded-lg cursor-pointer ">
        <Image className="md:w-full rounded-lg " src={backgammon} alt="backgammon" />
        <h2 className="flex items-center justify-center absolute w-full top-0 bottom-0 text-4xl font-bold text-secondary bg-[rgba(22,21,56,0.8)] hover:bg-[rgba(22,21,56,0.7)] transition-all hover:text-5xl rounded-lg">
          <span className="p-2">Backgammon</span>
        </h2>
      </Link>
    </div>
  );
};

export default Games;
