"use client"
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "@/features/data/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
