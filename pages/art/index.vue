<template>
    <main class="page">ART!</main>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'art',
    crumbs: () => [
        {
            name: 'home',
            label: 'Главная',
        },
        {
            label: 'Творчество в праве',
            name: 'art',
        },
    ],
});
</script>
