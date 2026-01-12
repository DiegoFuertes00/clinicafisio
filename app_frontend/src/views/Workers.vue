<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <main id="main-content" class="container py-5">
    <!-- HEADER -->
    <header class="mb-5 d-flex justify-content-between align-items-start">
      <div>
        <h1 class="fw-bold mb-1">Área de empleados</h1>
        <p class="text-muted mb-0">
          Gestión profesional, agenda y formación
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
      <!-- PERFIL EMPLEADO -->
      <section class="col-lg-4">
        <article class="card card-leon h-100">
          <div class="card-body text-center">
            <!-- Avatar -->
            <img
              :src="empleado.avatar"
              alt=""
              class="employee-avatar mb-3"
              aria-hidden="true"
            />

            <!-- Título + lápiz -->
            <div class="d-flex justify-content-center align-items-center gap-2 mb-2">
              <h2 class="h5 fw-bold mb-0">Mi perfil</h2>
              <button
                class="btn btn-sm btn-outline-secondary"
                @click="activarEdicion"
                aria-label="Editar perfil"
              >
                ✏️
              </button>
            </div>

            <!-- FORM PERFIL -->
            <form @submit.prevent="guardarPerfil" class="text-start">
              <div class="mb-2">
                <label class="form-label">Nombre</label>
                <input
                  v-model="empleado.nombre"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <div class="mb-2">
                <label class="form-label">Rol</label>
                <input
                  v-model="empleado.rol"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <div class="mb-2">
                <label class="form-label">Especialidad</label>
                <input
                  v-model="empleado.especialidad"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <div class="mb-2">
                <label class="form-label">Email</label>
                <input
                  v-model="empleado.email"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Teléfono</label>
                <input
                  v-model="empleado.telefono"
                  class="form-control"
                  :disabled="!editandoPerfil"
                />
              </div>

              <!-- Acciones -->
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

      <!-- CONTENIDO -->
      <section class="col-lg-8">
        <!-- AGENDA -->
        <article class="card card-leon mb-4">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="h5 fw-bold mb-0">Agenda diaria</h2>

              <input
                type="date"
                v-model="diaSeleccionado"
                class="form-control w-auto"
              />
            </div>

            <p v-if="agendaFiltrada.length === 0" class="text-muted">
              No hay citas para este día.
            </p>

            <ul v-else class="list-group list-group-flush">
              <li
                v-for="(cita, index) in agendaFiltrada"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-3"
              >
                <div>
                  <strong>{{ cita.hora }} · {{ cita.paciente }}</strong><br />
                  <span class="text-muted">{{ cita.servicio }}</span>
                </div>

                <span
                  class="badge"
                  :class="{
                    'bg-secondary': cita.estado === 'pendiente',
                    'bg-success': cita.estado === 'realizada',
                    'bg-danger': cita.estado === 'cancelada'
                  }"
                >
                  {{ cita.estado }}
                </span>

                <div class="d-flex gap-2">
                  <button
                    class="btn btn-outline-success btn-sm"
                    @click="marcarRealizada(index)"
                    :disabled="cita.estado !== 'pendiente'"
                  >
                    ✔
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="cancelarCita(index)"
                    :disabled="cita.estado !== 'pendiente'"
                  >
                    ✖
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </article>

        <!-- CURSOS -->
        <article class="card card-leon">
          <div class="card-body">
            <h2 class="h5 fw-bold mb-3">Cursos y formación</h2>

            <ul class="list-group list-group-flush">
              <li
                v-for="(curso, index) in cursos"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{{ curso.titulo }}</strong><br />
                  <span class="text-muted">
                    {{ curso.fecha }} · {{ curso.horas }} h
                  </span>
                </div>

                <button
                  class="btn btn-sm course-btn"
                  :class="curso.inscrito ? 'btn-success' : 'btn-outline-primary'"
                  @click="toggleInscripcion(curso)"
                >
                  {{ curso.inscrito ? 'Inscrita' : 'Inscribirme' }}
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
  router.push('/login')
}

/* PERFIL */
const empleado = ref({
  nombre: 'Laura Fernández',
  rol: 'Fisioterapeuta',
  especialidad: 'Fisioterapia deportiva',
  email: 'laura@clinicafisio.com',
  telefono: '600 987 654',
  avatar: 'https://api.dicebear.com/9.x/personas/svg?seed=Aidan'
})

const original = JSON.parse(JSON.stringify(empleado.value))
const editandoPerfil = ref(false)
const perfilGuardado = ref(false)

function activarEdicion() {
  editandoPerfil.value = true
}

function guardarPerfil() {
  editandoPerfil.value = false
  perfilGuardado.value = true
  setTimeout(() => (perfilGuardado.value = false), 1500)
}

function cancelarEdicion() {
  Object.assign(empleado.value, original)
  editandoPerfil.value = false
}

/* AGENDA */
const diaSeleccionado = ref('2026-01-15')

const agenda = ref([
  {
    fecha: '2026-01-15',
    hora: '09:00',
    paciente: 'Pepe Pérez',
    servicio: 'Fisioterapia deportiva',
    estado: 'pendiente'
  },
  {
    fecha: '2026-01-15',
    hora: '10:00',
    paciente: 'María López',
    servicio: 'Rehabilitación',
    estado: 'pendiente'
  }
])

const agendaFiltrada = computed(() =>
  agenda.value.filter(c => c.fecha === diaSeleccionado.value)
)

function marcarRealizada(index: number) {
  
}

function cancelarCita(index: number) {

}

/* CURSOS */
const cursos = ref([
  {
    titulo: 'Actualización en fisioterapia deportiva',
    fecha: 'Febrero 2026',
    horas: 20,
    inscrito: false
  },
  {
    titulo: 'Prevención de lesiones en pacientes mayores',
    fecha: 'Marzo 2026',
    horas: 12,
    inscrito: true
  },
  {
    titulo: 'Terapias manuales avanzadas',
    fecha: 'Abril 2026',
    horas: 16,
    inscrito: false
  }
])

function toggleInscripcion(curso: any) {
  curso.inscrito = !curso.inscrito
}
</script>

<style scoped>
.employee-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid rgba(15, 159, 174, 0.35);
  background: #ffffff;
}

/* ===== BOTONES CURSOS ===== */

.course-btn {
  font-weight: 600;
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
}

.course-btn.btn-outline-primary {
  background: rgba(15, 159, 174, 0.1);
  border-color: rgba(15, 159, 174, 0.4);
  color: var(--color-primary);
}

.course-btn.btn-outline-primary:hover {
  background: rgba(15, 159, 174, 0.2);
}

.course-btn.btn-success {
  box-shadow: 0 6px 16px rgba(25, 135, 84, 0.35);
}
</style>
