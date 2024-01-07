import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    initValue: undefined,
    section: undefined,
    compte: undefined,
    field: undefined,
    annee: undefined,
    mois: undefined,
  },
  display: false,
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    actif: (state, action) => {
      state.value = {
        ...action.payload,
      };
      console.log(state.value);
      state.display = true;
    },
    desactif: (state) => {
      state.display = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actif, desactif } = dialogSlice.actions;

export default dialogSlice.reducer;
