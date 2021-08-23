import { splitContent } from "./utilies";

export let content;
const bindings = {
  // This will overwrite the default binding also named 'tab'
  indent: {
    key: 9,
    format: ["list"],
    handler: function storeEditor(range, context) {
      content = splitContent(this.quill.getText());
    },
  },

  tab: {
    key: 9,
    handler: function storeEditor(range) {
      content = splitContent(this.quill.getText());
    },
  },
};

export default bindings;
