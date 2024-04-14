import type { THeaderLinks } from '@/components/layout/Header/types';

export const headerLinks: THeaderLinks = [
  {
    text: 'Обо мне',
    key: 'about',
    items: [
      {
        text: 'Обо мне вложенный',
        key: 'about1',
        pathName: 'about',
      },
    ],
  },
  {
    text: 'Аналитика',
    key: 'analytics1',
    items: [
      {
        text: 'point11',
        key: 'point11',
        items: [{ text: 'Аналитика деталка', key: 'analytics', pathName: 'analytics' }],
      },
    ],
  },
  { text: 'Творчество в праве', key: 'art' },
  { text: 'Обучение', key: 'study' },
  { text: 'Проектная работа', key: 'project' },
];
