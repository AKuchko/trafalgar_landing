<template>
  <base-card class="service-card">
    <div class="service-card__image-wrap">
      <NuxtImg
        class="service-card__icon"
        :src="icon.url"
        :width="icon.width"
        :height="icon.height"
        placeholder
      />
    </div>
    <h4 class="service-card__title">
      {{ title }}
    </h4>
    <p class="service-card__description">
      {{ description }}
    </p>
  </base-card>
</template>

<script setup lang="ts">
import type { ImageInfo } from '~/types';

interface IServiceCardProps {
  icon: ImageInfo;
  title: string;
  description: string;
}

const { icon, title, description } = defineProps<IServiceCardProps>();
</script>

<style>
.service-card {
  height: 354px;
  padding: 54px 39px 47px;
}

.service-card__image-wrap {
  display: inline-flex;
  align-items: center;
  min-height: 95px;
  margin-bottom: 17.5px;
}

.service-card__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 56px;
  color: var(--color-black);
}

.service-card__description {
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: var(--color-gray);
}
</style>
