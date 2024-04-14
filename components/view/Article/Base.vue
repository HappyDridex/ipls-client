<template>
    <article class="base-article">
        <ViewArticleHeader class="base-article__header" />
        <ViewArticleFiles class="base-article__files" />
        <ViewArticleContent class="base-article__content" />
    </article>
</template>

<style scoped lang="scss">
.base-article {
    &__files {
        margin-top: rem($gap-medium);
    }

    &__content {
        margin-top: rem($gap-big);
    }
}
</style>