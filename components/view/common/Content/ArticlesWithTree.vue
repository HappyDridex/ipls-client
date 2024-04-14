<template>
    <div class="articles-with-tree">
        <ViewCommonTreeBlockSections class="articles-with-tree__tree"
            v-model="activeBlock" />
        <div class="articles-with-tree__main">
            <h2 class="articles-with-tree__title">
                Популярные статьи
            </h2>

            <UiTagList :tags="tags"
                class="articles-with-tree__tags" />

            <ul class="articles-with-tree__list">
                <li class="articles-with-tree__list-item">
                    <UiCardArticleBase :card="card1"
                        :type="card1.type" />
                </li>
                <li>
                    <UiCardArticleBase :card="card1"
                        :type="card1.type" />
                </li>
                <li>
                    <UiCardArticleBase :card="card1"
                        :type="card1.type" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const activeBlock = ref('');

const tags = [{ text: 'TAG' }, { text: 'TAG' }, { text: 'TAG' }, { text: 'TAG' }, { text: 'TAG' }]

const card1 = {
    id: 1,
    title: 'How collaboration makes us better designers',
    img: '/images/temp/article1.jpg',
    description: 'Collaboration can make our teams stronger, and our individual designs better. Collaboration can make our teams stronger, and our individual designs better. Collaboration can make our teams stronger, and our individual designs better.Collaboration can make our teams stronger, and our individual designs better Collaboration can make our teams stronger, and our individual nnnn Collaboration can make our teams stronger, and our individual designs better. Collaboration can make our teams stronger, and our individual designs better. Collaboration can make our teams stronger, and our individual designs better.Collaboration can make our teams stronger, and our individual designs better Collaboration can make our teams stronger, and our individual nnnn',
    time: '11 окт. 2024',
    tags: [{ text: 'Tag' }, { text: 'Tag' }, { text: 'Tag' }],
    type: 'rowed'
};

</script>

<style scoped lang="scss">
.articles-with-tree {
    display: flex;

    padding-bottom: rem($gap-large);

    &__tree {
        width: rem(412px);
        margin-top: rem($gap-big);
    }

    &__main {
        margin-left: rem($gap-medium);
    }

    &__title {
        @include text-average($font-weight-bold);

        font-family: $font-family-secondary;

        text-transform: uppercase;
    }

    &__tags {
        margin-top: rem($gap-normal);
    }

    &__list {
        margin-top: rem($gap-medium);
    }
}
</style>