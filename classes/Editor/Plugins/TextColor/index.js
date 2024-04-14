import { Mark } from '@tiptap/core';
import { rgbToHex } from '@/utils/colors';
import { commandActions } from '@/utils/editor/dictionary/commands';
import { markPriority } from '@/utils/editor/dictionary/marks';
import { getColors, getColorByCode, hasColor } from '@/utils/editor/dictionary/colors';

export default Mark.create({
  name: 'text_color',
  group: 'color',
  inclusive: true,
  priority: markPriority.medium,

  addOptions() {
    return {
      colorPalette: getColors(),
      defaultColor: 'shark',
    };
  },

  addAttributes() {
    return {
      color: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        style: 'color',
        getAttrs: (element) => {
          let hexColor;
          const isRgb = element.match(/^rgb/i);
          const isHex = element[0] === '#';

          if (isRgb) {
            hexColor = rgbToHex(element);
          } else if (isHex) {
            hexColor = element.toUpperCase();
            const isColorExists =
              this.options.colorPalette.findIndex((color) => color.color === hexColor) !== -1;

            return hexColor && isColorExists ? { color: hexColor } : false;
          }
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    let color;
    let colorCode;

    const isHex = HTMLAttributes.color?.[0] === '#';

    if (isHex) {
      color = HTMLAttributes.color;
      colorCode = null;
    } else {
      colorCode = HTMLAttributes.color;

      color = hasColor(HTMLAttributes.color)
        ? getColorByCode(HTMLAttributes.color)
        : getColorByCode(this.options.defaultColor);
    }

    return [
      'span',
      {
        style: `color: ${color}`,
        color: colorCode,
      },
    ];
  },

  addCommands() {
    return {
      [commandActions.APPLY_COLOR]:
        (attrs) =>
        ({ commands }) => {
          if (!attrs || attrs.color === this.options.defaultColor) {
            return commands.unsetMark(this.name);
          }

          commands.unsetMark(this.name);
          return commands.setMark(this.name, attrs);
        },
    };
  },
});
