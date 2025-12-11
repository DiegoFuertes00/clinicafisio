<template>
  <HeaderComp></HeaderComp>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
  <main id="main-content">
    <section class="cta-section text-center">
      <div class="container">
        <h2 class="fw-bold mb-2">¿Listo para comenzar tu recuperación?</h2>
        <h1 class="fw-bold mb-3">Contacta con nosotros</h1>
        <p class="mb-0">
          Te ayudamos a encontrar el tratamiento que mejor se adapta a ti.
        </p>
      </div>
    </section>

    <section class="container py-5">
      <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
        <h2 class="text-center mb-4" style="color: var(--color-secondary)">Formulario de contacto</h2>

        <div class="form-group">
          <label for="name" class="form-label">
            Nombre completo <span aria-label="campo obligatorio">*</span>
          </label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="form-control"
            required
            aria-required="true"
            placeholder="Introduce tu nombre"
          />
        </div>

        <div class="form-group">
          <label for="email" class="form-label">
            Correo electrónico <span aria-label="campo obligatorio">*</span>
          </label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="form-control"
            required
            aria-required="true"
            placeholder="tu@email.com"
          />
        </div>

        <div class="form-group">
          <label for="phone" class="form-label">Teléfono</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            class="form-control"
            placeholder="666 123 456"
          />
        </div>

        <div class="form-group">
          <label for="service" class="form-label">
            Servicio de interés <span aria-label="campo obligatorio">*</span>
          </label>
          <select
            id="service"
            v-model="formData.service"
            class="form-select"
            required
            aria-required="true"
          >
            <option value="" disabled>Selecciona un servicio</option>
            <option value="fisioterapia">Fisioterapia</option>
            <option value="rehabilitacion">Rehabilitación</option>
            <option value="masajes">Masajes terapéuticos</option>
            <option value="deportiva">Fisioterapia deportiva</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message" class="form-label">
            Mensaje <span aria-label="campo obligatorio">*</span>
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            class="form-textarea"
            required
            aria-required="true"
            placeholder="Cuéntanos cómo podemos ayudarte..."
          ></textarea>
        </div>

        <div class="form-group">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <input
              type="checkbox"
              id="privacy"
              v-model="formData.privacy"
              required
              aria-required="true"
              style="width: auto; cursor: pointer;"
            />
            <label for="privacy" style="margin: 0; cursor: pointer; font-weight: normal;">
              Acepto la política de privacidad <span aria-label="campo obligatorio">*</span>
            </label>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary">
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  privacy: false
});

const handleSubmit = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value);
  alert('Formulario enviado correctamente. Pronto nos pondremos en contacto contigo.');

  // Reiniciar el formulario
  formData.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  };
};
</script>

<style scoped>
</style>