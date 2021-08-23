import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { argumentIdState } from "../../state/atoms";
import Editor from "../Editor";
import useKey from "../KeyPress";

const EditorLogicContainer = () => {
  const argumentId = useRecoilValue(argumentIdState);
  const currentId = argumentId.length - 1;
  return (
    <>
      <Editor itemKey={currentId} />
    </>
  );
};

export default EditorLogicContainer;
