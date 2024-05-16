import type { THeaderLinks } from '@/components/layout/Header/types';

export const headerLinks: THeaderLinks = [
    {
        text: 'Обо мне',
        key: 'about',
        route: { name: 'about' },
    },
    {
        text: 'Аналитика',
        key: 'analytics',
        items: [
            {
                text: 'Поданалитика',
                key: 'subanalytics',
                items: [
                    {
                        text: 'Подподаналитика',
                        key: 'subsubanalytics',
                        route: { name: 'analytics' },
                    },
                ],
            },
        ],
    },
    { text: 'Творчество в праве', key: 'art', route: { name: 'art' } },
    { text: 'Обучение', key: 'study', route: { name: 'study' } },
    { text: 'Проектная работа', key: 'project', route: { name: 'project' } },
];
