<template>
    <ClientOnly>
        <ElSelect v-model="model"
            v-bind="attrs">
            <ElOption v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <slot />
            </ElOption>
        </ElSelect>
    </ClientOnly>
</template>

<script setup
    lang="ts">
    import type { PropType } from 'vue';

    defineProps({
        options: {
            type: Array as PropType<TSelectOptions>
        }
    })

    type TSelectOption = { label: string, value: string };

    type TSelectOptions = TSelectOption[]

    const attrs = useAttrs();

    const model = defineModel<TSelectOptions | string>();

</script>