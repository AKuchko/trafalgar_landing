<template>
  <footer class="base-footer">
    <div class="base-footer__company-info">
      <base-logo
        class="base-footer__logo"
        contrast
      />
      <p class="base-footer__company-description">
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
      </p>
      <p class="base-footer__copyright">
        © Trafalgar PTY LTD 2020. All rights reserved
      </p>
    </div>
    <div
      v-for="block in navigationBlocks"
      :key="block.key"
      class="base-footer__navigation-block"
    >
      <h4 class="base-footer__navigation-title">
        {{ block.title }}
      </h4>
      <ul class="base-footer__links">
        <li
          v-for="link in block.links"
          :key="link.key"
        >
          <NuxtLink :to="link.link">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { NavigationBlock } from '~/types';

const navigationBlocks = ref<NavigationBlock[]>([
  {
    key: 'company',
    title: 'Company',
    links: [
      { key: 'about', link: '/about', title: 'About' },
      { key: 'testimonials', link: '/testimonials', title: 'Testimonials' },
      { key: 'search', link: '/sarch', title: 'Find a doctor' },
      { key: 'apps', link: '/apps', title: 'Apps' },
    ],
  },
  {
    key: 'region',
    title: 'Region',
    links: [
      { key: 'indonesia', link: '/indonesia', title: 'Indonesia' },
      { key: 'singapore', link: '/singapore', title: 'Singapore' },
      { key: 'hongkong', link: '/hongkong', title: 'Hongkong' },
      { key: 'canaada', link: '/canaada', title: 'Canaada' },
    ],
  },
  {
    key: 'help',
    title: 'Help',
    links: [
      { key: 'helpCenter', link: '/help-center', title: 'Help center' },
      { key: 'support', link: '/support', title: 'Contact support' },
      { key: 'instuction', link: '/instuction', title: 'Instructions' },
      { key: 'q&a', link: '/how-it-works', title: 'How it works' },
    ],
  },
])
</script>

<style>
.base-footer {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 109px 0;

  color: var(--color-white);
}

.base-footer::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: -1;
  
  width: 100vw;
  height: 100%;

  background: var(--color-main-gradient);
}

.base-footer__company-info {
  display: flex;
  flex-direction: column;

  max-width: 391px;

  flex: 1;
}

.base-footer__logo {
  margin-bottom: 17px;
}

.base-footer__company-description {
  margin-bottom: 31px;
}

.base-footer__navigation-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 60px;
}

.base-footer__links {
  font-size: 18px;
  font-weight: 300;
  line-height: 38px;
}
</style>
