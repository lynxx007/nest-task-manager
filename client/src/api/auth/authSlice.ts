import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: {
    _id: string;
    username: string;
    email: string;
    avatar?: string;
    teams?: { _id: string }[];
    tasks?: { _id: string }[];
    currentPosition?: string;
  } | null;

  accessToken?: string | null;
}

const initialState: UserState = {
  user: {
    _id: "",
    username: "",
    email: "",
    avatar: "",
    teams: [],
    tasks: [],
    currentPosition: "",
  },
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        message: string;
        accessToken: string;
        user: { _id: string; username: string; email: string };
      }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    removeUser: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
