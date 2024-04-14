<template>
    <LayoutSectionHome title="Новое в аналитике"
        cards-layout="1,1,1,1,2,3,4,5"
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
    img: '/images/temp/article1.jpg',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
    type: 'covered'
};
const card2: TArticleBaseCard = {
    id: 2,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article2.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};
const card3: TArticleBaseCard = {
    id: 3,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article3.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};
const card4: TArticleBaseCard = {
    id: 4,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article4.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};
const card5: TArticleBaseCard = {
    id: 5,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article5.png',
    description: 'Collaboration can make our teams stronger, and our individual designs better',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
};


const cards: TArticleBaseCard[] = [card1, card2, card3, card4, card5]
</script>