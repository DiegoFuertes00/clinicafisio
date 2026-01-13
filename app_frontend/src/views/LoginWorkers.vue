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
                <h1 class="h3 fw-bold mb-1">Acceso empleados</h1>
                <p class="text-muted mb-0">
                  Área privada del personal de la clínica
                </p>
              </div>

              <!-- Error -->
              <div v-if="error" class="alert alert-danger mt-3" role="alert">
                {{ error }}
              </div>

              <!-- Formulario -->
              <form class="mt-4" @submit.prevent="login">

                <!-- Usuario -->
                <div class="mb-3">
                  <label for="user" class="form-label">Usuario</label>
                  <input
                    id="user"
                    v-model="user"
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
                      v-model="password"
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
                  Iniciar sesión
                </button>
              </form>

            </div>
          </section>

          <p class="text-center text-muted mt-3 mb-0 small">
            Prototipo · usuario: <strong>pepe</strong> · contraseña: <strong>1234</strong>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref('')
const password = ref('')
const error = ref('')
const showPassword = ref(false)

function login() {
  error.value = ''

  if (user.value === 'pepe' && password.value === '1234') {
    router.push('/workers') // 👈 ruta destino
  } else {
    error.value = 'Usuario o contraseña incorrectos'
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

.form-control,
.btn {
  border-radius: 0.9rem;
}

.input-group .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
