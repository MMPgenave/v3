import { getAuthorData } from "@/app/actions";
import { signOut } from "@/app/actions/sign-out";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  error: "",
  user: {},
};

export const verifyToken = createAsyncThunk("users/verifyToken", async () => {
  try {
    const response = await getAuthorData();
    if (response.message === "Token has expired") {
      await signOut();
    }
    return response;
  } catch (error) {
    return await Promise.reject(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      if (
        action.payload.message === "The token could not be parsed from the request" ||
        action.payload.message === "Token has expired" ||
        action.payload.message === "No token found"
      ) {
        return {
          ...state,
          isLoggedIn: false,
          error: "no token or invalid token",
        };
      }
      return {
        ...state,
        isLoggedIn: true,
        error: "",
        user: action.payload.Data.User,
      };
    });
    builder.addCase(verifyToken.rejected, (state) => {
      return {
        ...state,
        isLoggedIn: false,
        error: "could not verify token",
      };
    });
  },
});

export const { setIsLoggedIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
