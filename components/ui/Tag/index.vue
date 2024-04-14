<template>
    <div class="tag">
        {{ text }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">
.tag {
    @include text-base;

    padding: rem($gap-minimal) rem($gap-tiny);

    border-radius: rem($border-radius-small);
    border: 1px solid $border-col-secondary;

    text-transform: uppercase;
}
</style>