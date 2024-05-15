<template>
    <component
        :is="tagName"
        class="button"
        v-bind="attrs"
        :class="buttonClasses"
        :disabled="isDisabled"
    >
        <span v-if="text && !isIconed" class="button__text" itemprop="name">
            {{ text }}
        </span>
        <UiIcon
            v-if="iconName"
            class="button__icon"
            :class="{ 'button__icon--margin': !isIconed }"
            :name="iconName"
            :size="iconSize"
        />
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
const NuxtLink = resolveComponent('NuxtLink')

const THEMES = ['transparent-primary']
const SIZE = ['medium', 'big']
const ICON_SIZES = ['micro', 'mini', 'small', 'medium', 'big']

const props = defineProps({
    text: {
        type: String,
        required: false,
        default: null,
    },
    full: {
        type: Boolean,
        required: false,
        default: false,
    },
    theme: {
        type: String as PropType<(typeof THEMES)[number]>,
        required: false,
        default: 'transparent-primary',
    },
    size: {
        type: String as PropType<(typeof SIZE)[number]>,
        required: false,
        default: 'medium',
    },
    iconName: {
        type: String,
        required: false,
        default: null,
    },
    iconSize: {
        type: String as PropType<(typeof ICON_SIZES)[number]>,
        required: false,
        default: 'small',
    },
    isDisabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false,
    },
    isReversed: {
        type: Boolean,
        required: false,
        default: false,
    },
    isText: {
        type: Boolean,
        required: false,
        default: false,
    },
    isLink: {
        type: Boolean,
        required: false,
        default: false,
    },
})

defineOptions({
    inheritAttrs: false,
})

const attrs = useAttrs()

const BASE_CLASS = 'button'

const isIconed = computed(() => props.iconName && !props.text)

const buttonClasses = computed(() => {
    const classes = []

    classes.push(`${BASE_CLASS}--theme-${props.theme}`)
    classes.push(`${BASE_CLASS}--size-${props.size}`)

    if (props.isActive) {
        classes.push(`${BASE_CLASS}--active`)
    }

    if (props.full) {
        classes.push('button--full')
    }

    if (props.isReversed) {
        classes.push('button--reversed')
    }

    if (isIconed.value) {
        classes.push('button--iconed')
    } else if (props.isText) {
        classes.push('button--is-text')
    }

    return classes
})

const tagName = computed(() => (props.isLink ? NuxtLink : 'button'))
</script>

<style lang="scss" scoped>
.button {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;

    transition: all $transition-duration $transition-function;

    &--size-medium {
        $height-desktop: 36px;

        @include text-base;

        height: rem($height-desktop);
        padding: 0 rem($gap-tiny);

        border-radius: rem($border-radius-small);
    }

    &--full {
        width: 100%;
    }

    &--theme-transparent-primary {
        color: $txt-col-primary;
        border: 1px solid $border-col-primary;
        background-color: transparent;

        &:hover,
        &:active {
            color: $txt-col-primary-invert;
            background-color: $fill-col-primary-invert;
        }

        &:disabled {
        }
    }

    &--iconed {
        @include flex-all-center;
    }

    &--iconed#{&}--size-medium {
        padding: rem($gap-micro);

        border-radius: rem($border-radius-small);
    }

    &--iconed#{&}--size-big {
        padding: rem($gap-tiny);

        border-radius: rem($border-radius-small);
    }

    &--circled {
        border-radius: 50%;
    }

    &--sharp {
        border-radius: 0;
    }

    &--reversed {
        flex-direction: row-reverse;
    }

    &--is-text {
        &,
        &:hover,
        &:focus {
            border: none;
            background-color: transparent;
        }
    }

    &__text {
        display: inline-block;
        flex-grow: 1;

        text-align: center;
        white-space: nowrap;
    }

    &__icon {
        &--margin {
            margin-left: rem($gap-micro);
        }
    }
}
</style>
