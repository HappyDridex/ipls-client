<template>
    <div class="layout layout--default">
        <LayoutHeaderBase class="layout__header"
            :active-tab="activeHeaderTab" />
        <div class="layout__page">
            <UiButton v-if="showBackButton"
                class="layout__back-button"
                text="НАЗАД"
                icon-name="chevron-left"
                is-reversed
                @click="onBackClick" />
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
import type { PropType } from 'vue';
import type { THeaderLinkKey } from '@/components/layout/Header/types';

const props = defineProps({
    pageTitle: {
        type: String,
        required: false,
        default: null
    },
    showBackButton: {
        type: Boolean,
        required: false,
        default: false
    },
    activeHeaderTab: {
        type: String as PropType<THeaderLinkKey>,
        required: false,
        default: ''
    }
});

const router = useRouter();

const { breadcrumbs } = useBreadcrumbs();

const hasMeta = computed(() => !!props.pageTitle?.length || !!breadcrumbs.value?.length);

function onBackClick() {
    router.go(-1)
}

</script>