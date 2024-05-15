<template>
    <div class="layout layout--default">
        <LayoutHeaderBase class="layout__header" />
        <div class="layout__page">
            <ClientOnly>
                <UiButton
                    v-if="backButton"
                    class="layout__back-button"
                    text="НАЗАД"
                    icon-name="chevron-left"
                    is-reversed
                    is-link
                    v-bind="getBackButtonAttrs(backButton)"
                />
            </ClientOnly>
            <div v-if="hasMeta" class="layout__meta">
                <h1 v-if="pageTitle" class="layout__page-title">
                    {{ pageTitle }}
                </h1>
                <LayoutBreadcrumbs
                    v-if="breadcrumbs"
                    class="layout__breadcrumbs"
                    :crumbs="breadcrumbs"
                />
            </div>
            <NuxtPage />
        </div>
        <LayoutFooterBase />
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const pageTitle = computed(() => route.meta?.pageTitle as string | undefined)

const backButton = computed(
    () =>
        route.meta?.backButton as {
            text: string
            fallbackRoute: string
        }
)

function getBackButtonAttrs(backButton: {
    text: string
    fallbackRoute: string
}) {
    // URL из истории
    const backUrl = router.options.history.state?.back

    if (backUrl) {
        return {
            to: backUrl,
        }
    } else {
        // если история пуста, используем fallback
        return { to: backButton.fallbackRoute }
    }
}

const { breadcrumbs } = useBreadcrumbs()

const hasMeta = computed(
    () => !!pageTitle.value?.length || !!breadcrumbs.value?.length
)
</script>
