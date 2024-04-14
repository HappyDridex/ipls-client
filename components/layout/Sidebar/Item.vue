<template>
    <component :is="component"
        v-bind="attrs"
        v-on="attrs?.events ?? {}"
        class="sidebar-link"
        :class="{ [ACTIVE_CLASS]: isActive }">
        <UiIcon class="sidebar-link__icon"
            :name="iconName" />
        <span class="sidebar-link__text">{{ text }}</span>
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TSidebarLink } from './types';

const NuxtLink = resolveComponent('NuxtLink');

const props = defineProps({
    link: {
        type: Object as PropType<TSidebarLink>,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false,
        default: false
    }
});

const { text, routeName, iconName, callback } = props.link;

const ACTIVE_CLASS = 'sidebar-link--active';

const component = computed(() => callback ? 'button' : NuxtLink);

const attrs = computed(() => {
    if (component.value === 'button') {
        return {
            events: {
                click: callback
            }
        }
    } else {
        return {
            to: { name: routeName },
        }
    }
});

</script>

<style scoped lang="scss">
.sidebar-link {
    @include base-transition;

    display: flex;
    align-items: center;

    width: 100%;
    padding: rem($gap-tiny);

    border-radius: rem($border-radius-small);

    &:hover {
        background-color: $btn-col-secondary-default;
    }

    &--active {
        background-color: $btn-col-secondary-default;
    }

    &--active & {
        &__text {
            font-weight: $font-weight-semibold;
        }

        &__text,
        &__icon {
            color: $btn-col-primary-default;
        }
    }

    &__icon {
        color: $icon-col-secondary;
    }

    &__text {
        @include text-normal;
        @include text-ellipsis;

        margin-left: rem($gap-tiny);
    }
}
</style>