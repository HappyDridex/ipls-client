<template>
    <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item"
                v-for="crumb in crumbs"
                :key="crumb.name">
                <NuxtLink class="breadcrumbs__link"
                    :to="{ name: crumb.name, ...getCrumbsParams(crumb) }">{{ crumb.label }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { TBreadcrumb, TBreadcrumbs } from '@/components/layout/Breadcrumbs/types';

defineProps({
    crumbs: {
        type: Array as PropType<TBreadcrumbs>,
        required: true
    }
});

function getCrumbsParams(crumb: TBreadcrumb) {
    return crumb.params ? { params: crumb.params } : {}
}

</script>

<style scoped lang="scss">
.breadcrumbs {

    &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    &__item {
        $crumbs-gap: 15px;

        position: relative;

        padding-left: calc($crumbs-gap / 2);
        padding-right: calc($crumbs-gap / 2);

        &::before,
        &::after {
            position: absolute;
            top: 50%;

            display: inline-block;

            content: "/";

            color: $txt-col-secondary;
        }

        &::before {
            left: 0;
            transform: translate(-50%, -50%);
        }

        &::after {
            right: 0;
            transform: translate(50%, -50%);
        }

        &:first-child {
            padding-left: 0;

            &::before {
                display: none;
            }
        }

        &:last-child {
            padding-right: 0;

            pointer-events: none;

            &::after {
                display: none;
            }
        }
    }

    &__item:last-child & {
        &__link {
            color: $txt-col-primary;

            &:hover {
                text-decoration: none;
            }
        }
    }

    &__link {
        @include text-normal($font-weight-semibold);

        color: $txt-col-secondary;

        &:hover {
            text-decoration: underline;

            color: $txt-col-primary;
        }
    }
}
</style>