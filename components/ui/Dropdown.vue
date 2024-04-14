<template>
  <ClientOnly>
    <ElDropdown class="dropdown" @visible-change="(val) => emit('visible-change', val)">
      <slot />
      <template #dropdown>
        <slot name="customMenu">
          <ElDropdownMenu class="dropdown__menu">
            <ElDropdownItem
              class="dropdown__item"
              v-for="(item, idx) in items"
              :key="item?.id || idx"
            >
              <slot name="menuItem" :item="item" />
            </ElDropdownItem>
          </ElDropdownMenu>
        </slot>
      </template>
    </ElDropdown>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const emit = defineEmits(['visible-change']);

defineProps({
  items: {
    type: Array as PropType<any[]>,
    required: false,
    default: null,
  },
});
</script>
