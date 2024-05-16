<template>
    <div class="tree-block-sections">
        <h4 class="tree-block-sections__title">{{ title }}</h4>
        <div class="tree-block-sections__content">
            <UiTreeBase
                class="tree-block-sections__tree"
                node-key="value"
                ref="treeRef"
                highlight-current
                expty-text="Вложений не найдено"
                :indent="36"
                :data="tree"
                :default-expanded-keys="[selectedValue]"
                :current-node-key="selectedValue"
                @update:model-value="onModelUpdate"
            >
                <template #default="{ data }">
                    <p class="tree-block-sections__item">
                        {{ data.label }}
                    </p>
                </template>
            </UiTreeBase>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'Разделы блока',
    },
    tree: {
        type: Array as PropType<any>,
        required: false,
    },
    pushToQuery: {
        type: Boolean,
        required: false,
        default: true,
    },
});

const router = useRouter();

const selectedValue = defineModel<string>();

const treeRef = ref<any>([]);

const commands = {
    setCurrentKey: 'setCurrentKey',
    getCurrentKey: 'getCurrentKey',
};

function onModelUpdate({ value, label }: { value: string; label: string }) {
    if (value === selectedValue.value) {
        return;
    }

    selectedValue.value = value;

    if (props.pushToQuery && router.currentRoute.value?.name) {
        navigateTo({
            name: router.currentRoute.value.name,
            query: { section: value },
        });
    }

    updateTreeValue(value);
}

function updateTreeValue(value: string) {
    if (!treeRef.value) {
        return;
    }
    console.log('treeRef.value', treeRef.value);

    if (Array.isArray(treeRef.value)) {
        treeRef.value.forEach((ref: any) => {
            queueMicrotask(() => {
                ref.callTreeHandler(commands.setCurrentKey, null);
                ref.callTreeHandler(commands.setCurrentKey, value);
            });
        });
    } else {
        queueMicrotask(() => {
            treeRef.value.callTreeHandler(commands.setCurrentKey, null);
            treeRef.value.callTreeHandler(commands.setCurrentKey, value);
        });
    }
}
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

    &__tree {
    }

    &__item {
        $height-inner: 32px;

        @include text-normal($font-weight-semibold);

        line-height: rem($height-inner);

        height: rem($height-inner);
        margin-right: auto;
        margin-left: rem($gap-tiny);
    }
}
</style>
