import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/auth-slice";
import { modalReducer } from "./features/modal/modal-slice";
import { roomReducer } from "./features/room/room-slice";
import { roomPropertiesReducer } from "./features/RoomProperties/RoomProperties-slice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      modal: modalReducer,
      room: roomReducer,
      roomPropertis: roomPropertiesReducer,
    },
  });
};
