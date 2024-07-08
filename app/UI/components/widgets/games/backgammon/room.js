"use client";
import { useState, useEffect, useReducer } from "react";
import { useSocketOn, socketEmit } from "@/app/lib/hooks/hooks";
import { Player, RoomStep } from "@/app/lib/scripts/backgammon/util";
import { ScoreScreen, Game, RoomSetup } from "@/app/UI/components/widgets/games/backgammon";
import { redirect, usePathname } from "next/navigation";
import { closeRoom } from "@/app/actions/room/close-room";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
export function Room() {
  const path = usePathname();
  const pArr = path.split("/");
  const roomName = pArr[pArr.length - 1];
  const [player, setPlayer] = useState(undefined);
  const [failedJoin, setFailedJoin] = useState(false);
  const [Waiting, setWaiting] = useState(true);
  const [roomState, updateRoomState] = useReducer((state, payload) => ({ ...state, ...payload }), {});
  const [hostId, sethostId] = useState();
  const [guestId, setguestId] = useState();
  const [roomId, setroomId] = useState();
  async function close_Room_here(winnerId, loserId) {
    await closeRoom(roomId, winnerId, loserId);
  }
  useEffect(() => {
    socketEmit("event/join-room", roomName, (acknowledgement) => {
      if (!acknowledgement.ok) {
        setFailedJoin(true);
      } else {
        setPlayer(acknowledgement.player);
      }
    });
  }, [roomName]);

  useEffect(() => {
    if (roomState.players) {
      const numberOfPlayers = Object.keys(roomState.players).length;
      if (numberOfPlayers > 1) {
        setWaiting(false);
      }
    }
  }, [roomState]);

  useSocketOn("room/update-room", (room) => {
    console.log("roooom", room);
    updateRoomState(room);
    if (room.step === 1) {
      console.log(`game finished.`);
      let winner;
      let loser;

      if (room.score[1] !== 0) {
        winner = hostId;
        loser = guestId;
      }
      if (room.score[1] === 0) {
        winner = guestId;
        loser = hostId;
      }
      console.log(`winner:${winner}`);
      console.log(`loser :${loser}`);
      alert(`User with UserId ${winner} wins the game`);
      close_Room_here(winner, loser);
    }
  });

  useSocketOn("recive_roomData", (data) => {
    console.log("in useSocketOn :roomId", data.roomId);
    console.log("in useSocketOn :hostId", data.hostId);
    console.log("in useSocketOn :guestId", data.guestId);
    setroomId(data.roomId);
    sethostId(data.hostId);
    setguestId(data.guestId);
  });

  if (failedJoin) {
    redirect("/game/backgammon/games");
  }

  return (
    <>
      <RoomSetup
        waiting={Waiting}
        scoreScreen={<ScoreScreen winner={roomState.board?.winner} score={roomState.score} />}
        isHost={player === Player.white}
      />
      {roomState.winner && <ScoreScreen winner={roomState.board?.winner} score={roomState.score} />}
      <Game
        player={player}
        roomStep={roomState.step}
        startingRolls={roomState.dice}
        variant={roomState.variant}
        boardState={roomState.board || null}
        score={roomState.score}
        roomName={roomName}
      />
    </>
  );
}
