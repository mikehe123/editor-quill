import React, { useEffect } from "react";
import ReactQuill, { quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { argumentListState, argumentIdState } from "../../state/atoms";
import useKey from "../KeyPress";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings, { content } from "./keybindings";

const Editor = ({ itemKey, tabPressed }) => {
  // const tabPresssed = useKey("tab")
  const [value, setValue] = React.useState("");
  const [argument, setArgument] = useRecoilState(argumentListState(itemKey));

  const handleChange = (e) => {
    setValue(e);
  };

  useEffect(() => {
    setArgument({
      content: value,
    });
    setValue("");
  }, [tabPressed]);
  return (
    <>
      <EditorContainer>
        <EditorWrap>
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={handleChange}
            modules={{
              toolbar: false,
              keyboard: {
                bindings: bindings,
              },
            }}
          />
        </EditorWrap>
      </EditorContainer>
    </>
  );
};

export default Editor;
