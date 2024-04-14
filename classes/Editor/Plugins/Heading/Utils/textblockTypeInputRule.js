import { InputRule } from '@tiptap/core';
import { callOrReturn } from '@tiptap/core';

export function textblockTypeInputRule({ find, type, getAttributes }) {
    return new InputRule({
        find: find,
        handler: ({ state, range, match, chain }) => {
            const $start = state.doc.resolve(range.from);
            const attributes = callOrReturn(getAttributes, undefined, match) || {};

            if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), type)) {
                return null;
            }

            state.tr.delete(range.from, range.to);
            chain().setHeading(attributes).setMeta('setHeading', true).run();
        },
    });
}
