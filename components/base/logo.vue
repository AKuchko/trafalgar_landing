<template>
  <nuxt-link
    class="base-logo"
    :class="rootCSSClasses"
    to="/"
  >
    <div class="base-logo__logo">
      <span>
        T
      </span>
    </div>
    <span
      v-if="!compact"
      class="base-logo__name"
    >
      Trafalgar
    </span>
  </nuxt-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CSSClasses } from '~/types';

interface LogoProps {
  compact?: boolean;
  contrast?: boolean;
}

const { compact, contrast } = defineProps<LogoProps>()

const rootCSSClasses = computed((): CSSClasses => ({
  'base-logo--compact': compact,
  'base-logo--contrast': contrast,
}))
</script>

<style>
.base-logo {
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 700;

  text-decoration: none;
}

.base-logo__logo {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 41px;
  height: 41px;
  border-radius: 50%;

  font-size: 26px;
  line-height: 100%;

  color: var(--color-white);
  background: var(--color-main);
}

.base-logo__name {
  font-size: 24px;

  color: var(--color-dark-blue);
}

.base-logo--compact {}

.base-logo--contrast .base-logo__logo {
  color: var(--color-main);
  background: var(--color-white);
}

.base-logo--contrast .base-logo__name {
  color: var(--color-white);
}
</style>
