<template>
    <main class="page">
        <ViewCommonContentArticlesWithTree
            article-target-route-name="analytics.article.detail"
            :tree="analyticsTree"
        />
    </main>
</template>

<script setup lang="ts">
import { analyticsTree } from '@/utils/TEMP';

definePageMeta({
    name: 'analytics',
    pageTitle: 'Юридическая аналитика',
    crumbs: () => [
        {
            name: 'home',
            label: 'Главная',
        },
        {
            label: 'Юридическая аналитика',
            name: 'analytics',
        },
    ],
});
</script>
