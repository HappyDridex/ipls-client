<template>
    <div class="logo">
        <NuxtLink class="logo__link"
            :to="{ name: 'home' }">
            IPLS
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.logo {
    &__link {
        @include text-huge;

        font-family: $font-family-secondary;
    }
}
</style>