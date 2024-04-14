<template>
    <header class="header">
        <div class="container header__inner">
            <div class="header__col">
                <LayoutLogoBase />
            </div>

            <div class="header__col">
                <nav class="header__nav">
                    <ul class="header__links">
                        <li v-for="link in links"
                            :key="link.text"
                            class="header__links-item"
                            @click="onMenuOpen(link.key)"
                            @keypress.enter="onMenuOpen(link.key)">
                            <NuxtLink class="header__link"
                                tabindex="0"
                                :class="{ 'header__link--active': link.key === activeKey }">
                                {{ link.text }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="header__search">
                    <button class="header__search-btn"
                        tabindex="0">
                        <UiIcon name="loupe-search" />
                    </button>
                </div>
            </div>
        </div>

        <Transition name="slide-top">
            <div v-if="showMenu"
                class="header__menu container">
                <LayoutHeaderMenu :links="links"
                    v-model="activeKey"
                    @menu:close="onMenuClose" />
            </div>
        </Transition>
    </header>
</template>

<script setup lang="ts">
import { headerLinks as links } from '@/utils/dictionary/navigation';

const activeKey = ref<string>('')
const showMenu = ref(false);

const HEADER_SELECTOR = '.header'

function onMenuOpen(headerLinkKey: string) {
    showMenu.value = true;
    activeKey.value = headerLinkKey;

    useClickOutside(HEADER_SELECTOR, onMenuClose);
};

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

    &__links {
        display: flex;
        align-items: center;

        &-item {
            @include x-margin-items($gap-mini);
        }
    }

    &__link {
        position: relative;
        padding: rem($gap-tiny);

        &:hover,
        &--active {
            &::after {
                @include base-transition;

                position: absolute;
                left: 0;
                bottom: 0;

                width: 100%;

                content: '';

                border-bottom: 2px solid $border-col-primary;
            }
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