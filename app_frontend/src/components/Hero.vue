<template>
  <section class="hero">
    <img
      class="hero-image"
      :src="heroImage"
      alt="Paciente recibiendo tratamiento de fisioterapia"
    />

    <div class="hero-content">
      <span class="hero-badge">
        Clínica de fisioterapia en León
      </span>

      <h1 class="hero-title">
        Recupera tu movilidad, recupera tu vida.
      </h1>

      <p class="hero-subtitle">
        En <strong>Clínica LeonFisio</strong> te acompañamos en todo el proceso de recuperación
        con tratamientos personalizados y un equipo especializado en fisioterapia deportiva y del día a día.
      </p>

      <div class="d-flex flex-wrap align-items-center gap-3 mt-3">
        <router-link to="/login" class="btn btn-primary btn-lg" aria-label="Reserva tu cita con nosotros">
          Reserva tu cita
        </router-link>
        <router-link to="/services" class="btn btn-outline-primary btn-lg" aria-label="Ver todos nuestros tratamientos">
          Ver tratamientos
        </router-link>
      </div>

      <p class="hero-note">
        Primera valoración gratuita de 15 minutos para nuevos pacientes.
      </p>  
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImage from '@/assets/fisioterapia-deportiva.jpg' 
</script>


