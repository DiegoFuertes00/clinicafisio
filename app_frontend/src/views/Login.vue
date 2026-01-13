<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <main id="main-content" class="auth-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7 col-xl-6">
          <section class="auth-card card card-leon">
            <div class="card-body p-4 p-md-5">
              <!-- Header -->
              <div class="text-center mb-4">
                <div class="auth-logo" aria-hidden="true">LF</div>
                <h1 class="h3 fw-bold mb-1">Acceso</h1>

                <p class="text-muted mb-2">
                  {{ mode === 'login'
                    ? 'Inicia sesión para reservar y gestionar tus citas.'
                    : 'Crea tu cuenta para reservar y llevar tu seguimiento.' }}
                </p>

                <!-- Integrado: alternativa teléfono -->
                <div class="auth-callout" role="note" aria-label="Reserva por teléfono">
                  <span class="auth-callout-label">O si lo prefieres:</span>
                  <a class="auth-callout-phone" href="tel:+34600123456">
                    📞 600 123 456
                  </a>
                </div>
              </div>

              <!-- Tabs -->
              <div class="auth-tabs" role="tablist" aria-label="Opciones de acceso">
                <button
                  class="auth-tab"
                  :class="{ active: mode === 'login' }"
                  type="button"
                  role="tab"
                  :aria-selected="mode === 'login'"
                  @click="setMode('login')"
                >
                  Iniciar sesión
                </button>

                <button
                  class="auth-tab"
                  :class="{ active: mode === 'signup' }"
                  type="button"
                  role="tab"
                  :aria-selected="mode === 'signup'"
                  @click="setMode('signup')"
                >
                  Crear cuenta
                </button>
              </div>

              <!-- Alerts -->
              <div v-if="error" class="alert alert-danger mt-3" role="alert">
                {{ error }}
              </div>
              <div v-if="success" class="alert alert-success mt-3" role="status">
                {{ success }}
              </div>

              <!-- Form -->
              <form class="mt-4" @submit.prevent="onSubmit">
                <!-- Nombre solo en registro -->
                <div v-if="mode === 'signup'" class="mb-3">
                  <label for="name" class="form-label">Nombre completo</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    placeholder="Ej. Laura Fernández"
                  />
                </div>

                <!-- Usuario / Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">Usuario</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="text"
                    class="form-control"
                    placeholder="pepe"
                  />
                </div>

                <!-- Contraseña -->
                <div class="mb-4">
                  <label for="password" class="form-label">Contraseña</label>

                  <div class="input-group">
                    <input
                      id="password"
                      v-model="form.password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      placeholder="1234"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="showPassword = !showPassword"
                      aria-label="Mostrar u ocultar contraseña"
                    >
                      <span aria-hidden="true">
                        {{ showPassword ? '🙈' : '👁️' }}
                      </span>
                    </button>
                  </div>
                </div>

                <!-- Submit -->
                <button type="submit" class="btn btn-primary w-100 btn-lg">
                  {{ mode === 'login' ? 'Entrar' : 'Crear cuenta' }}
                </button>

                <!-- Footer actions -->
                <div class="text-center mt-3">
                  <span class="text-muted">
                    {{ mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?' }}
                  </span>
                  <button
                    type="button"
                    class="btn btn-link auth-link"
                    @click="setMode(mode === 'login' ? 'signup' : 'login')"
                  >
                    {{ mode === 'login' ? 'Crear cuenta' : 'Iniciar sesión' }}
                  </button>
                </div>
              </form>
            </div>
          </section>

          <p class="text-center text-muted mt-3 mb-0 small">
            Demo · usuario: <strong>pepe</strong> · contraseña: <strong>1234</strong>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type Mode = 'login' | 'signup'
const mode = ref<Mode>('login')

const error = ref('')
const success = ref('')
const showPassword = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: ''
})

function setMode(next: Mode) {
  mode.value = next
  error.value = ''
  success.value = ''
  form.password = ''
}

function onSubmit() {
  error.value = ''
  success.value = ''

  if (mode.value === 'login') {
    if (form.email === 'pepe' && form.password === '1234') {
      router.push('/clients')
    } else {
      error.value = 'Usuario o contraseña incorrectos'
    }
  } else {
    success.value = 'Cuenta creada correctamente (demo)'
    setTimeout(() => {
      setMode('login')
    }, 800)
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 75vh;
  display: flex;
  align-items: center;
}

.auth-card {
  border: 1px solid var(--color-border);
}

.auth-logo {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin: 0 auto 0.75rem;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    var(--color-secondary),
    var(--color-primary)
  );
  box-shadow: var(--shadow-soft);
}

/* Callout integrado teléfono */
.auth-callout {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: rgba(15, 159, 174, 0.06);
  color: var(--color-text-secondary);
  font-size: 0.92rem;
}

.auth-callout-label {
  color: var(--color-text-secondary);
}

.auth-callout-phone {
  font-weight: 800;
  color: var(--color-secondary);
  text-decoration: none;
  white-space: nowrap;
}

.auth-callout-phone:hover,
.auth-callout-phone:focus {
  text-decoration: underline;
}

/* Tabs */
.auth-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding: 0.35rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: rgba(15, 159, 174, 0.06);
}

.auth-tab {
  border: none;
  background: transparent;
  border-radius: 999px;
  padding: 0.6rem 0.75rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.auth-tab.active {
  background: var(--color-surface);
  color: var(--color-text);
}

.auth-link {
  color: var(--color-secondary);
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}

.form-control,
.btn {
  border-radius: 0.9rem;
}

.input-group .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
