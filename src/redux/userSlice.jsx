import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  name: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    connexion: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    deconnexion: (state) => {
      state.id = null;
    },
    update: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { connexion, deconnexion, update } = userSlice.actions;

export default userSlice.reducer;
