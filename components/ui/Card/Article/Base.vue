<template>
    <article class="article-base-card"
        :class="cardClass">
        <NuxtLink :to="{
            name: articleRouteName,
            params: {
                id: card.id
            }
        }"
            class="article-base-card__inner">
            <div class="article-base-card__image">
                <img class="article-base-card__image-pic"
                    :src="card.img"
                    alt="Иллюстрация статьи">
            </div>

            <div class="article-base-card__main">
                <div class="article-base-card__meta">
                    <UiTagList class="article-base-card__tags"
                        v-if="card?.tags?.length"
                        :tags="card.tags" />
                    <time v-if="card?.time"
                        class="article-base-card__time">
                        {{ card.time }}
                    </time>
                </div>
                <h4 class="article-base-card__title">
                    {{ card.title }}
                </h4>
                <p v-if="card?.description"
                    class="article-base-card__description">
                    {{ card.description }}
                </p>
            </div>
        </NuxtLink>
    </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TArticleBaseCardData, TArticleCardType } from './types';

const props = defineProps({
    card: {
        type: Object as PropType<TArticleBaseCardData>,
        required: true
    },
    type: {
        type: String as PropType<TArticleCardType>,
        required: false,
        default: 'columned'
    },
    articleRouteName: {
        type: String,
        required: true
    }
});

const BASE_CLASS = 'article-base-card'

const cardClass = computed(() => `${BASE_CLASS}--${props.type}`);
</script>

<style scoped lang="scss">
.article-base-card {
    height: 100%;

    &--columned & {
        $dekstop-max-height: 402px;

        &__inner {
            display: flex;
            flex-direction: column;

            height: 100%;
            max-height: rem($dekstop-max-height);
        }

        &__image {
            padding-bottom: 75%;
        }

        &__main {
            margin-top: rem($gap-mini);
        }

        &__title {
            @include text-average($font-weight-bold, $line-height-big);
            @include line-clamp(2);

            margin-top: rem($gap-mini);
        }

        &__description {
            @include text-normal;
            @include line-clamp(3);
        }
    }

    &--rowed & {
        $dekstop-height: 280px;

        &__inner {
            display: flex;

            height: rem($dekstop-height);
            padding: rem($gap-small) 0;

            &:hover {
                background-color: $fill-col-primary-hover;
            }
        }

        &__image {
            flex-basis: 36%;
            flex-shrink: 0;
        }

        &__main {
            margin-left: rem($gap-small);
        }

        &__title {
            @include text-average($font-weight-bold, $line-height-big);
            @include line-clamp(2);

            margin-top: rem($gap-mini);
        }

        &__description {
            @include text-normal;
            @include line-clamp(6);
        }
    }

    &--covered & {
        &__inner {
            position: relative;

            display: flex;

            height: 100%;
            padding: rem($gap-small);
        }

        &__image {
            @include absolute-all-null;

            z-index: -1;
        }

        &__main {
            max-width: 50%;
            padding: rem($gap-small);

            background-color: $fill-col-primary;
        }

        &__title {
            @include text-huge;
            @include line-clamp(4);

            margin-top: rem($gap-normal);
        }

        &__description {
            @include text-average;
            @include line-clamp(4);
        }
    }

    &__inner {
        @include base-transition;
    }

    &__image {
        position: relative;

        &-pic {
            @include absolute-all-null;
            @include object-cover-full;
        }
    }

    &__meta {
        @include flex-space-between;
    }

    &__time {
        @include text-mini;
        color: $txt-col-secondary;
    }

    &__title {
        font-family: $font-family-secondary;

        text-transform: uppercase;

    }
}
</style>