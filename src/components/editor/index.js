import React from "react";
import ReactQuill, { quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRecoilState } from "recoil";
import { argumentListState, argumentIdState } from "../../state/atoms";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings, { content } from "./keybindings";

let id = 0;
function getId() {
  return id++;
}
const Editor = () => {
  const [value, setValue] = React.useState("");
  const [argumentId, setArgumentId] = useRecoilState(argumentIdState);
  const [argument, setArgument] = useRecoilState(
    argumentListState(argumentId[argumentId.length - 1])
  );

  const handleKey = (key) => {
    if (key.code === "Tab") {
      console.log(argument);
      setArgumentId((oldIds) => [...oldIds, getId()]);
      setArgument({
        content: argument,
      });
      setValue("");
    }
  };

  return (
    <>
      <EditorContainer>
        <EditorWrap>
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setValue}
            modules={{
              toolbar: false,
              keyboard: {
                bindings: bindings,
              },
            }}
            onKeyDown={handleKey}
          />
        </EditorWrap>
      </EditorContainer>
    </>
  );
};

export default Editor;
