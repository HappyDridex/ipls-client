<template>
    <div>
        <NuxtLayout show-back-button>
            <ViewArticleBase />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ name: 'analytics.article.detail' });

const route = useRoute();

const articleId = route.params.id;
console.log('kek')
</script>