<template>
  <div>
    <h1>Main page</h1>
    <div class="cards-list">
      <service-card
        v-for="(card, index) in serviceCards"
        :key="index"
        :icon="card.image"
        :title="card.title"
        :description="card.description"
      />
    </div>
    <div class="cards-list">
      <article-card
        v-for="(card, index) in articlesCards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :description="card.description"
        :link="card.pageLink || ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardInfo } from '~/types';

const serviceCards = ref<CardInfo[]>([
  {
    image: {
      url: '/icons/service/search.svg',
      width: '92px',
      height: '90px',
    },
    title: 'Search doctor',
    description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    image: {
      url: '/icons/service/pharmacy.svg',
      width: '62px',
      height: '85px',
    },
    title: 'Online pharmacy',
    description: 'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    image: {
      url: '/icons/service/consultation.svg',
      width: '67px',
      height: '95px',
    },
    title: 'Consultation',
    description: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    image: {
      url: '/icons/service/details.svg',
      width: '67px',
      height: '95px',
    },
    title: 'Details info',
    description: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    image: {
      url: '/icons/service/emergency.svg',
      width: '80px',
      height: '71.15px',
    },
    title: 'Emergency care',
    description: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    image: {
      url: '/icons/service/tracking.svg',
      width: '69.5px',
      height: '95px',
    },
    title: 'Tracking',
    description: 'Track and save your medical history and health data ',
  },
])

const articlesCards = ref<CardInfo[]>([
  {
    image: {
      url: '/article/1.webp',
      width: 'auto',
      height: '240px',
    },
    title: 'Disease detection, check up in the laboratory',
    description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    pageLink: '/article/1'
  },
  {
    image: {
      url: '/article/2.webp',
      width: 'auto',
      height: '240px',
    },
    title: 'Online pharmacy',
    description: 'Buy  your medicines with our mobile application with a simple delivery system',
    pageLink: '/article/2'
  },
  {
    image: {
      url: '/article/3.webp',
      width: 'auto',
      height: '240px',
    },
    title: 'Consultation',
    description: 'Free consultation with our trusted doctors and get the best recomendations',
    pageLink: '/article/3'
  },
])
</script>

<style>
.cards-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 34px;
}
</style>