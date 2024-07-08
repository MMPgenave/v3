"use client";
import img from "@/app/lib/assets/img/games/backgammon.jpg";
import { setShowModal } from "@/app/lib/redux/features/modal/modal-slice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { GameItem } from "@/app/UI/components/widgets";
const Game = () => {
  const { show } = useAppSelector((state) => state.modal);

  const dispatch = useAppDispatch();
  const ToggleModal = () => {
    dispatch(setShowModal(!show));
  };

  return (
    <div className=" text-slate-200">
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
    </div>
  );
};

export default Game;
