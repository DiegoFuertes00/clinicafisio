<template>
  <div class="col-md-3">
    <article class="card card-leon h-100" tabindex="0">
      <div class="card-body">
        <h3 class="card-title mb-1 h5">{{ name }}</h3>
        <p class="text-muted small mb-1">{{ role }}</p>
        <p class="text-muted small mb-0">{{ description }}</p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  name: string
  role: string
  description: string
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>
