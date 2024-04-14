<template>
    <aside class="sidebar">
        <ul class="sidebar__list">
            <li class="sidebar__item"
                v-for="link in links"
                :key="link.text">
                <LayoutSidebarItem :link="link"
                    :is-active="activeLinkName === link.name" />
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

import type { TSidebarLink } from './types';

defineProps({
    links: {
        type: Array as PropType<TSidebarLink[]>,
        required: true
    },
    activeLinkName: {
        type: String,
        required: false
    }
});

</script>

<style scoped lang="scss">
.sidebar {
    padding: rem($gap-normal) rem($gap-small);

    &__list {}

    &__item {
        @include y-margin-items($gap-small);
    }
}
</style>