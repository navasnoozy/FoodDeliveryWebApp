import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/userSlice";
import foodSlice from "./slice/foodSlice";

const store = configureStore({
  reducer: {
    user: usersSlice,
    food: foodSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
