<template>
    <button class="button-iconed">
        <UiIcon name="burger-menu" />
    </button>
</template>

<script setup lang="ts">
const ICON_SIZES = ['micro', 'mini', 'small', 'medium', 'big'];

defineProps({
    iconName: {
        type: String,
        required: true,
    },
    iconSize: {
        type: String as PropType<(typeof ICON_SIZES)[number]>,
        required: false,
        default: 'small',
    },
});
</script>
