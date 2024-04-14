import Heading from '@tiptap/extension-heading';
import { textblockTypeInputRule } from './Utils/textblockTypeInputRule';

export default Heading.extend({
  addInputRules() {
    return this.options.levels.map((level) => {
      return textblockTypeInputRule({
        find: new RegExp(`^(#{1,${level}})\\s$`),
        type: this.type,
        editor: this.editor,
        getAttributes: {
          level,
        },
      });
    });
  },
}).configure({
  levels: [1, 2, 3],
});
