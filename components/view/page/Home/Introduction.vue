<template>
    <section class="home-page-introduction">
        <div class="home-page-introduction__col home-page-introduction__col--main">
            <h1 class="home-page-introduction__title">
                <span>
                    Инновационная платформа
                </span>
                <span class="home-page-introduction__title--nailed">
                    для юридических решений
                </span>
            </h1>
            <blockquote class="home-page-introduction__blockquote">
                <p class="home-page-introduction__blockquote-inner">
                    <span class="home-page-introduction__blockquote-text">
                        Новый взгляд на право.
                    </span>
                    <span class="home-page-introduction__blockquote-text">
                        Для бизнеса, для каждого, для себя.
                    </span>
                    <span class="home-page-introduction__blockquote-text">
                        Больше чем право.
                    </span>
                </p>
                <footer class="home-page-introduction__blockquote-footer">
                    <p class="home-page-introduction__blockquote-author">By Olesya Vostretsova</p>
                </footer>
            </blockquote>
        </div>
        <div class="home-page-introduction__col">
            <div class="home-page-introduction__preview">
                <img class="home-page-introduction__preview-pic"
                    src="/images/static/home-introduction-preview.png"
                    alt="Иллюстрация Фемиды">
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.home-page-introduction {
    $max-height-desktop: 700px;

    display: flex;

    max-height: rem($max-height-desktop);

    &__col {
        @include x-margin-items($gap-medium);

        position: relative;

        width: 50%;

        &--main {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    &__title {
        @include text-xxl;

        font-family: $font-family-primary;

        margin-top: rem($gap-large);

        text-transform: uppercase;

        &>span {
            display: block;
        }

        &--nailed {
            text-align: right;
        }
    }

    &__preview {
        @include absolute-all-null;

        &-pic {
            @include object-cover-full;
        }
    }

    &__blockquote {
        $safe-top-margin: $gap-xl;
        font-family: $font-family-secondary;

        margin-top: rem($safe-top-margin);
        margin-bottom: rem($gap-xxl);

        text-transform: uppercase;

        &-inner {
            padding-left: rem($gap-mini);
            border-left: rem(4px) solid $border-col-primary;
        }

        &-text {
            @include y-margin-items($gap-tiny);
            display: block;
        }

        &-footer {
            margin-top: rem($gap-medium);
        }

        &-author {
            width: fit-content;
            margin-left: auto;

            text-transform: uppercase;
        }

        &-text,
        &-author {
            @include text-average($font-weight-bold);
        }
    }
}
</style>