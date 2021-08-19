import React from "react";
import ReactQuill, { quillRef, quill } from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { EditorContainer, EditorWrap } from "./EditorElements";
import { splitContent } from "./utilies";
import Delta from "quill-delta";

const Editor = () => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <EditorContainer>
        <EditorWrap>
          <ReactQuill
            theme="bubble"
            value={value}
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

// class Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.quillRef = null; // Quill instance
//     this.reactQuillRef = null; // ReactQuill component
//   }

//   componentDidMount() {
//     this.attachQuillRefs();
//   }

//   componentDidUpdate() {
//     this.attachQuillRefs();
//   }

//   attachQuillRefs = () => {
//     if (typeof this.reactQuillRef.getEditor !== "function") return;
//     this.quillRef = this.reactQuillRef.getEditor();
//   };

//   insertText = () => {
//     var range = this.quillRef.getSelection();
//     let position = range ? range.index : 0;
//     this.quillRef.insertText(position, "Hello, World! ");
//   };

//   handleContent = (e) => {
//     // console.log(this.quillRef.getText());
//     // let index = this.quillRef.getSelection().index;
//     // let length = this.quillRef.getLength();
//     // console.log("index: ", index);
//     // console.log(this.quillRef.getLeaf(index));
//     // console.log(this.quillRef.getLine(index));
//     // splitContent(this.quillRef.getText());
//     console.log(this.quillRef.keyboard.bindings);
//   };

//   render() {
//     return (
//       <>
//         <EditorContainer>
//           <EditorWrap>
//             <ReactQuill
//               theme="bubble"
//               ref={(el) => {
//                 this.reactQuillRef = el;
//               }}
//               modules={{
//                 toolbar: false,
//                 keyboard: {
//                   bindings: bindings,
//                 },
//               }}
//               // onKeyUp={this.handleContent}
//             />
//           </EditorWrap>
//         </EditorContainer>
//       </>
//     );
//   }
// }
// export default Editor;

var bindings = {
  // This will overwrite the default binding also named 'tab'
  indent: {
    key: 9,
    format: ["list"],
    handler: function storeEditor(range, context) {
      if (context.collapsed && context.offset !== 0) return true;
      this.quill.format("indent", "+1", "user");
      // console.log(this.quill.editor);
    },
  },

  tab: {
    key: 9,
    handler: function storeEditor(range) {
      this.quill.history.cutoff();
      var delta = new Delta()
        .retain(range.index)
        .delete(range.length)
        .insert("\t");
      this.quill.updateContents(delta, "user");
      this.quill.history.cutoff();
      this.quill.setSelection(range.index + 1, "silent");
    },
  },
};

const hello = () => {
  console.log("function that say hello!");
};
