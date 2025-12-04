<template>
  <div class="hero">
    <!-- Imagen de fondo -->
    <img class="hero-image" :src="heroImage" alt="Hero Clínica" />
  
   
    <!-- Contenido centrado -->
    <div class="hero-content text-center">
      <h1 class="display-4 fw-bold">Recupera tu bienestar con nosotros</h1>
      <p class="lead mb-4">
        <strong>En Clínica LeonFisio te ayudamos a volver a moverte sin dolor.</strong>
      </p>
      <router-link to="/contact" class="btn btn-primary btn-lg">
        Reserva tu cita
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import heroImage from '@/assets/fisioterapia-deportiva.jpg' 
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 80vh; /* altura del hero */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* la imagen cubre toda la sección */
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: black; /* texto negro */
  padding: 0 15px;
}
</style>
