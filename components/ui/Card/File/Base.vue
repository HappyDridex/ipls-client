<template>
    <div class="file-card-base">
        <div class="file-card-base__cover">
            <img class="file-card-base__cover-pic"
                src="/images/temp/article10.png"
                alt="Картинка файла">
        </div>
        <div class="file-card-base__info">
            <p class="file-card-base__name">Название файла</p>
            <span class="file-card-base__size">124kb</span>
        </div>
        <div class="file-card-base__actions">
            <UiButton text="СКАЧАТЬ"
                icon-name="upload" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.file-card-base {
    @include flex-space-between;

    &__cover {
        $size-desktop: 112px;

        width: rem($size-desktop);
        height: rem($size-desktop);

        &-pic {
            @include object-cover-full;
        }
    }

    &__info {
        flex-grow: 1;

        margin: 0 rem($gap-small);
    }

    &__name {
        @include text-normal($font-weight-semibold);
    }

    &__size {
        @include text-normal;

        color: $txt-col-secondary;
    }
}
</style>