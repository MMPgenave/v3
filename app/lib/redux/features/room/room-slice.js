import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  joinName: false,
  shouldRedirectTo: null,
  failedToJoin: false,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setJoinName: (state, action) => {
      state.joinName = action.payload;
    },
    setShouldRedirectTo: (state, action) => {
      state.shouldRedirectTo = action.payload;
    },
    setFailedToJoin: (state, action) => {
      state.failedToJoin = action.payload;
    },
  },
});

export const { setJoinName, setShouldRedirectTo, setFailedToJoin } =
  roomSlice.actions;
export const roomReducer = roomSlice.reducer;
