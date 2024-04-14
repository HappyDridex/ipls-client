<template>
    <div class="tree-block-sections">
        <h4 class="tree-block-sections__title">{{ title }}</h4>
        <div class="tree-block-sections__content">
            <UiTreeBase class="tree-block-sections__tree"
                node-key="value"
                ref="treeRef"
                highlight-current
                :data="tree"
                :default-expanded-keys="[selectedValue]"
                :current-node-key="selectedValue"
                @update:model-value="onModelUpdate">
                <template #default="{ data }">
                    <p class="tree-block-sections__item">
                        {{ data.label }}
                    </p>
                </template>
            </UiTreeBase>
        </div>
    </div>
</template>

<script setup lang=ts>

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'Разделы блока'
    },
    pushToQuery: {
        type: Boolean,
        required: false,
        default: true
    },
    articleTargetRouteName: {

    }
})

const router = useRouter();

const selectedValue = defineModel<string>();

const tree = [
    {
        value: 'law1', label: 'Законотворчество', children: [
            { value: 'law2', label: 'Законотворчество2' },
            {
                value: 'law3', label: 'Законотворчество3', children: [
                    {
                        value: 'law4', label: 'Законотворчество2', children: [
                            { value: 'law6', label: 'Законотворчество2' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        value: 'test1', label: 'Законотворчество', children: [
            { value: 'test2', label: 'Законотворчество2' },
            { value: 'test3', label: 'Законотворчество3' }
        ]
    },
    {
        value: 'test4', label: 'Законотворчество', children: [
            { value: 'test5', label: 'Законотворчество2' },
            { value: 'test6', label: 'Законотворчество3' }
        ]
    },
    {
        value: 'test7', label: 'Законотворчество', children: [
            { value: 'test8', label: 'Законотворчество2' },
            { value: 'test9', label: 'Законотворчество3' }
        ]
    }
]

const treeRef = ref<any>([])

const commands = {
    setCurrentKey: 'setCurrentKey',
}

function onModelUpdate({ value }: any) {
    selectedValue.value = value;

    if (props.pushToQuery && router.currentRoute.value?.name) {
        navigateTo({
            name: router.currentRoute.value.name,
            query: { section: value }
        })
    }

    updateTreeValue(value);
}

function updateTreeValue(value: string) {
    if (treeRef.value && Array.isArray(treeRef.value)) {
        treeRef.value.forEach(ref => {
            ref.callTreeHandler(commands.setCurrentKey, null);
            ref.callTreeHandler(commands.setCurrentKey, value)
        })
    } else {
        treeRef.value.callTreeHandler(commands.setCurrentKey, null);
        treeRef.value.callTreeHandler(commands.setCurrentKey, value)
    }
};
</script>

<style scoped lang="scss">
.tree-block-sections {
    flex-shrink: 0;

    height: fit-content;

    &__title {
        @include text-average($font-weight-bold);

        font-family: $font-family-secondary;

        text-transform: uppercase;
    }

    &__content {
        margin-top: rem($gap-medium);
    }

    &__tree {}

    &__item {
        $height-inner: 32px;

        @include text-normal($font-weight-semibold);

        height: rem($height-inner);
    }
}
</style>