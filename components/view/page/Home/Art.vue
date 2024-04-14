<template>
    <LayoutSectionHome title="Творчество в праве"
        cards-layout="1,2,3,4"
        :cards="cards"
        :columns="4"
        :gap="20"
        :detail-link="{ text: 'смотреть все', to: { path: '/' } }" />
</template>

<script setup lang="ts">
import type { TArticleBaseCard } from '@/components/ui/Card/Article/types';

const card1: TArticleBaseCard = {
    id: 1,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article9.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};
const card2: TArticleBaseCard = {
    id: 2,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article10.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};
const card3: TArticleBaseCard = {
    id: 3,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article11.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};
const card4: TArticleBaseCard = {
    id: 4,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article12.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};

const cards: any[] = [card1, card2, card3, card4]
</script>