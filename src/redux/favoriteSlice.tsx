import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface State {
  favoriteShip: Array<any>
}

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteShip: []
  } as State,
  reducers: {
    addToFavorite: (state: State, actions: PayloadAction<any>) => {
      state.favoriteShip = [...state.favoriteShip, actions.payload]
      console.log("state", actions?.payload)
    },

    removeFromFavorite: (state: State, actions: PayloadAction<any>) => {
      state.favoriteShip = actions.payload
    }
  }
})

export const favoriteReducer = favoriteSlice.reducer
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions
