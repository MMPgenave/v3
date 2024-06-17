"use client";
import { CopyInput } from ".";
import { useEffect, useState } from "react";
import { socketEmit } from "@/app/lib/hooks/hooks";
import { Variant } from "@/app/lib/scripts/backgammon/util";
import { Button, WaitingGameSpinner } from "@/app/UI/components/base";
import { redirect, usePathname, useRouter } from "next/navigation";
import { BASE_URL, routes } from "@/app/lib/config/routes";
import { leaveRoom } from "@/app/actions/leave-room";
import { toast } from "react-toastify";

export function RoomSetup({ waiting, scoreScreen, isHost }) {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const roomName = pathArray[pathArray.length - 1];
  const router = useRouter();
  const sendVariant = () => {
    socketEmit("room/select-variant", Variant.portes, (acknowledgement) => {
      if (acknowledgement.ok) {
        setSelectedVariant(null);
      }
    });
  };
  const handleLeaveRoom = () => {
    leaveRoom(roomName, toast);
    setTimeout(() => {
      console.log("set time out");
      router.push(routes.GAMESLIST.BACKGAMMON);
    }, 1000);
  };

  useEffect(() => {
    sendVariant();
  }, []);

  return (
    <div
      className={`${
        waiting ? "" : "hidden"
      } fixed top-0 left-0 w-full z-50 bg-secondary flex gap-3 flex-col text-sm font-bold items-center justify-center h-full`}
    >
      <WaitingGameSpinner style="w-12 h-12 bg-danger" />
      <div className="flex flex-col gap-6">
        <div className="text-center flex flex-col items-center justify-center gap-3">
          <p className="capitalize text-base text-primary">Waiting for another player to join...</p>
          <p className="capitalize text-blue-violet font-bold">Send this Link to your friend:</p>
          <CopyInput value={`${BASE_URL}${pathname}`} />
          <p className="capitalize text-blue-violet font-bold">You can also send this code:</p>
          <CopyInput value={roomName} />
        </div>

        <Button mode="danger" outline size="sm" additionalStyles="text-lg w-full" onClick={handleLeaveRoom}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
