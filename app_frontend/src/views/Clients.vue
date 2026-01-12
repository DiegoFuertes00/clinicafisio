<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <main id="main-content" class="container py-5">
    <!-- HEADER -->
  <header class="mb-5 d-flex justify-content-between align-items-start">
  <div>
    <h1 class="fw-bold mb-1">Área de cliente</h1>
    <p class="text-muted mb-0">
      Gestiona tus citas y tu información personal
    </p>
  </div>

  <button
    class="btn btn-outline-danger btn-sm"
    @click="logout"
    aria-label="Cerrar sesión"
  >
    Cerrar sesión
  </button>
</header>

    <div class="row g-4">
      <!-- PERFIL -->
      <section class="col-lg-4">
        <article class="card card-leon h-100">
          <div class="card-body text-center">
            <!-- Foto -->
            <img
              :src="perfil.avatar"
              alt=""
              class="profile-avatar mb-3"
              aria-hidden="true"
            />

            <!-- Header perfil -->
            <div class="d-flex justify-content-center align-items-center gap-2 mb-3">
              <h2 class="h5 fw-bold mb-0">Mi perfil</h2>

              <!-- Lápiz -->
              <button
                class="btn btn-sm btn-outline-secondary"
                @click="toggleEditar"
                aria-label="Editar perfil"
              >
                ✏️
              </button>
            </div>

            <!-- DATOS -->
            <form @submit.prevent="guardarPerfil">
              <div class="mb-2 text-start">
                <label class="form-label">Nombre</label>
                <input
                  v-model="perfil.nombre"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <div class="mb-2 text-start">
                <label class="form-label">Email</label>
                <input
                  v-model="perfil.email"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <div class="mb-3 text-start">
                <label class="form-label">Teléfono</label>
                <input
                  v-model="perfil.telefono"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <!-- Acciones solo si editando -->
              <div v-if="editandoPerfil" class="d-flex gap-2">
                <button class="btn btn-primary w-100">Guardar</button>
                <button
                  type="button"
                  class="btn btn-outline-secondary w-100"
                  @click="cancelarEdicion"
                >
                  Cancelar
                </button>
              </div>
            </form>

            <p v-if="perfilGuardado" class="text-success small mt-2">
              ✔ Perfil actualizado (demo)
            </p>
          </div>
        </article>
      </section>

      <!-- CITAS -->
      <section class="col-lg-8">
        <!-- NUEVA CITA -->
        <article class="card card-leon mb-4">
          <div class="card-body">
            <h2 class="h5 fw-bold mb-3">Reservar cita</h2>

            <!-- PASO 1 -->
            <div class="row g-3 mb-3">
              <div class="col-md-6">
                <label class="form-label">Tratamiento</label>
                <select v-model="reserva.servicio" class="form-select">
                  <option disabled value="">Selecciona tratamiento</option>
                  <option v-for="s in servicios" :key="s">{{ s }}</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Día</label>
                <input type="date" v-model="reserva.fecha" class="form-control" />
              </div>
            </div>

            <!-- PASO 2 -->
            <div v-if="mostrarDisponibilidad" class="mb-3">
              <label class="form-label">Horas disponibles</label>

              <div class="d-flex flex-wrap gap-2">
                <button
                  v-for="slot in horasDisponibles"
                  :key="slot.hora"
                  class="btn btn-outline-primary btn-sm"
                  :class="{ active: reserva.hora === slot.hora }"
                  @click="seleccionarHora(slot)"
                >
                  {{ slot.hora }}
                </button>
              </div>
            </div>

            <!-- PASO 3 -->
            <div v-if="reserva.hora" class="mb-3">
              <p class="mb-1">
                👨‍⚕️ Profesional asignado:
                <strong>{{ reserva.profesional }}</strong>
              </p>
            </div>

            <button
              class="btn btn-primary"
              :disabled="!reservaCompleta"
              @click="confirmarCita"
            >
              Confirmar cita
            </button>
          </div>
        </article>

        <!-- LISTADO -->
        <article class="card card-leon">
          <div class="card-body">
            <h2 class="h5 fw-bold mb-3">Mis citas</h2>

            <p v-if="citas.length === 0" class="text-muted">
              No tienes citas programadas.
            </p>

            <ul v-else class="list-group list-group-flush">
              <li
                v-for="(cita, index) in citas"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{{ cita.servicio }}</strong><br />
                  <span class="text-muted">
                    {{ cita.fecha }} · {{ cita.hora }} · {{ cita.profesional }}
                  </span>
                </div>

                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="anularCita(index)"
                >
                  Anular
                </button>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  router.push('/login') // o '/login/clientes' si prefieres
}
/* PERFIL */
const perfil = ref({
  nombre: 'Pepe Pérez',
  email: 'pepe@email.com',
  telefono: '600 123 456',
  avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=Pepe'
})

const perfilOriginal = JSON.parse(JSON.stringify(perfil.value))
const editandoPerfil = ref(false)
const perfilGuardado = ref(false)

function toggleEditar() {
  editandoPerfil.value = true
}

function guardarPerfil() {
  editandoPerfil.value = false
  perfilGuardado.value = true
  setTimeout(() => (perfilGuardado.value = false), 1500)
}

function cancelarEdicion() {
  Object.assign(perfil.value, perfilOriginal)
  editandoPerfil.value = false
}

/* RESERVAS */
const servicios = [
  'Fisioterapia deportiva',
  'Rehabilitación',
  'Terapias manuales',
  'Readaptación funcional'
]

const horasDisponibles = [
  { hora: '09:00', profesional: 'Laura Fernández' },
  { hora: '10:00', profesional: 'Carlos Martínez' },
  { hora: '11:00', profesional: 'Ana López' },
  { hora: '12:00', profesional: 'Javier Gómez' }
]

const reserva = ref({
  servicio: '',
  fecha: '',
  hora: '',
  profesional: ''
})

const mostrarDisponibilidad = computed(
  () => reserva.value.servicio && reserva.value.fecha
)

function seleccionarHora(slot: any) {
  reserva.value.hora = slot.hora
  reserva.value.profesional = slot.profesional
}

const reservaCompleta = computed(
  () =>
    reserva.value.servicio &&
    reserva.value.fecha &&
    reserva.value.hora &&
    reserva.value.profesional
)

/* CITAS */
const citas = ref<any[]>([])

function confirmarCita() {
  citas.value.push({ ...reserva.value })
  reserva.value = { servicio: '', fecha: '', hora: '', profesional: '' }
}

function anularCita(index: number) {
  citas.value.splice(index, 1)
}
</script>

<style scoped>
.profile-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid rgba(15, 159, 174, 0.3);
  background: #ffffff;
}

/* ===== HORAS DISPONIBLES ===== */

.btn-outline-primary {
  --slot-bg: rgba(15, 159, 174, 0.08);
  --slot-border: rgba(15, 159, 174, 0.35);
  --slot-active: var(--color-primary);

  background-color: var(--slot-bg);
  border-color: var(--slot-border);
  color: var(--color-primary);
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}

/* Hover */
.btn-outline-primary:hover {
  background-color: rgba(15, 159, 174, 0.18);
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
  transform: translateY(-1px);
}

/* Activo (hora seleccionada) */
.btn-outline-primary.active,
.btn-outline-primary:active {
  background-color: var(--slot-active);
  border-color: var(--slot-active);
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(15, 159, 174, 0.35);
}

/* Focus accesible */
.btn-outline-primary:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

</style>
