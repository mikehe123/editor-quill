import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { argumentIdState, tabState } from "../../state/atoms";
import useKey from "../KeyPress";

export const UpdateId = () => {
  const setArgId = useSetRecoilState(argumentIdState);
  const setTabState = useSetRecoilState(tabState);
  const tabPressed = useKey("tab");

  console.log(tabPressed);

  useEffect(() => {
    setArgId((oldIds) => [...oldIds, oldIds[oldIds.length - 1] + 1]);
    setTabState(tabPressed);
  }, [tabPressed]);

  return <></>;
};
