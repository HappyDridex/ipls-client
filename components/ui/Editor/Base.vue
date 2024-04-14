<template>
    <div class="base-editor">
        <slot :editor="editor" />
    </div>
</template>

<script setup>
import { useEditor } from '@tiptap/vue-3';
import { extensionConfigs } from '@/utils/editor/extensions/configs';

const props = defineProps({
    content: {
        type: String,
        required: false
    }
});

const TEMP_DEFAULT_CONTENT = '<h1><strong>Hello world!</strong></h1><p></p><p><span style="color: #51CF66">This is paragraph.</span></p><p></p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.youtube.com/">This is a link to youtube!</a></p><p></p><ul><li><p><u>Editor is cool</u></p></li><li><p><em>Editor is funny</em></p></li></ul><p></p><ol><li><p><span style="color: #22B8CF">Todo #1</span></p></li><li><p><span style="color: #22B8CF">Todo #2</span></p></li></ol><p></p><blockquote><p>This is a blockquote,,,</p></blockquote><p></p><p></p><p></p><p></p><img src="https://source.unsplash.com/K9QHL52rE2k/800x400" style="width: 100%; height: auto; cursor: pointer;">';

const editorOptions = getEditorBuildOptions();
const editor = useEditor(editorOptions);

function getExtensions() {
    const usedExtensionNames = new Set();

    for (let name in extensionConfigs) {
        usedExtensionNames.add(name);
    }

    const usedExtensionNamesArray = Array.from(usedExtensionNames);

    const extensions = [];

    for (let extensionName of usedExtensionNamesArray) {
        const config = extensionConfigs[extensionName];

        if (!config.component) {
            continue;
        }

        extensions.push(config.component);
    }

    return {
        usedExtensionNames,
        extensions,
    };
}

function getEditorBuildOptions() {
    const { usedExtensionNames, extensions } = getExtensions();

    return {
        content: props.content ?? TEMP_DEFAULT_CONTENT,
        extensions,
        editable: true,

        editorProps: {
            handleDrop: function (view, event, slice, moved) {
                console.log(view, event, slice, moved);
            }
        },

        onFocus: (arg) => {
            // this.$emit('focus');
        },
        onBlur: (arg) => {
            // this.$emit('blur');
        },
        onUpdate: (event) => {
        },
        onTransaction: (event) => {
            // this.$emit('transaction', event);
        },
    };
}
</script>
