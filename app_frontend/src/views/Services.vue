<template>
  <HeaderComp></HeaderComp>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
  <main id="main-content">
    <section class="container text-center py-5">
      <h1 class="mb-4 fw-bold">Nuestros Servicios</h1>
      <div class="row g-4">
        <div class="col-md-4">
          <article class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-heart-pulse display-5 text-primary mb-3" aria-hidden="true"></i>
              <h2 class="card-title fw-semibold h5">Fisioterapia Deportiva</h2>
              <p class="card-text">
                Tratamientos personalizados para lesiones musculares y articulares.
              </p>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-person-walking display-5 text-primary mb-3" aria-hidden="true"></i>
              <h2 class="card-title fw-semibold h5">Rehabilitación Física</h2>
              <p class="card-text">
                Recupera movilidad y fuerza tras cirugías o lesiones graves.
              </p>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="card h-100 shadow-sm border-0">
            <div class="card-body">
              <i class="bi bi-flower3 display-5 text-primary mb-3" aria-hidden="true"></i>
              <h2 class="card-title fw-semibold h5">Terapias Manuales</h2>
              <p class="card-text">
                Masajes terapéuticos y técnicas manuales para aliviar tensiones.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <services-table></services-table>
  </main>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import ServicesTable from '@/components/ServicesTable.vue';
</script>

<style>
</style>