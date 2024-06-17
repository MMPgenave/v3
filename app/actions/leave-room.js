const { socketEmit } = require("../lib/hooks/hooks");

export const leaveRoom = (roomName, toast) => {
  socketEmit("room/leave-room", roomName, (acknowledgement) => {
    if (!acknowledgement.ok) {
      toast.error("Room does not exist");
    } else {
      toast.success("successfully left the room ");
    }
  });
};
