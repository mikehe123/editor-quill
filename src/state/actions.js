import { useSetRecoilState } from "recoil";
import { argumentListState } from "./atoms";

export function useAddArgument({ content }) {
  return useSetRecoilState(argumentListState)((oldArguments) => [
    ...oldArguments,
    {
      content: content,
    },
  ]);
}
