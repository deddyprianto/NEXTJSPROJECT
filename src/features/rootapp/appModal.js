import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const appModal = createSlice({
  name: "appModal",
  initialState,
  reducers: {
    actionsMenuModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});
export const { actionsMenuModal } = appModal.actions;

export default appModal.reducer;
