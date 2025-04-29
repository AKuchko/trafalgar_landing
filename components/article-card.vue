<template>
  <base-card class="article-card">
    <NuxtImg
      class="article-card__image"
      :src="props.image.url"
      :width="props.image.width"
      :height="props.image.height"
    />
    <div class="article-card__body">
      <h4 class="article-card__title">{{ props.title }}</h4>
      <p class="article-card__description">
        {{ props.description }}
      </p>
      <NuxtLink
        class="article-card__link"
        :to="props.link"
      >
        Read more
        <icon-arrow />
      </NuxtLink>
    </div>
  </base-card>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';
import type { ImageInfo } from '~/types';

interface ArticleCardProps {
  image: ImageInfo;
  title: string;
  description: string;
  link: RouteLocationRaw;
}

const props = defineProps<ArticleCardProps>();
</script>

<style>
.article-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.article-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 32px 35px;
}

.article-card__title {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;
  color: var(--color-black);
}

.article-card__description {
  margin-bottom: 25px;
  font-weight: 300;
  line-height: 28px;
  color: var(--color-gray);
}

.article-card__link {
  display: flex;
  align-items: center;
  gap: 14px;

  margin-top: auto;

  font-weight: 600;
  font-size: 17px;
  line-height: 28px;

  color: var(--color-main);
}

.article-card__link svg {
  width: 14.2px;
  height: 9px;

  margin-top: 1.5px;
}
</style>
