<template>
  <div id="app" class="app-shell">
    <HeaderComp />
    <main class="app-main">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script setup lang="ts">
import HeaderComp from "@/components/HeaderComp.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>