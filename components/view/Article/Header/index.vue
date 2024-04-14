<template>
    <header class="article-header">
        <h1 class="article-header__title">Заголовок статьи</h1>
        <div class="article-header__image">
            <img class="article-header__image-pic"
                src="/images/temp/article10.png"
                alt="Обложка статьи">
        </div>
    </header>
</template>

<style scoped lang="scss">
.article-header {
    &__title {
        @include text-xl;

        text-transform: uppercase;
    }

    &__image {
        $height-desktop: 400px;

        width: 100%;
        height: rem($height-desktop);
        margin-top: rem($gap-medium);

        &-pic {
            @include object-cover-full;
        }
    }
}
</style>