import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "moviesList",
  initialState: [],
  reducers: {
    moviesListing: (state, action) => {
      // console.log('redux movies',action.payload.movies);
  
      state.push(action.payload.movies);
    },
  },
});


export const { moviesListing } = moviesSlice.actions;

export default moviesSlice.reducer;
