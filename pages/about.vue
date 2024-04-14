<template>
    <div>
        <NuxtLayout active-header-tab="about">
            <main class="about-page">
                <section class="about-page__author">
                    <h1 class="about-page__author-title">Олеся Вострецова</h1>
                    <p class="about-page__author-subtitle">Практикующий юрист с 20-летним стажем, влюбленный в свою профессию.</p>

                    <ul class="about-page__list">
                        <li class="about-page__list-item"
                            v-for="item in aboutList"
                            :key="item.title">
                            <h3 class="about-page__list-item-title">{{ item.title }}</h3>
                            <p class="about-page__list-item-description">{{ item.description }}</p>
                        </li>
                    </ul>
                </section>
                <section class="about-page__cover">
                    <img class="about-page__cover-pic"
                        src="/images/static/author-cover-image.png"
                        alt="Обложка секции в виде иллюстрации открытых книг">
                </section>
            </main>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'about'
});

const aboutList = [
    { title: 'Компетенции:', description: 'Сложные компетенции во взаимодействии (право, аналитика, комплаенс,законотворчество,HR,GR,T&D).' },
    { title: 'Обо мне:', description: 'Сложные компетенции во взаимодействии (право, аналитика, комплаенс,законотворчество,HR,GR,T&D).' },
    { title: 'Образование и опыт:', description: 'Сложные компетенции во взаимодействии (право, аналитика, комплаенс,законотворчество,HR,GR,T&D).' },
]
</script>

<style scoped lang="scss">
.about-page {
    display: flex;
    justify-content: space-between;

    margin-top: rem($gap-medium);

    &__cover {
        position: relative;

        &-pic {
            @include absolute-all-null;
            @include object-cover-full;
        }
    }

    &__author,
    &__cover {
        @include flex-item-width(2, $gap-large);
    }

    &__author {
        &-title {
            @include text-xl;

            text-transform: uppercase;
        }

        &-subtitle {
            @include text-normal;

            margin-top: rem($gap-tiny);

            color: $txt-col-secondary;
        }
    }

    &__list {
        margin: rem($gap-medium) 0;

        &-item {
            @include y-margin-items($gap-medium);

            &-title {
                @include text-large;
            }

            &-description {
                @include text-normal;

                margin-top: rem($gap-tiny);
            }
        }
    }

}
</style>