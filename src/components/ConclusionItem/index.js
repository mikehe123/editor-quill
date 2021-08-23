import { useRecoilValue } from "recoil";

import { argumentListState } from "../../state/atoms";
import { ConclusionItem } from "./ConclusionItemElements";

export function ArgumentItem({ id }) {
  const argument = useRecoilValue(argumentListState(id));

  return <ConclusionItem>{argument}</ConclusionItem>;
}
