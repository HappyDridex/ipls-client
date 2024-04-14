<template>
    <component :is="tag"
        class="layout-section-home">
        <header class="layout-section-home__header">
            <h1 class="layout-section-home__title">
                {{ title }}
            </h1>
            <span class="layout-section-home__separator"></span>
            <UiButton v-if="detailLink"
                class="layout-section-home__detail-button"
                :text="detailLink.text"
                icon-name="arrow-up-right"
                is-link
                :to="detailLink.to" />
        </header>
        <div class="layout-section-home__content">
            <slot>
                <UiGrid v-if="cards"
                    :items="cards"
                    :layout="cardsLayout"
                    :columns="columns"
                    :gap="gap">
                    <template #default="{ item }">
                        <component :is="cardComponent"
                            :card="item"
                            :type="item.type" />
                    </template>
                </UiGrid>
            </slot>
        </div>
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TArticleBaseCard } from '@/components/ui/Card/Article/types';

const UiCardArticleBase = resolveComponent('UiCardArticleBase');
const UiCardCategoryBase = resolveComponent('UiCardCategoryBase');

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: false,
        default: 'section'
    },
    detailLink: {
        type: Object as PropType<TDetailLink>,
        required: false,
        default: null
    },
    cards: {
        type: Array as PropType<TArticleBaseCard[]>,
        required: false
    },
    cardType: {
        type: String as PropType<'article' | 'category'>,
        required: false,
        default: 'article'
    },
    cardsLayout: {
        type: String,
        required: false,
        default: '1,1,1'
    },
    columns: {
        type: Number,
        required: false,
        default: 3
    },
    gap: {
        type: Number,
        required: false
    },
});

type TDetailLink = {
    text: string,
    to: Partial<{ name: string, path: string, params: any, query: any }>
};

const cardComponent = computed(() => (
    props.cardType === 'article'
        ? UiCardArticleBase
        : UiCardCategoryBase))

</script>

<style scoped lang="scss">
.layout-section-home {
    width: 100%;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end
    }

    &__title {
        @include text-xl($font-weight-medium, $line-height-small);

        text-transform: uppercase;
    }

    &__separator {
        display: inline-block;
        flex-grow: 1;

        margin: 0 rem($gap-small);

        border-bottom: rem(1px) solid $border-col-primary;
    }


    &__content {
        margin-top: rem($gap-big);
    }

}
</style>