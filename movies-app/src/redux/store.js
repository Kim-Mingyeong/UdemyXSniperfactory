import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import MovieStore from "./movie-store";

const store = configureStore({
  reducer: {
    MovieStore: MovieStore,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
