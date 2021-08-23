import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { argumentIdState } from "../../state/atoms";
import Editor from "../editor";
import useKey from "../KeyPress";

const EditorLogicContainer = () => {
  const argumentId = useRecoilValue(argumentIdState);
  const setArgId = useSetRecoilState(argumentIdState);
  const tabPressed = useKey("tab");

  console.log(tabPressed);

  useEffect(() => {
    setArgId((oldIds) => [...oldIds, oldIds[oldIds.length - 1] + 1]);
  }, [tabPressed]);

  const currentId = argumentId.length - 1;
  return (
    <>
      <Editor itemKey={currentId} tabPressed={tabPressed} />
    </>
  );
};

export default EditorLogicContainer;
