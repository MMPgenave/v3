"use client";

import { useEffect, useState } from "react";
import { Button, RadioGroup } from "../../base";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { startRoom } from "@/app/actions";
import { setFailedToJoin, setJoinName, setShouldRedirectTo } from "@/app/lib/redux/features/room/room-slice";
import { toast } from "react-toastify";
// import { setHostId, setBet } from "@/app/lib/redux/features/RoomProperties/RoomProperties-slice";
import { socketEmit } from "@/app/lib/hooks/hooks";

export const Modal = ({ show, toggleShow }) => {
  const { user } = useAppSelector((state) => state.auth);
  const roomProperties = useAppSelector((state) => state.roomPropertis);
  const [setHostId, setsetHostId] = useState();

  const dispatch = useAppDispatch();

  const handleSetJoinName = (name) => {
    dispatch(setJoinName(name));
  };

  const handleSetFailedToJoin = (value) => {
    dispatch(setFailedToJoin(value));
  };
  const handleSetShouldRedirectTo = (value) => {
    dispatch(setShouldRedirectTo(value));
  };

  const items = [
    { amount: 100, icon: "bi-coin" },
    { amount: 200, icon: "bi-coin" },
    { amount: 500, icon: "bi-coin" },
    { amount: 1000, icon: "bi-coin" },
    { amount: 2000, icon: "bi-coin" },
    { amount: 5000, icon: "bi-coin" },
  ];
  const [betAmount, setBetAmount] = useState("");
  const [selected, setSelected] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (Number(e.target.value) > user.Coin) {
      setErrorMessage("Not enough coins");
    } else if (Number(e.target.value) > 5000) {
      setErrorMessage("Maximum bet amount: 5000");
    } else if (Number(e.target.value) < 100) {
      setErrorMessage("Minimum bet amount: 100");
    } else {
      setErrorMessage("");
    }
    setBetAmount(e.target.value);
    setSelected(e.target.value);
  };

  const handleClick = () => {
    startRoom({}, handleSetFailedToJoin, handleSetJoinName, handleSetShouldRedirectTo, toast);
    socketEmit("hostId", { hostId: user.id, bet: Number(betAmount), hostName: user.UserName });
    toggleShow(!show);
  };

  const handleSetBetAmount = (value) => {
    if (Number(value) > user.Coin) {
      setErrorMessage("Not enough coins");
    } else {
      setErrorMessage("");
    }
    setBetAmount(value);
  };

  const handleSetSelected = (value) => {
    setSelected(value);
  };

  return (
    <div
      className={`${
        show ? "" : "hidden"
      } fixed top-0 overflow-auto z-50 bg-[#39395699]  w-full h-full flex justify-center items-center`}
    >
      <div className=" bg-white rounded-lg">
        <div className="card-body">
          <div className="p-4 flex justify-between items-center font-bold border-b border-secondary">
            <h4 className="text-center text-lg">Game Settings</h4>
            <i className="bi bi-x-lg cursor-pointer" onClick={toggleShow}></i>
          </div>
          <div className="p-4 border-b border-secondary">
            <div className="flex items-center gap-2 justify-center ">
              <input
                className="w-full outline-none border border-secondary p-2"
                type="number"
                placeholder="Enter the bet amount"
                value={betAmount}
                onChange={handleChange}
              />
              <i className="bi bi-coin text-2xl text-neon-carrot"></i>
            </div>
            <p className="text-danger min-h-5 ps-1">{errorMessage}</p>
            <div>
              <RadioGroup
                selected={selected}
                handleSetSelected={handleSetSelected}
                items={items}
                handleSetBetAmount={handleSetBetAmount}
              >
                <i className="bi bi-coin "></i> 100
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary p-4 flex gap-2 justify-end">
          <Button mode="danger" isLoading={false} onClick={toggleShow}>
            cancel
          </Button>
          <Button onClick={handleClick} mode="lively" isLoading={false} disabled={!betAmount || errorMessage}>
            start
          </Button>
        </div>
      </div>
    </div>
  );
};
