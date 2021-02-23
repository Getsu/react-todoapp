import { Store } from "..";

// セレクターの宣言
export const noteSelector = (state: Store) => {
  return state.notes.sentence;
};
