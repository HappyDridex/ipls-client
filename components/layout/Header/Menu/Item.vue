<template>
    <component
        :is="wrapperTag"
        class="header-menu-item"
        :class="{
            'header-menu-item--active': isActive,
        }"
        v-bind="linkAttrs"
    >
        <p
            class="header-menu-item__text"
            :class="{
                'header-menu-item__text--highlighed': isRoot,
            }"
        >
            {{ item.text }}
        </p>
        <UiIcon
            v-if="hasNestedItems"
            class="header-menu-item__icon"
            name="chevron-right"
        />
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { THeaderLink } from '../types'

const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps({
    item: {
        type: Object as PropType<THeaderLink>,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: false,
    },
    isRoot: {
        type: Boolean,
        required: false,
    },
})

const hasNestedItems = computed(() => props.item?.items)

const wrapperTag = hasNestedItems.value ? 'div' : NuxtLink

const linkAttrs = hasNestedItems.value
    ? {}
    : { to: { name: props.item.pathName } }
</script>

<style scoped lang="scss">
.header-menu-item {
    $height-desktop: 40px;

    position: relative;

    display: inline-flex;
    align-items: center;

    width: 100%;
    height: rem($height-desktop);
    padding: rem($gap-tiny) 0;

    &--active::after {
        position: absolute;
        bottom: 0;

        width: 100%;

        content: '';

        border-bottom: 1px solid $border-col-primary;
    }

    &__text {
        @include text-normal;

        &--highlighed {
            font-weight: $font-weight-semibold;
        }
    }

    &__icon {
        margin-left: rem($gap-tiny);

        color: $icon-col-primary;
    }
}
</style>
