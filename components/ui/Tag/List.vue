<template>
    <ul class="tags-list">
        <li v-for="tag in tags"
            :key="tag.text"
            class="tags-list__item">
            <UiTag :text="tag.text" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TTags } from './types';

defineProps({
    tags: {
        type: Array as PropType<TTags>
    }
})
</script>

<style scoped lang="scss">
.tags-list {
    display: flex;
    align-items: center;

    &__item {
        @include x-margin-items($gap-tiny);
    }
}
</style>