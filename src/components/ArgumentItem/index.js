import { useRecoilValue } from "recoil";

import { argumentListState } from "../../state/atoms";
import { ArgItem } from "./ArgumentItemElements";

export function ArgumentItem({ itemId }) {
  const argument = useRecoilValue(argumentListState(itemId));
  // console.log("argument item id: " + typeof itemKey);
  // console.log("keyis" + itemKey);

  return <ArgItem>{argument.content}</ArgItem>;
  // return <div>{}</div>;
}
