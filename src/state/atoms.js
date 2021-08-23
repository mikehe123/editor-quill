import { atom, atomFamily } from "recoil";

export const argumentListState = atomFamily({
  key: "argumentListState",
  default: {
    content: "",
  },
});

export const argumentIdState = atom({
  key: "argumentIdState",
  default: [0],
});





export let id = 1;
