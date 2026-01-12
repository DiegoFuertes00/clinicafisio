<script setup lang="ts"></script>

<template>
  <footer class="footer-leon mt-auto">
    <div class="container">
      <div class="row gy-4">

        <!-- Clínica -->
        <div class="col-md-4">
          <h5 class="footer-title">Clínica LeonFisio</h5>
          <p class="footer-text">
            Centro especializado en fisioterapia y rehabilitación.
            Tratamientos personalizados para mejorar tu calidad de vida.
          </p>
        </div>

        <!-- Ubicación -->
        <div class="col-md-4">
          <h5 class="footer-title">Ubicación</h5>
          <p class="footer-text mb-1">
            <i class="bi bi-geo-alt-fill me-2"></i>
            Calle Ejemplo 123
          </p>
          <p class="footer-text">
            24001 · León · España
          </p>
        </div>

        <!-- Contacto -->
        <div class="col-md-4">
          <h5 class="footer-title">Contacto</h5>

          <p class="footer-text mb-1">
            <i class="bi bi-telephone-fill me-2"></i>
            <a href="tel:+34600123456">+34 600 123 456</a>
          </p>

          <p class="footer-text">
            <i class="bi bi-envelope-fill me-2"></i>
            <a href="mailto:clinicafisio@gmail.com">
              clinicafisio@gmail.com
            </a>
          </p>
        </div>

      </div>

      <hr class="footer-divider" />

      <div class="text-center footer-copy">
        © {{ new Date().getFullYear() }} Clínica LeonFisio · Todos los derechos reservados
      </div>
    </div>
  </footer>
</template>

