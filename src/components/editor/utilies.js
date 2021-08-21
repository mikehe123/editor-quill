export function splitContent(text) {
  let content_array = text.split("\n");
  console.log(content_array);
}

export const isIndented = (quill) => {
  const cursorAt = quill.getSelection().index;
  if (
    quill.getContents(cursorAt).ops[0].insert === "\n" &&
    quill.getContents(cursorAt - 1).ops[0].insert === "\n\n"
  ) {
    console.log("is indented");
    return true;
  }
};
