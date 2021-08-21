import React from "react";
import ReactQuill, { quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRecoilState } from "recoil";
import { argumentListState } from "../../state/atoms";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings, { content } from "./keybindings";

let id = 0;
const Editor = () => {
  const [value, setValue] = React.useState("");
  const [argument, setArgument] = useRecoilState(argumentListState(id));

  const handleKey = (key) => {
    if (key.code === "Tab") {
      // console.log(Editor.getContents());
      console.log(argument);
      setArgument(content);
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
