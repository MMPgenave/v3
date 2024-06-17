import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setShowModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
