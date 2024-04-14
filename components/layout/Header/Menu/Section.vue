<template>
    <Transition name="slide-fade">
        <ul v-if="items?.length"
            class="header-menu-section">
            <li class="header-menu-section__item"
                v-for="item in items"
                :key="item.key"
                @mouseover="emit('item:hover', item.key)">
                <LayoutHeaderMenuItem :item="item"
                    :is-active="hasActiveKey(item)"
                    :is-root="elementIndex === 0" />
            </li>
        </ul>
    </Transition>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { THeaderLink } from '../types';

const emit = defineEmits(['item:hover'])

const props = defineProps({
    items: {
        type: Array as PropType<THeaderLink['items']>,
        required: true
    },
    activeKeys: {
        type: Array as PropType<string[]>,
        required: true
    },
    elementIndex: {
        type: Number,
        required: false
    }
});

function hasActiveKey(item: THeaderLink) {
    return props.activeKeys?.includes(item.key);
}

</script>

<style scoped lang="scss">
.header-menu-section {
    @include x-margin-items($gap-medium);

    padding: rem($gap-mini) 0 rem($gap-medium);

    &__item {
        @include y-margin-items($gap-tiny);
    }
}
</style>