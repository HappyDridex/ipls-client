<template>
    <div>
        <NuxtLayout active-header-tab="analytics"
            show-back-button>
            <main>
                <ViewArticleBase />
            </main>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ name: 'analytics.article.detail' });

const route = useRoute();

const articleId = route.params.id;
</script>