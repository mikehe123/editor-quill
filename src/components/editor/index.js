import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { argumentListState, tabState } from "../../state/atoms";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings from "./keybindings";

const theme = "bubble";
const modules = {
  toolbar: false,
  keyboard: {
    bindings: bindings,
  },
};
const Editor = ({ itemKey }) => {
  const { quill, quillRef } = useQuill({ theme, modules });
  const tabStateValue = useRecoilValue(tabState);
  const [argument, setArgument] = useRecoilState(argumentListState(itemKey));

  useEffect(() => {
    // if (quill) {
    //   quill.on("text-change", (delta, oldDelta, source) => {
    //     console.log("Text change!");
    //     console.log(quill.getText()); // Get text only
    //     console.log(quill.getContents()); // Get delta contents
    //     console.log(quill.root.innerHTML); // Get innerHTML using quill
    //     console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
    //   });
    // }
  }, [quill]);

  useEffect(() => {
    if (quill) {
      console.log("==========VVV=========");
      console.log(quill.getContents());
      setArgument({
        content: quill.getText(),
      });
      quill.setContents("");
    }
  }, [tabStateValue]);
  return (
    <>
      <EditorContainer>
        <EditorWrap>
          <div ref={quillRef} />
        </EditorWrap>
      </EditorContainer>
    </>
  );
};

export default Editor;
