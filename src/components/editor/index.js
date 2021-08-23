import React from "react";
import ReactQuill, { quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { argumentListState, argumentIdState } from "../../state/atoms";
import useKey from "../KeyPress";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings, { content } from "./keybindings";


const Editor = ({itemKey}) => {
  // const tabPresssed = useKey("tab")
  // const [value, setValue] = React.useState("");
  // const argumentId = useRecoilValue(argumentIdState);
  const [argument, setArgument] = useRecoilState(
    argumentListState(itemKey)
  );
  console.log("editror id: "+argument.content)
    const handleChange = (e) =>{
      setArgument({
        content:e
      })
    }
  return (
    <>
      <EditorContainer>
        <EditorWrap>
          <ReactQuill
            theme="bubble"
            value={argument.content}
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
