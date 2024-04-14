<template>
    <LayoutSectionHome title="Обучение"
        cards-layout="1,2,3"
        card-type="category"
        :cards="cards"
        :columns="3"
        :gap="20" />
</template>

<script setup lang="ts">

const card1 = {
    id: 1,
    title: 'Анонсы',
    img: '/images/temp/article6.png',
};
const card2 = {
    id: 2,
    title: 'Школа правовой экономики',
    img: '/images/temp/article7.png',
};
const card3 = {
    id: 3,
    title: 'Аудиокниги',
    img: '/images/temp/article8.png',
};


const cards: any[] = [card1, card2, card3]
</script>