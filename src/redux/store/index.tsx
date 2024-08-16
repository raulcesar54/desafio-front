import { configureStore } from "@reduxjs/toolkit";
import formManagement from "../slices/managementForm.slice";

export const store = configureStore({
  reducer: {
    active: formManagement,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
