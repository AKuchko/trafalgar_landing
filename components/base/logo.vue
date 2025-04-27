<template>
  <nuxt-link
    class="base-logo"
    :class="{ 'base-logo--compact': compact }"
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
interface LogoProps {
  compact?: boolean;
}

const { compact } = defineProps<LogoProps>()
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
</style>