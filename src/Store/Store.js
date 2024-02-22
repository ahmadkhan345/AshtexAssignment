import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});