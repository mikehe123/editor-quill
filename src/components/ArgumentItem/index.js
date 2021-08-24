import { useRecoilValue } from "recoil";

import { argumentListState } from "../../state/atoms";
import { ArgItem } from "./ArgumentItemElements";

export function ArgumentItem({ itemId }) {
  const argument = useRecoilValue(argumentListState(itemId));
  // console.log("argument item id: " + typeof itemKey);
  // console.log("keyis" + itemKey);
  // console.log(argument.contentBlock);
  return <ArgItem>temp</ArgItem>;
  // return <div>{}</div>;
}
