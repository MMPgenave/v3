"use client";
import { useRouter } from "next/navigation";
import { Avatar } from "../../components/base";
import { routes } from "@/app/lib/config/routes";
import { useState, useEffect } from "react";
import { useSocketOn } from "@/app/lib/hooks/hooks";

export const GameHeader = ({ className }) => {
  const router = useRouter();
  const [hostId, setHostId] = useState();
  const [guestId, setGuestId] = useState();
  useSocketOn("recive_roomData", (data) => {
    console.log("in useSocketOn game-header :hostId", data.hostId);
    console.log("in useSocketOn game-header :guestId", data.guestId);
    setHostId(data.hostId);
    setGuestId(data.guestId);
  });

  return (
    <div className={`w-full border-b border-b-secondary bg-secondary ${className}`}>
      <div className="flex justify-between items-center p-2">
        <i
          className="bi bi-chevron-left cursor-pointer text-2xl"
          onClick={() => router.push("/game/backgammon/games")}
        ></i>
        <div className=" flex gap-6 m-auto items-center">
          <div className="flex flex-col items-center">
            <Avatar href={routes.PROFILE} src="/images/avatar.png" />
            <div>{hostId}</div>
          </div>
          <span className="font-bold text-xl">vs</span>
          <div className="flex flex-col items-center">
            <Avatar href={routes.PROFILE} src="/images/avatar.png" />
            <span>{guestId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
