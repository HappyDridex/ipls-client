<template>
    <ul class="list">
        <UiGridItem class="list__item"
            v-for="(item, idx) in items"
            :key="item?.id || idx"
            :pos="idx + 1"
            :layout-chunks="layoutChunks">
            <slot :item="item" />
        </UiGridItem>
    </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import _ from 'lodash';

const props = defineProps({
    items: {
        type: Array as PropType<any[]>,
        required: true,
    },
    layout: {
        type: String,
        required: false,
        default: null
    },
    columns: {
        type: Number,
        required: false,
        default: 1
    },
    row: {
        type: Boolean,
        required: false
    },
    gap: {
        type: Number,
        required: false,
        default: 32
    }
});

const fallbackLayout: string = props.items.map((_, i) => i + 1).join();

const layout: string = props.layout ?? fallbackLayout;

const layoutChunks: number[][] = _.chunk(layout.split(',').map(Number), props.row ? 1 : props.columns);

const layoutRows: number = layoutChunks.length;

const gapSizePx: string = props.gap + 'px';

</script>

<style scoped lang="scss">
.list {
    $columns: v-bind(columns);
    $rows: v-bind(layoutRows);

    $gap-desktop: v-bind(gapSizePx);

    display: grid;
    grid-template-columns: repeat($columns, 1fr);
    grid-template-rows: repeat($rows, 1fr);
    gap: $gap-desktop;

    width: 100%;
}
</style>
