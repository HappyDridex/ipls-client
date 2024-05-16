<template>
    <main class="page">study!</main>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'study',
    crumbs: () => [
        {
            name: 'home',
            label: 'Главная',
        },
        {
            label: 'Обучение',
            name: 'study',
        },
    ],
});
</script>
