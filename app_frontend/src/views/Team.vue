<template>
  <HeaderComp />

  <!-- Equipo -->
  <section class="py-5">
    <div class="container text-center">
      <h2 class="mb-4 fw-bold">Nuestro Equipo</h2>
      <div class="row justify-content-center g-4">
        <Worker
          v-for="member in team"
          :key="member.name"
          :name="member.name"
          :role="member.role"
          :description="member.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue'
import Worker from '@/components/Worker.vue'
import { ref } from 'vue'

interface Member {
  name: string
  role: string
  description: string
}

const team = ref<Member[]>([
  {
    name: 'Pablo Motos',
    role: 'Fisioterapeuta deportiva',
    description: 'Description' 
  },
  {
    name: 'David Broncano',
    role: 'Especialista en rehabilitación',
    description: 'Description'
  }
])
</script>

