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
        <li class="nav-item dropdown">
  <a
    class="nav-link dropdown-toggle"
    href="#"
    id="accesoDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Acceso
  </a>

  <ul class="dropdown-menu" aria-labelledby="accesoDropdown">
    <li>
      <router-link class="dropdown-item" to="/login">
        Clientes
      </router-link>
    </li>
    <li>
      <router-link class="dropdown-item" to="/loginWorkers">
        Empleados
      </router-link>
    </li>
  </ul>
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
<style>
  /* ===== HEADER / NAVBAR ===== */

.navbar-leon {
  background-color: #f7f7f4; /* blanco roto */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 0.75rem 0;
}

.navbar-leon .navbar-brand {
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1c1f1d;
}

.navbar-leon .navbar-brand:hover {
  color: #1c1f1d;
}

/* Links */
.navbar-leon .nav-link {
  color: #6b6f6a;
  font-weight: 500;
  font-size: 0.95rem;
  margin-inline: 0.5rem;
  position: relative;
  transition: color 0.2s ease;
}

.navbar-leon .nav-link:hover,
.navbar-leon .router-link-active {
  color: #1c1f1d;
}

/* Subrayado minimal activo */
.navbar-leon .router-link-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.3rem;
  height: 2px;
  background-color: #6b7f63; /* oliva */
  border-radius: 999px;
}

/* Toggle tema */
.theme-toggle {
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 999px;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  background-color: rgba(0, 0, 0, 0.05);
  outline: none;
}

/* Botón hamburguesa */
.navbar-toggler {
  border: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

</style>