<template>
    <div class="header-menu">
        <TransitionGroup name="slide-fade">
            <LayoutHeaderMenuSection v-for="(key, idx) in activeKeys"
                class="header-menu__section"
                :active-keys="activeKeys"
                :key="idx"
                :element-index="idx"
                :items="getSectionItems(key)"
                @item:hover="(key) => onItemHover(key, idx)" />
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

import type { THeaderLink, THeaderLinks } from '../types';
import { findElementByKey } from '@/utils/helpers';

const props = defineProps({
    links: {
        type: Array as PropType<THeaderLinks>,
        required: true
    },
});

const activeSectionKey = defineModel<THeaderLink['key']>();
const activeKeys = ref<string[]>([]);

const rootElOffset = 1;

function getSectionItems(key: string) {
    return findElementByKey(props.links, key)?.items ?? [];
}

function onItemHover(key: string, idx: number) {
    const pos = idx + 1;

    activeKeys.value[pos] = key;
    activeKeys.value.length = pos + rootElOffset;
}

watch(activeSectionKey, (newKey) => {
    if (newKey) {
        activeKeys.value = [newKey];
    }
},
    { immediate: true }
);

</script>

<style scoped lang=scss>
.header-menu {
    display: flex;

    width: 100%;

    border-bottom: 1px solid $border-col-secondary;

    background-color: $fill-col-primary;

    &__item {
        @include y-margin-items($gap-tiny);
    }
}
</style>