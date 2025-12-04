<template>
    <HeaderComp></HeaderComp>
      <div class="container text-center">
        <h2 class="mb-4 fw-bold">Nuestros Servicios</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="bi bi-heart-pulse display-5 text-primary mb-3"></i>
                <h5 class="card-title fw-semibold">Fisioterapia Deportiva</h5>
                <p class="card-text">
                  Tratamientos personalizados para lesiones musculares y articulares.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="bi bi-person-walking display-5 text-primary mb-3"></i>
                <h5 class="card-title fw-semibold">Rehabilitación Física</h5>
                <p class="card-text">
                  Recupera movilidad y fuerza tras cirugías o lesiones graves.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">
                <i class="bi bi-flower3 display-5 text-primary mb-3"></i>
                <h5 class="card-title fw-semibold">Terapias Manuales</h5>
                <p class="card-text">
                  Masajes terapéuticos y técnicas manuales para aliviar tensiones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <services-table></services-table>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import ServicesTable from '@/components/ServicesTable.vue';
</script>

<style>
</style>