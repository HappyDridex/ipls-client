<template>
    <div class="article-content">
        <UiEditorBase :content="articleContent"
            v-slot="{ editor }">
            <template v-if="!!editor">
                <EditorContent class="article-editor__content"
                    :editor="editor" />
            </template>
        </UiEditorBase>
    </div>
</template>

<script setup lang="ts">
import { EditorContent } from '@tiptap/vue-3';

defineProps({
    articleContent: {
        type: String,
        required: false
    }
})
</script>

<style scoped lang="scss">
.article-content {
    margin-bottom: rem($gap-large);
}
</style>