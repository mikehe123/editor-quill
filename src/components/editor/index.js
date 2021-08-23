import React, { useEffect } from "react";
import ReactQuill, { quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  argumentListState,
  argumentIdState,
  tabState,
} from "../../state/atoms";
import useKey from "../KeyPress";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings, { content } from "./keybindings";

const Editor = ({ itemKey }) => {
  // const tabPresssed = useKey("tab")
  const [value, setValue] = React.useState("");
  const tabStateValue = useRecoilValue(tabState);
  const [argument, setArgument] = useRecoilState(argumentListState(itemKey));

  const handleChange = (e) => {
    setValue(e);
  };

  useEffect(() => {
    setArgument({
      content: value,
    });
    setValue("");
  }, [tabStateValue]);
  return (
    <>
      <EditorContainer>
        <EditorWrap>
          <ReactQuill
            preserveWhitespace={false}
            onChangeSelection={(selection) => console.log(selection)}
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
