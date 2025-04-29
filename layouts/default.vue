<template>
  <div class="default-layout">
    <base-header />
    <slot />
    <base-footer />
  </div>
</template>

<style>
.default-layout {
  min-height: 100vh;
}
</style>
