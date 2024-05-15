import type { THeaderLinks } from '@/components/layout/Header/types';

export const headerLinks: THeaderLinks = [
    {
        text: 'Обо мне',
        key: 'about',
        pathName: 'about',
    },
    {
        text: 'Аналитика',
        key: 'analytics',
        items: [
            {
                text: 'Поданалитика',
                key: 'point11',
                items: [
                    {
                        text: 'Подподаналитика',
                        key: 'analytics2',
                        pathName: 'analytics',
                    },
                ],
            },
        ],
    },
    { text: 'Творчество в праве', key: 'art' },
    { text: 'Обучение', key: 'study' },
    { text: 'Проектная работа', key: 'project' },
];
