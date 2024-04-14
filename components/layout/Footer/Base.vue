<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__col">
                    <NuxtLink class="footer__link"
                        to="#">
                        Политика конфиденциальности
                    </NuxtLink>
                </div>
                <div class="footer__col">
                    <form class="footer__subscribe">
                        <label class="footer__subscribe-label"
                            for="subscribe">
                            Подпишитесь на рассылку с новыми статьями
                        </label>
                        <div class="footer__subscribe-field">
                            <input id="subscribe"
                                class="footer__subscribe-control"
                                type="text"
                                placeholder="Адрес электронной почты">
                            <button class="footer__subscribe-button">
                                Подписаться
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    color: $txt-col-primary-invert;
    background-color: $fill-col-primary-invert;

    &__inner {
        display: flex;
        justify-content: space-between;

        padding: rem($gap-big) 0;
    }

    &__col {
        @include x-margin-items($gap-normal);

        width: 40%;
    }

    &__link {
        @include text-normal;
    }

    &__subscribe {
        $control-height-desktop: 44px;

        &-label {
            @include text-normal;

            display: block;
            margin-bottom: rem($gap-mini);
        }

        &-field {
            display: flex;
        }

        &-control {
            @include text-normal;

            flex-grow: 1;

            height: rem($control-height-desktop);
            padding: 0 rem($gap-mini);

            color: $txt-col-primary-invert;
            border: 1px solid $border-col-primary-invert;
            background-color: transparent;
        }

        &-button {
            height: rem($control-height-desktop);
            padding: 0 rem($gap-mini);

            background-color: $fill-col-primary;
        }
    }
}
</style>