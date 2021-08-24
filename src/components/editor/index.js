import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.bubble.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  argumentIdState,
  argumentListState,
  tabState,
} from "../../state/atoms";
import { EditorContainer, EditorWrap } from "./EditorElements";
import bindings from "./keybindings";
import { splitContent } from "./utilies";
const theme = "bubble";
const modules = {
  toolbar: false,
  keyboard: {
    bindings: bindings,
  },
};

let contentBlock;
let cursorAt;
const Editor = ({ itemKey }) => {
  const { quill, quillRef } = useQuill({ theme, modules });
  const tabStateValue = useRecoilValue(tabState);
  const [argument, setArgument] = useRecoilState(argumentListState(itemKey));
  const [ArgId, setArgId] = useRecoilState(argumentIdState);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log(quill.getContents());

        // console.log(quill.getLine(cursorAt)[0].children.head.text);
        console.log(quill.getLine(cursorAt));
        // console.log(quill.getLeaf(cursorAt));
        // console.log(quill.getLines()[0].constructor.name);
        cursorAt = quill.getSelection().index;

        contentBlock = quill.getLines(cursorAt);

        console.log(splitContent(quill.getText())); // Get text only

        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  useEffect(() => {
    if (quill) {
      setArgId((oldIds) => [...oldIds, oldIds[oldIds.length - 1] + 1]);

      setArgument({
        // contentBlock: contentBlock,
        cursorAt: cursorAt,
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

// function idExist(allArgIds, currentLine, allLines){

// }

// function newArgId(oldArgIds, currentLine, allLines){

//   let lastIdString = oldArgIds[oldArgIds.length - 1]
//   let lastIdNumber = lastIdString.split(">")

// }
