<template>
    <li class="list-item"
        :class="`list-item--${pos}`">
        <slot />
    </li>
</template>

<script setup
    lang="ts">
    import type { PropType } from 'vue';

    const props = defineProps({
        pos: {
            type: Number,
            required: true
        },
        layoutChunks: {
            type: Array as PropType<TLayoutChunk[]>,
            required: true
        }
    });

    type TLayoutChunk = number[];

    function findColPositions(pos: number, layout: TLayoutChunk[]) {
        let colStart = 1;
        let colEnd = 1;

        layout.forEach((chunk) => {
            const startIdx = chunk.findIndex(el => el === pos);
            const endIdx = chunk.findLastIndex(el => el === pos);

            if (startIdx !== -1) {
                colStart = Math.max(colStart, startIdx + 1);
            }

            if (endIdx !== -1) {
                colEnd = Math.max(colEnd, endIdx + 1);
            }
        });

        return { colStart, colEnd: colEnd + 1 }
    }

    function findRowPositions(pos: number, layout: TLayoutChunk[]) {
        let rowStart = 1;
        let rowEnd = 1;

        for (let i = 0; i < layout.length; i++) {
            const chunk = layout[i];
            if (chunk.includes(pos)) {
                rowStart = i + 1;
                break
            }
        }

        for (let i = layout.length; i >= 0; i--) {
            const chunk = layout[i - 1];
            if (chunk.includes(pos)) {
                rowEnd = i + 1;
                break
            }
        }

        return { rowStart, rowEnd }
    }

    const { colStart, colEnd } = findColPositions(props.pos, props.layoutChunks);
    const { rowStart, rowEnd } = findRowPositions(props.pos, props.layoutChunks)

</script>

<style scoped
    lang="scss">
    .list-item {
        $col-start: v-bind(colStart);
        $col-end: v-bind(colEnd);
        $row-start: v-bind(rowStart);
        $row-end: v-bind(rowEnd);

        grid-column-start: #{$col-start};
        grid-column-end: #{$col-end};

        grid-row-start: #{$row-start};
        grid-row-end: #{$row-end};
    }

</style>