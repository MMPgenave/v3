"use client";
import img from "@/app/lib/assets/img/games/backgammon.jpg";
import { setShowModal } from "@/app/lib/redux/features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { Button } from "@/app/UI/components/ui/button";
import { GameItem } from "@/app/UI/components/widgets";
import { createRoom } from "@/app/actions/room/create-room";
import { closeRoom } from "@/app/actions/room/close-room";
import { setRoomId } from "@/app/lib/redux/features/RoomProperties/RoomProperties-slice";
const Game = () => {
  const { show } = useAppSelector((state) => state.modal);
  const roomProperties = useAppSelector((state) => state.roomPropertis);
  // console.log(`roomProperties is:${JSON.stringify(roomProperties)}`);

  const dispatch = useAppDispatch();
  const ToggleModal = () => {
    dispatch(setShowModal(!show));
  };
  const set_room_id = () => {
    dispatch(setRoomId("123"));
  };
  return (
    <>
      {/* <Button onClick={() => createRoom(JSON.stringify([1, 2]), "backgammon", 200)}>Create Room</Button>
      <Button onClick={() => closeRoom("TTGR751442977634493322", 1, 2)}>close Room</Button>
      <Button onClick={() => console.log(`session:${sessionStorage.getItem("roomId")}`)}>test sessionStorage </Button>
      <Button onClick={() => set_room_id()}>set room id </Button> */}

      <GameItem img={img} withInput>
        join a game
      </GameItem>
      <GameItem img={img} handleClick={ToggleModal}>
        quick play 1 point
      </GameItem>
      <GameItem handleClick={ToggleModal} img={img}>
        3 points
      </GameItem>
      <GameItem handleClick={ToggleModal} img={img}>
        5 points
      </GameItem>
    </>
  );
};

export default Game;
