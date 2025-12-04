<template>
  <div class="col-md-3">
    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <h5 class="card-title mb-1">{{ name }}</h5>
        <p class="text-muted small mb-0">{{ role }}</p>
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
