import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./MoviesSlice";
import favoritesReducer from "./FavoriteSlice"

export default configureStore({
  reducer: {
    movies: moviesReducer,
    favorites:favoritesReducer
  },
});