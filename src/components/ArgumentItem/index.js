import { useRecoilValue } from "recoil";

import { argumentListState } from "../../state/atoms";
import { ArgItem } from "./ArgumentItemElements";

export function ArgumentItem({ itemKey }) {
  const argument = useRecoilValue(argumentListState(itemKey));
  console.log("argument item id: "+typeof itemKey)
  console.log("keyis"+ itemKey)

  
  

  return <ArgItem >{argument.content}</ArgItem>;
  // return <div>{}</div>;
}
