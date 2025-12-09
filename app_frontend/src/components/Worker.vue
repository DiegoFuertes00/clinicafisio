<template>
  <div class="col-md-3">
    <div class="card card-leon h-100">
      <div class="card-body">
        <h5 class="card-title mb-1">{{ name }}</h5>
        <p class="text-muted small mb-1">{{ role }}</p>
        <p class="text-muted small mb-0">{{ description }}</p>
      </div>
    </div>
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
