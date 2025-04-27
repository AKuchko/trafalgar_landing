<template>
  <button
    class="base-button"
    :class="rootCSSClasses"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CSSClasses } from '~/types';

interface ButtonProps {
  outlined?: boolean;
}

const { outlined } = defineProps<ButtonProps>()

const rootCSSClasses = computed((): CSSClasses => ({
  'base-button--outllined': outlined,
}))
</script>

<style>
.base-button {
  height: 56px;
  min-width: 200px;
  border-radius: 55px;

  font-size: 18px;
  font-weight: 700;

  color: var(--color-white);
  background: var(--color-main);

  transition: var(--transition);
}

.base-button:hover {
  background: var(--color-main-dark);
}

.base-button--outlined {
  border: 1.4px solid var(--color-main);
  color: var(--color-main);
  background: transparent;
}

.base-button--outlined:hover {
  color: var(--color-white);
  background: var(--color-main);
}
</style>
