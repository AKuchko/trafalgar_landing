<template>
  <header class="base-header">
    <base-logo classs="base-header__logo" />
    <nav class="base-header__nav">
      <ul class="base-header__links">
        <li
          v-for="link in links"
          :key="link.key"
          class="base-header__link-item"
        >
          <NuxtLink :to="link.link">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface HeaderLinkItem {
  key: string,
  link: string,
  title: string,
}

const links = ref<HeaderLinkItem[]>([
  {
    key: 'home',
    link: '/',
    title: 'Home',
  },
  {
    key: 'findDoctor',
    link: '/find-doctor',
    title: 'Find a doctor',
  },
  {
    key: 'apps',
    link: '/apps',
    title: 'Apps',
  },
]);
</script>

<style>
.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 56px 0;
}

.base-header__nav {
}

.base-header__links {
  display: flex;
  align-items: center;
  gap: 40px;

  list-style: none;
}

.base-header__link-item {
  opacity: 0.5;
  font-size: 18px;
  font-weight: 400;

  transition: var(--transition);
}

.base-header__link-item:hover {
  opacity: 1;
}

.base-header__link-item:has(a.router-link-exact-active) {
  opacity: 1;
  font-weight: 700;
}

.base-header__link-item a {
  color: var(--coloe-hyfen);
  text-decoration: none;
}
</style>
