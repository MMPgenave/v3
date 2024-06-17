import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomId: "",
  hostId: 0,
  guestId: 0,
  bet: 0,
  winnerId: 0,
  looserId: 0,
};

export const RoomPropertiesSlice = createSlice({
  name: "RoomProperties",
  initialState,
  reducers: {
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    setHostId: (state, action) => {
      state.hostId = action.payload;
    },
    setGuestId: (state, action) => {
      state.guestId = action.payload;
    },
    setBet: (state, action) => {
      state.bet = action.payload;
    },
    setWinnerId: (state, action) => {
      state.winnerId = action.payload;
    },
    setLoserId: (state, action) => {
      state.looserId = action.payload;
    },
  },
});

export const { setRoomId, setHostId, setGuestId, setBet, setWinnerId, setLoserId } = RoomPropertiesSlice.actions;
export const roomPropertiesReducer = RoomPropertiesSlice.reducer;
