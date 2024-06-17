const { socketEmit } = require("../lib/hooks/hooks");

export const joinRoom = (
  roomName,
  setFailedToJoin,
  setJoinName,
  setShouldRedirectTo,
  toast
) => {
  socketEmit("event/join-room", roomName, (acknowledgement) => {
    if (!acknowledgement.ok) {
      toast.error("Room does not exist");
      setFailedToJoin(true);
      setJoinName("");
    } else {
      setShouldRedirectTo(acknowledgement.roomName);
    }
  });
};
