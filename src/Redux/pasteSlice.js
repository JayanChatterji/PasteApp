import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;

      if (paste.title.trim() === "") {
        toast.error("Enter Title for Paste");
      } else {
        const exists = state.pastes.some((p) => p.title === paste.title);
        if (exists) {
          toast.error("Paste Already Existed");
        } else {
          state.pastes.push(paste);
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast.success("Paste Created Successfully");
        }
      }
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((p) => p.id === paste.id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully");
      }
    },
    removeFromPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((p) => p.id === paste);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Removed Successfully");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("Paste Reset Successfully");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, removeFromPaste, resetAllPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
