import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name?: string;
  email?: string;
  password?: string;
}

interface AuthState {
  user: User;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: { id: 1, name: undefined, email: undefined, password: undefined },
  isAuthenticated: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ name: string; email: string; password: string }>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.isAuthenticated = true;
    },

    loginUser: (state, action: PayloadAction<{ email: string; password: string }>) => {
      if (state.user.email === action.payload.email && state.user.password === action.payload.password) {
        state.isAuthenticated = true;
      } else {
        throw new Error("Invalid credentials");
      }
    },

    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { addUser, loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
