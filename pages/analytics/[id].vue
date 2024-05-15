<template>
    <main>
        <ViewArticleBase />
    </main>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'analytics.article.detail',
    backButton: {
        text: 'Назад к боксу',
        fallbackRoute: { name: 'analytics' },
    },
})

const route = useRoute()

const articleId = route.params.id
</script>
