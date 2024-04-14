<template>
    <div class="category-card-base">
        <div class="category-card-base__image">
            <img class="category-card-base__image-pic"
                :src="card.img"
                alt="Иллюстрация карточки">
        </div>
        <div class="category-card-base__main">
            <h4 class="category-card-base__title">
                {{ card.title }}
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    card: {
        type: Object,
        required: true
    }
});

</script>

<style scoped lang="scss">
.category-card-base {
    $height-desktop: 460px;

    height: rem($height-desktop);

    display: flex;
    flex-direction: column;

    &__image {
        position: relative;

        flex-grow: 1;

        max-height: 80%;

        &-pic {
            @include absolute-all-null;
            @include object-cover-full;
        }
    }

    &__main {
        margin-top: rem($gap-small);
    }

    &__title {
        @include text-huge;

        font-family: $font-family-secondary;

        text-transform: uppercase;
    }
}
</style>