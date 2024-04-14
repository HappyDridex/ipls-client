<template>
    <div class="input"
        :class="themeClass">
        <span v-if="label"
            class="input__label">{{ label }}</span>
        <div class="input__inner">
            <input class="input__control"
                ref="inputRef"
                type="text"
                :value="modelValue"
                :placeholder="placeholder"
                @input="handleInput($event)" />
            <button v-if="clearIcon"
                class="input__clear"
                @click="onClear">
                <UiIcon v-if="clearIcon"
                    :name="clearIconName"
                    size="mini" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const THEMES = ['base', 'invert']

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false,
        default: null
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    theme: {
        type: String as PropType<typeof THEMES[number]>,
        required: false,
        default: 'base'
    },
    clearIcon: {
        type: Boolean,
        required: false,
        default: false
    },
    clearIconName: {
        type: String,
        required: false,
        default: 'cross'
    }
});

const emit = defineEmits(['update:modelValue', 'clear']);

const inputRef = ref<HTMLInputElement>();

const BASE_CLASS = 'input';
const themeClass = computed(() => `${BASE_CLASS}--theme-${props.theme}`)

function handleInput(evt: Event) {
    let value = (evt.target as HTMLInputElement).value
    emitValue(value)
}

function onClear() {
    if (inputRef.value) {
        inputRef.value.value = ''

        emitValue(inputRef.value.value)
        emit('clear')
    }
}

function emitValue(value: string) {
    emit('update:modelValue', value);
}
</script>

<style scoped lang="scss">
.input {
    @include base-transition;

    display: flex;
    flex-direction: column;

    &--theme-base & {
        &__control {
            color: $txt-col-primary;
            border-radius: rem($border-radius-small);
            border: 1px solid $border-col-primary;

            &::placeholder {
                color: $txt-col-secondary;
            }

            &:focus {
                border-color: $border-col-focused;
            }
        }
    }

    &--theme-invert & {
        &__control {
            color: $txt-col-primary-invert;
            background-color: transparent;

            &::placeholder {
                color: $txt-col-secondary;
            }
        }

        &__clear {
            color: $icon-col-secondary;
        }
    }

    &__label {
        @include text-base;

        display: inline-block;

        margin-bottom: rem($gap-micro)
    }

    &__inner {
        display: flex;
        align-items: center;
    }

    &__control {
        @include text-base;

        font-family: $font-family-primary;

        flex-grow: 1;

        padding: rem($gap-tiny);
    }

    &__clear {
        margin-left: rem($gap-tiny);
    }
}
</style>