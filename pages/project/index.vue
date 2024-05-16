<template>
    <main class="page">project!</main>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'project',
    crumbs: () => [
        {
            name: 'home',
            label: 'Главная',
        },
        {
            label: 'Проектная работа',
            name: 'project',
        },
    ],
});
</script>
