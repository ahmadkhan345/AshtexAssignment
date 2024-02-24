import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const favoritesSLice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {  
      state.push(action.payload.favorites);
      Alert.alert('Added to Favorites')
    },
  },
});


export const { addToFavorites } = favoritesSLice.actions;

export default favoritesSLice.reducer;