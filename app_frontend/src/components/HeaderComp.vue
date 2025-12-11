<script setup lang="ts">
import router from '@/router';
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-leon">
    <div class="container">
      <router-link class="navbar-brand" to="/" aria-label="Ir a inicio">
        LeonFisio
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Abrir menú de navegación"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/team">Equipo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contacto</router-link>
          </li>
          <li class="nav-item ms-2">
            <button
              @click="toggleTheme"
              @keydown.enter="toggleTheme"
              @keydown.space.prevent="toggleTheme"
              class="theme-toggle"
              :aria-label="theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'"
              tabindex="0"
            >
              <span v-if="theme === 'light'">🌙</span>
              <span v-else>☀️</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>