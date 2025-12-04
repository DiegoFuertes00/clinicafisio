<template>
  <div class="p-4">
    
    <DataTable :value="services" class="p-datatable-gridlines">
      <Column field="name" header="Servicio" />
      <Column field="description" header="Descripción" />
      <Column field="price" header="Precio" />
    </DataTable>
  </div>
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

<style scoped>
/* Opcional: mejora visual sin tema */
.p-datatable {
  border: 1px solid #0288d1; /* azul */
}

.p-datatable th {
  background-color: #0288d1;
  color: white;
}

.p-datatable td {
  color: #333;
}

i {
  font-size: 1.5rem;
}
</style>
