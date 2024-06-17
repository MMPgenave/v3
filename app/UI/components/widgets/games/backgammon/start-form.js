//code was transferred to game/backgammon/games , safe to remove

"use client";
import { useState, useEffect } from "react";
import { socketEmit } from "@/app/lib/hooks/hooks";
import { Input } from "./base";
import { Button } from "./base";
import styled from "styled-components";
import { redirect } from "next/navigation";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }
`;

export function StartForm() {
  const [joinName, setJoinName] = useState("");
  const [shouldRedirectTo, setShouldRedirectTo] = useState(null);
  const [failedToJoin, setFailedToJoin] = useState(false);

  const handleChange = (event) => {
    if (event.target.validity.valid) {
      setJoinName(event.target.value);
      setFailedToJoin(false);
    }
  };

  const startRoom = (e, options) => {
    e.preventDefault();
    function callBack(acknowledgement) {
      if (!acknowledgement.ok) {
        console.log(`Failed to start room "${acknowledgement.roomName}".`);
      } else {
        setShouldRedirectTo(acknowledgement.roomName);
        joinRoom(e, acknowledgement.roomName);
      }
    }

    socketEmit("event/start-room", { ...options }, callBack);
  };

  const joinRoom = (e, roomName) => {
    e.preventDefault();
    socketEmit("event/join-room", roomName, (acknowledgement) => {
      if (!acknowledgement.ok) {
        setFailedToJoin(true);
        setJoinName("");
      } else {
        setShouldRedirectTo(acknowledgement.roomName);
      }
    });
  };

  // Automatically start a game when in game dev mode
  useEffect(process.env.GAMEDEV ? startRoom : () => {}, []);

  return (
    <Form>
      <Input
        type="type"
        inputMode="numeric"
        placeholder="Enter Your Code"
        maxLength="4"
        pattern="[0-9]*"
        onChange={handleChange}
        value={joinName}
        $invalid={failedToJoin}
      />
      <Button onClick={(e) => joinRoom(e, joinName)} color="secondary">
        Join game
      </Button>
      <Button onClick={(e) => startRoom(e)} color="primary">
        Host game
      </Button>

      <Button onClick={(e) => startRoom(e, { withBot: true })} color="primary">
        Play vs. computer
      </Button>

      {shouldRedirectTo === null
        ? null
        : redirect(`/backgammon/${shouldRedirectTo}`)}
    </Form>
  );
}
