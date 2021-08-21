import { atom, atomFamily } from "recoil";

export const argumentListState = atomFamily({
  key: "argumentListState",
  default: [],
});
