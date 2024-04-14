<template>
    <svg :viewBox="viewBox"
        :class="[icon.class, iconSizeClass]">
        <title v-if="title">{{ title }}</title>
        <desc v-if="desc">{{ desc }}</desc>
        <use :href="icon.url" />
    </svg>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSprite, type PropType } from '#imports'

const SIZES = ['micro', 'mini', 'small', 'medium', 'big', 'large', 'xxl', 'full'];

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: null
    },
    desc: {
        type: String,
        default: null
    },
    size: {
        type: String as PropType<typeof SIZES[number]>,
        default: 'medium'
    },
    viewBox: {
        type: String,
        default: null,
        validator(value: string) {
            return value.split(' ').every((v) => {
                return !isNaN(parseInt(v))
            })
        }
    }
})

const icon = ref({
    url: '',
    class: ''
})

const iconSizeClass = computed(() => `icon--${props.size}`)

icon.value = await useSprite(props.name)

watch(() => props.name, async (name) => {
    icon.value = await useSprite(name)
})
</script>
  