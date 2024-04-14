import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@/classes/Editor/Plugins/Heading';
import Blockquote from '@tiptap/extension-blockquote';

import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Typography from '@tiptap/extension-typography';
import HardBreak from '@tiptap/extension-hard-break';
import Link from '@/classes/Editor/Plugins/Link';

import TextStyle from '@tiptap/extension-text-style';
import Color from '@/classes/Editor/Plugins/TextColor';
// import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';

import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';

import History from '@tiptap/extension-history';

import BubbleMenu from '@tiptap/extension-bubble-menu';
// import Image from '@tiptap/extension-image';
import ImageResizable from '@/classes/Editor/Plugins/ImageResizable';

import * as extensionNames from '@/utils/editor/extensions/names';

export const extensionGroups = {
  PLUGIN: 'plugin',
  GROUP: 'group',
  DEPENDENCY: 'dependency',
};

export const extensionConfigs = {
  [extensionNames.DOC]: {
    group: extensionGroups.PLUGIN,
    component: Document,
  },
  [extensionNames.TEXT]: {
    group: extensionGroups.PLUGIN,
    component: Text,
  },
  [extensionNames.PARAGRAPH]: {
    group: extensionGroups.PLUGIN,
    component: Paragraph,
  },
  [extensionNames.HEADING]: {
    group: extensionGroups.PLUGIN,
    component: Heading,
  },
  [extensionNames.BLOCKQUOTE]: {
    group: extensionGroups.PLUGIN,
    component: Blockquote,
  },

  [extensionNames.BOLD]: {
    group: extensionGroups.PLUGIN,
    component: Bold,
  },
  [extensionNames.ITALIC]: {
    group: extensionGroups.PLUGIN,
    component: Italic,
  },
  [extensionNames.UNDERLINE]: {
    group: extensionGroups.PLUGIN,
    component: Underline,
  },
  [extensionNames.STRIKE]: {
    group: extensionGroups.PLUGIN,
    component: Strike,
  },
  [extensionNames.TYPOGRAPHY]: {
    group: extensionGroups.PLUGIN,
    component: Typography,
  },
  [extensionNames.HARD_BREAK]: {
    group: extensionGroups.PLUGIN,
    component: HardBreak,
  },
  [extensionNames.TEXT_COLOR]: {
    group: extensionGroups.PLUGIN,
    component: Color,
  },
  [extensionNames.TEXT_STYLE]: {
    group: extensionGroups.PLUGIN,
    component: TextStyle,
  },
  [extensionNames.TEXT_ALIGNMENT]: {
    group: extensionGroups.PLUGIN,
    component: TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
  },
  [extensionNames.LINK]: {
    group: extensionGroups.PLUGIN,
    component: Link,
  },

  [extensionNames.BULLET_LIST]: {
    group: extensionGroups.PLUGIN,
    component: BulletList,
  },
  [extensionNames.ORDERED_LIST]: {
    group: extensionGroups.PLUGIN,
    component: OrderedList,
  },
  [extensionNames.LIST_ITEM]: {
    group: extensionGroups.PLUGIN,
    component: ListItem,
  },

  [extensionNames.HISTORY]: {
    group: extensionGroups.PLUGIN,
    component: History,
  },

  [extensionNames.BUBBLE_MENU]: {
    group: extensionGroups.PLUGIN,
    component: BubbleMenu,
  },
  [extensionNames.IMAGE_RESIZABLE]: {
    group: extensionGroups.PLUGIN,
    component: ImageResizable.configure({
      allowBase64: true,
    }),
  },
};
