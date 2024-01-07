import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isLoading: false,
};

export const notifLoadingSlice = createSlice({
  name: "notifLoading",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.message = action.payload;
      state.isLoading = true;
    },
    notLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loading, notLoading } = notifLoadingSlice.actions;

export default notifLoadingSlice.reducer;
