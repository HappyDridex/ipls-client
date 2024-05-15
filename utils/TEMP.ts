export const analyticsTree = [
    {
        value: 'big',
        label: 'Аналитика большая',
        children: [
            { value: 'law2', label: 'Законотворчество2' },
            {
                value: 'law3',
                label: 'Законотворчество3',
                children: [
                    {
                        value: 'law4',
                        label: 'Законотворчество2',
                        children: [
                            { value: 'law6', label: 'Законотворчество2' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        value: 'medium',
        label: 'Аналитика средняя',
        children: [
            { value: 'test2', label: 'Законотворчество2' },
            { value: 'test3', label: 'Законотворчество3' },
        ],
    },
    {
        value: 'small',
        label: 'Аналитика маленькая',
        children: [
            { value: 'test5', label: 'Законотворчество2' },
            { value: 'test6', label: 'Законотворчество3' },
        ],
    },
    {
        value: 'good',
        label: 'Аналитика хорошая',
        children: [
            { value: 'test8', label: 'Законотворчество2' },
            { value: 'test9', label: 'Законотворчество3' },
        ],
    },
];
