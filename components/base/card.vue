<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.base-card {
  border-radius: 20px;
  box-shadow: var(--shadow-default);
  background: var(--color-white);
  transition: var(--transition);
}

.base-card:hover {
  box-shadow: var(--shadow-fat);
}
</style>
