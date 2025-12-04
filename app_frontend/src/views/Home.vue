<template>
    <HeaderComp></HeaderComp>
  <div class="home">
    <Hero></Hero>
   
  </div>
  <div>
    <h1> Mensaje: {{ message }}</h1>
  </div>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import Hero from '@/components/Hero.vue';

import{ref, onMounted} from "vue";
import api from '@/api.ts';
const message = ref("Loading...");
onMounted(async ()=>{
  try{
    const response = await api.get("/hello");
    message.value =response.data.message;
  } catch (error){
    console.error(error);
    message.value ="Error connecting to backend";
  }
});

</script>

<style scoped>

</style>