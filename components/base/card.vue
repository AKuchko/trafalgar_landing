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
  box-shadow: 10px 40px 50px 0 rgba(229, 233, 246, 0.4);
  background: var(--color-white);
}
</style>
