<template>
    <div>
        <NuxtLayout page-title="Юридическая аналитика">
            <main class="page">
                <ViewCommonContentArticlesWithTree />
            </main>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: 'analytics',
    crumbs: () => ([
        {
            name: 'home',
            label: 'Главная',
        },
        {
            label: 'Юридическая аналитика',
            name: 'analytics',
        }
    ])
});

const activeBlock = ref('');

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
