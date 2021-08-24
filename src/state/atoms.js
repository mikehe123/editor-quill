import { atom, atomFamily } from "recoil";
import Parchment from "parchment";
export const argumentListState = atomFamily({
  key: "argumentListState",
  default: {
    contentBlock: new Parchment(),
    cursorAt: 0,
  },
});

export const argumentIdState = atom({
  key: "argumentIdState",
  default: [0],
});

export const tabState = atom({
  key: "tabState",
  default: 0,
});

export let id = 1;
