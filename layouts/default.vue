<template>
    <div class="layout layout--default">
        <LayoutHeaderBase class="layout__header" />
        <div class="layout__page">
            <div v-if="hasMeta"
                class="layout__meta">
                <h1 v-if="pageTitle"
                    class="layout__page-title">{{ pageTitle }}</h1>
                <LayoutBreadcrumbs v-if="breadcrumbs"
                    class="layout__breadcrumbs"
                    :crumbs="breadcrumbs" />
            </div>
            <slot />
        </div>
        <LayoutFooterBase />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    pageTitle: {
        type: String,
        required: false,
        default: null
    }
});

const { breadcrumbs } = useBreadcrumbs();

const hasMeta = computed(() => !!props.pageTitle?.length || !!breadcrumbs.value?.length)

</script>