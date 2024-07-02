import { socketEmit } from "../lib/hooks/hooks";
import { joinRoom } from "./join-room";
export const startRoom = (options, setFailedToJoin, setJoinName, setShouldRedirectTo, toast) => {
  function callBack(acknowledgement) {
    if (!acknowledgement.ok) {
      console.log(`Failed to start room "${acknowledgement.roomName}".`);
    } else {
      console.log(`Room opened.`);

      setShouldRedirectTo(acknowledgement.roomName);
      joinRoom(acknowledgement.roomName, setFailedToJoin, setJoinName, setShouldRedirectTo, toast);
    }
  }

  socketEmit("event/start-room", { ...options }, callBack);
};
