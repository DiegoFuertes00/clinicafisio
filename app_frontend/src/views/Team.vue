<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <main id="main-content">
    <section class="py-5">
      <div class="container text-center">
        <h1 class="mb-4 fw-bold">Nuestro Equipo</h1>

        <div class="row g-4" role="list">
          <div
            v-for="member in team"
            :key="member.name"
            class="col-md-4"
            role="listitem"
          >
            <article class="card card-leon h-100 text-center p-3">
              <img
                :src="member.photo"
                alt=""
                class="worker-avatar mx-auto mb-3"
                aria-hidden="true"
              />

              <h2 class="h5 fw-semibold mb-1">
                {{ member.name }}
              </h2>

              <p class="text-primary fw-semibold mb-2">
                {{ member.role }}
              </p>

              <p class="text-muted mb-0">
                {{ member.description }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Member {
  name: string
  role: string
  description: string
  photo: string
}

const team = ref<Member[]>([
  {
    name: 'Laura Fernández',
    role: 'Fisioterapeuta Deportiva',
    description:
      'Especialista en lesiones musculares y readaptación deportiva. Más de 8 años de experiencia.',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Aidan'
  },
  {
    name: 'Carlos Martínez',
    role: 'Fisioterapeuta en Rehabilitación',
    description:
      'Experto en recuperación postquirúrgica y tratamiento de lesiones traumatológicas.',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Brooklynn'
  },
  {
    name: 'Ana López',
    role: 'Especialista en Terapias Manuales',
    description:
      'Apasionada de las técnicas manuales para aliviar el dolor y mejorar la movilidad.',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Destiny'
  },
  {
    name: 'Javier Gómez',
    role: 'Fisioterapeuta Neurológico',
    description:
      'Trabaja con pacientes neurológicos para mejorar su autonomía y calidad de vida.',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Emery'
  },
  {
    name: 'María Sánchez',
    role: 'Fisioterapeuta Geriátrica',
    description:
      'Especializada en movilidad, equilibrio y prevención de caídas en personas mayores.',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Caleb'
  },
  {
    name: 'Daniel Ruiz',
    role: 'Readaptador Funcional',
    description:
      'Acompaña al paciente en la vuelta segura a la actividad física tras una lesión.',
    photo: 'https://api.dicebear.com/7.x/personas/svg?seed=Daniel'
  }
])
</script>

<style scoped>
.worker-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid rgba(15, 159, 174, 0.25);
  background: #ffffff;
}
</style>
