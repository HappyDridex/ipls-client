<template>
    <ElTree :data="data"
        :props="defaultProps"
        ref="baseTreeRef"
        v-bind="attrs"
        @node-click="handleNodeClick">
        <template v-if="hasDefaultSlot"
            #default="{ data }">
            <slot :data="data" />
        </template>
    </ElTree>
</template>

<script lang="ts"
    setup>
    import type { PropType } from 'vue';

    const props = defineProps({
        data: {
            type: Array as PropType<Tree[]>
        },
        labelKey: {
            type: String,
            required: false,
            default: 'label'
        },
        childrenKey: {
            type: String,
            required: false,
            default: 'children'
        },
    })

    defineExpose({
        callTreeHandler
    });

    interface Tree {
        label: string,
        value: string,
        children?: Tree[]
    }

    const model = defineModel();

    const attrs = useAttrs();
    const slots = useSlots();

    const baseTreeRef = ref<any>(null);

    const hasDefaultSlot = computed(() => !!slots.default);

    const defaultProps = computed(() => ({
        label: props.labelKey,
        children: props.childrenKey
    }))

    const handleNodeClick = (data: Tree) => {
        model.value = data;
    }

    function callTreeHandler(methodName: string, ...args: any) {
        baseTreeRef.value[methodName](...args)
    }


</script>