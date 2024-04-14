<template>
    <div>
        <NuxtLayout>
            <main class="page page--home home-page">
                <ViewPageHomeIntroduction class="page__section" />
                <ViewPageHomeAnalytics class="page__section" />
                <ViewPageHomeStudy class="page__section" />
                <ViewPageHomeArt class="page__section" />
                <ViewPageHomeProject class="page__section" />
            </main>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'home'
});
</script>

<style scoped lang="scss">
.home-page {
    padding-bottom: 200px;
}
</style>