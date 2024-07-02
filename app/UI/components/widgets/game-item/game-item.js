"use client";
import Image from "next/image";
import { Button, Input } from "../../base";
import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import { JoinGameSchema } from "@/app/lib/config/definitions";
import { socketEmit } from "@/app/lib/hooks/hooks";
import { redirect } from "next/navigation";
import { joinRoom } from "@/app/actions";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { setFailedToJoin, setJoinName, setShouldRedirectTo } from "@/app/lib/redux/features/room/room-slice";
import { createRoom } from "@/app/actions/room/create-room";
import { useSocketOn } from "@/app/lib/hooks/hooks";

export const GameItem = ({ img, children, handleClick, withInput }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [hostIdFromSocket, sethostIdFromSocket] = useState();
  const [bet, setBet] = useState();
  console.log("hostId from ", hostIdFromSocket);

  async function OpenRoom() {
    const res = await createRoom(JSON.stringify([hostIdFromSocket, user.id]), "backgammon", bet);
    socketEmit("roomProperties", { roomId: res.Data.Room.RoomID, hostId: hostIdFromSocket, guestId: user.id });
  }
  const fields = [
    {
      name: "code",
      type: "text",
      placeholder: "Room ID",
      icon: "bi-people",
    },
  ];
  const initialValues = {
    code: "",
  };
  const { joinName, failedToJoin, shouldRedirectTo } = useAppSelector((state) => state.room);

  const handleSetJoinName = (name) => {
    dispatch(setJoinName(name));
  };

  const handleSetFailedToJoin = (value) => {
    dispatch(setFailedToJoin(value));
  };
  const handleSetShouldRedirectTo = (value) => {
    dispatch(setShouldRedirectTo(value));
  };

  const [isLoading, setIsLoading] = useState(false);
  const startRoom = (options) => {
    function callBack(acknowledgement) {
      if (!acknowledgement.ok) {
        console.log(`Failed to start room "${acknowledgement.roomName}".`);
      } else {
        setShouldRedirectTo(acknowledgement.roomName);
        joinRoom(acknowledgement.roomName);
      }
    }

    socketEmit("event/start-room", { ...options }, callBack);
  };

  useSocketOn("recive_hostId", (host_id) => {
    console.log("in useSocketOn :hostId", host_id.hostId);
    console.log("in useSocketOn :bet", host_id.bet);
    sethostIdFromSocket(host_id.hostId);
    setBet(host_id.bet);
  });

  const handleSubmit = (values, setSubmitting) => {
    joinRoom(values.code, handleSetFailedToJoin, handleSetJoinName, handleSetShouldRedirectTo, toast);
    socketEmit("guest", { guestId: user.id, name: user.UserName });

    OpenRoom();
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center p-4 border-b-2 border-secondary gap-2 sm:gap-0">
      <div className="flex items-center justify-between w-full gap-3">
        <div className="flex gap-2 items-center">
          <Image src={img} alt="backgammon" className="w-24 rounded-full" />
          <span className="capitalize">{children}</span>
        </div>

        {withInput ? (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
            validationSchema={JoinGameSchema}
          >
            {({ isSubmitting, errors, touched }) => {
              return (
                <Form className="flex flex-col items-center gap-2 w-32 lg:rounded-lg">
                  {withInput &&
                    fields.map((field) => (
                      <Field
                        name={field.name}
                        key={field.name}
                        component={Input}
                        placeholder={field.placeholder}
                        icon={field.icon}
                        error={errors[field.name]}
                        touched={touched[field.name]}
                        type={field.type}
                      />
                    ))}
                  <Button
                    mode="success"
                    square
                    additionalStyles="rounded-lg m-0 w-full"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Join
                  </Button>
                </Form>
              );
            }}
          </Formik>
        ) : (
          <Button
            onClick={handleClick}
            mode="success"
            square
            additionalStyles="rounded-lg m-0"
            type="submit"
            isLoading={isLoading}
          >
            Join
          </Button>
        )}
      </div>
      {shouldRedirectTo === null ? null : redirect(`/game/backgammon/${shouldRedirectTo}`)}
    </div>
  );
};
