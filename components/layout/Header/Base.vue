<template>
    <header class="header">
        <div class="container header__inner">
            <div class="header__col">
                <LayoutLogoBase />
            </div>

            <div class="header__col">
                <nav class="header__nav">
                    <ul class="header__links">
                        <li
                            v-for="link in links"
                            :key="link.text"
                            class="header__links-item"
                            @click="onHeaderLinkClick(link)"
                            @keypress.enter="
                                onMenuOpen(link.key as THeaderLinkKey)
                            "
                        >
                            <NuxtLink
                                class="header__link"
                                active-class="header__link--active"
                                tabindex="0"
                                :class="{
                                    'header__link--active':
                                        link.key === activeKey ||
                                        link.key === route.matched[0]?.name,
                                }"
                            >
                                {{ link.text }}
                            </NuxtLink>
                        </li>
                    </ul>

                    <div class="header__nav-sidebar-button">
                        <UiButton
                            no-border
                            size="big"
                            theme="primary"
                            icon-name="burger-menu"
                        />
                    </div>
                </nav>
                <div class="header__search">
                    <button class="header__search-btn" tabindex="0">
                        <UiIcon name="loupe-search" />
                    </button>
                </div>
            </div>
        </div>

        <Transition name="slide-top">
            <div v-if="showMenu && activeKey" class="header__menu container">
                <LayoutHeaderMenu
                    :links="links"
                    v-model="activeKey"
                    @menu:close="onMenuClose"
                />
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import type { THeaderLink, THeaderLinkKey } from './types';
import { headerLinks as links } from '@/utils/dictionary/navigation';

const route = useRoute();

const HEADER_SELECTOR = '.header';

const activeKey = ref<THeaderLinkKey | ''>('');
const showMenu = ref(false);

watch(
    () => route.path,
    (to, from) => {
        if (to !== from) {
            onMenuClose();
        }
    }
);

function onHeaderLinkClick(link: THeaderLink) {
    if (link.route) {
        navigateTo(link.route);
    } else if (link.key) {
        onMenuOpen(link.key as THeaderLinkKey);
    } else {
        console.warn('onHeaderLinkClick: no link key provided');
    }
}

function onMenuOpen(headerLinkKey: THeaderLinkKey) {
    showMenu.value = true;
    activeKey.value = headerLinkKey;

    useClickOutside(HEADER_SELECTOR, onMenuClose);
}

function onMenuClose() {
    showMenu.value = false;
    activeKey.value = '';
}
</script>

<style scoped lang="scss">
.header {
    height: rem($header-height-desktop);

    background-color: $fill-col-primary;

    &__inner {
        @include flex-space-between;

        position: relative;
        z-index: 2;

        height: 100%;

        background: $fill-col-primary;
    }

    &__col {
        display: flex;
        align-items: center;
    }

    &__nav {
        &-sidebar-button {
            display: none;

            @media #{$screen-tablet} {
                display: block;
            }
        }
    }

    &__links {
        display: flex;
        align-items: center;

        @media #{$screen-tablet} {
            display: none;
        }

        &-item {
            @include x-margin-items($gap-mini);
        }
    }

    &__link {
        position: relative;
        padding: rem($gap-tiny);

        @include scaling-underline(2px, $border-col-primary);

        &--active {
            @include scaling-underline(2px, $border-col-primary, true);
        }
    }

    &__search {
        margin-left: rem($gap-mini);

        &-btn {
            padding: rem($gap-tiny);
        }
    }

    &__menu {
        position: relative;
        z-index: -1;
    }
}
</style>
