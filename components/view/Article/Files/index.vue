<template>
    <ul class="article-files">
        <li class="article-files__item">
            <UiCardFileBase />
        </li>
        <li class="article-files__item">
            <UiCardFileBase />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.article-files {
    &__item {
        @include y-margin-items($gap-small);
    }
}
</style>