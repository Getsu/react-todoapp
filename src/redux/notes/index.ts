import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// State
type State = {
  sentence: string;
};

const initialState: State = {
  sentence: "",
};

type UpdateNotes = PayloadAction<{ newSentence: string }>;

// Reducer
const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    updateNotes: (state, { payload }: UpdateNotes): State => {
      return {
        ...state,
        sentence: payload.newSentence,
      };
    },
  },
});

export const noteActions = notes.actions;
export const noteReducer = notes.reducer;
