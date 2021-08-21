import { splitContent, isIndented } from "./utilies";
import Delta from "quill-delta";
import { argumentListState } from "../../state/atoms";
import { useAddArgument } from "../../state/actions";

export let content;
const bindings = {
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
      if (isIndented(this.quill)) {
        this.quill.history.cutoff();
        var delta = new Delta()
          .retain(range.index)
          .delete(range.length)
          .insert("\t");
        this.quill.updateContents(delta, "user");
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, "silent");
      } else {
        content = this.quill.getText();
        // const contentArr = splitContent(currContent);
        // // useAddArgument(contentArr);
        // const contentHead = contentArr[0];
        // console.log(argumentListState);
        // console.log(this.quill.keyboard);
      }
    },
  },

  //   enter: {
  //     key: 13,
  //     handler: function handleEnter(range, context) {
  //       console.log(this.quill);
  //       //   var _this3 = this;
  //       //   if (range.length > 0) {
  //       //     this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  //       //   }
  //       //   var lineFormats = Object.keys(context.format).reduce(function (
  //       //     lineFormats,
  //       //     format
  //       //   ) {
  //       //     if (
  //       //       _parchment2.default.query(format, _parchment2.default.Scope.BLOCK) &&
  //       //       !Array.isArray(context.format[format])
  //       //     ) {
  //       //       lineFormats[format] = context.format[format];
  //       //     }
  //       //     return lineFormats;
  //       //   },
  //       //   {});
  //       //   this.quill.insertText(range.index, "\n", lineFormats, "user");
  //       //   // Earlier scroll.deleteAt might have messed up our selection,
  //       //   // so insertText's built in selection preservation is not reliable
  //       //   this.quill.setSelection(range.index + 1, "silent");
  //       //   this.quill.focus();
  //       //   Object.keys(context.format).forEach(function (name) {
  //       //     if (lineFormats[name] != null) return;
  //       //     if (Array.isArray(context.format[name])) return;
  //       //     if (name === "link") return;
  //       //     _this3.quill.format(name, context.format[name], "user");
  //       //   });
  //     },
  //   },
};

export default bindings;
