<template>
  <section class="p-4" aria-label="Tabla de servicios y precios">
    <h2 class="visually-hidden">Lista detallada de servicios</h2>
    <DataTable
      :value="services"
      class="p-datatable-gridlines"
      :pt="{
        table: { role: 'table', 'aria-label': 'Servicios de fisioterapia' }
      }"
    >
      <Column field="name" header="Servicio" />
      <Column field="description" header="Descripción" />
      <Column field="price" header="Precio" />
    </DataTable>
  </section>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

interface Service {
  name: string
  description: string
  price: string
}

// Lista de servicios de ejemplo
const services: Service[] = [
  {
    name: 'Fisioterapia Deportiva',
    description: 'Tratamientos personalizados para lesiones musculares y articulares.',
    price: '40 euros/h'
  },
  {
    name: 'Rehabilitación Física',
    description: 'Recupera movilidad y fuerza tras cirugías o lesiones graves.',
    price: '40 euros/sesion'
  },
  {
    name: 'Terapias Manuales',
    description: 'Masajes terapéuticos y técnicas manuales para aliviar tensiones.',
    price: '30 euros/sesión'
  }
]


</script>

<style>
/* Estilos globales para la tabla (no scoped para que afecte a PrimeVue) */
.p-datatable {
  border: 1px solid var(--color-border);
}

.p-datatable th {
  background-color: var(--color-primary) !important;
  color: white !important;
  padding: 1rem 1.5rem !important;
  font-weight: 600;
}

.p-datatable td {
  color: var(--color-text) !important;
  padding: 1rem 1.5rem !important;
  background-color: var(--color-surface) !important;
}

.p-datatable .p-datatable-tbody > tr:nth-child(even) td {
  background-color: var(--color-bg) !important;
}

.p-datatable .p-datatable-tbody > tr:hover td {
  background-color: var(--color-primary) !important;
  opacity: 0.1;
}

[data-theme="dark"] .p-datatable .p-datatable-tbody > tr:hover td {
  background-color: rgba(18, 184, 201, 0.2) !important;
}

i {
  font-size: 1.5rem;
}
</style>
