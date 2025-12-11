<template>
  <HeaderComp></HeaderComp>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
  <main id="main-content" class="home">
    <Hero></Hero>
  </main>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import Hero from '@/components/Hero.vue';

import{ref, onMounted} from "vue";

</script>