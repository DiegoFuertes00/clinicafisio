<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <main id="main-content" class="home">
    <!-- HERO -->
    <Hero />

    <!-- SECCIÓN FOTOS (PLACEHOLDER) -->
    <section class="clinic-space-section">
      <div class="container text-center py-5">
        <h2 class="fw-bold mb-3">Nuestra clínica</h2>
        <p class="text-muted mb-4">
          Instalaciones modernas pensadas para tu bienestar
        </p>

        <!-- Placeholder visual -->
        <div class="clinic-placeholder">
          <p class="placeholder-text">(Fotos de la clínica)</p>
        </div>
      </div>
    </section>

    <!-- SECCIÓN RESEÑAS -->
    <section class="reviews-section">
      <div class="container py-5">
        <header class="text-center mb-5">
          <h2 class="fw-bold mb-2">Opiniones de nuestros pacientes</h2>
          <p class="text-muted">
            Experiencias reales de personas que ya han confiado en nosotros
          </p>
        </header>

        <div class="row g-4">
          <div class="col-md-4">
            <article class="review-card">
              <strong>María González</strong>
              <p class="review-stars">★★★★★</p>
              <p class="review-text">
                Trato cercano y profesional. Me ayudaron muchísimo con mi lesión.
              </p>
            </article>
          </div>

          <div class="col-md-4">
            <article class="review-card">
              <strong>Javier López</strong>
              <p class="review-stars">★★★★★</p>
              <p class="review-text">
                Clínica moderna y muy organizada. Totalmente recomendable.
              </p>
            </article>
          </div>

          <div class="col-md-4">
            <article class="review-card">
              <strong>Ana Martínez</strong>
              <p class="review-stars">★★★★☆</p>
              <p class="review-text">
                Buen ambiente y grandes profesionales. Repetiré sin duda.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
</script>

<style scoped>
/* ===== SECCIÓN CLÍNICA ===== */

.clinic-space-section {
  background: radial-gradient(
    circle at top,
    #f5fbff 0%,
    #e3f4f8 60%,
    #d6edf3 100%
  );
}

.clinic-placeholder {
  height: 240px;
  border-radius: 1rem;
  border: 2px dashed rgba(15, 159, 174, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
}

.placeholder-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  letter-spacing: 0.08em;
}

/* ===== RESEÑAS ===== */

.reviews-section {
  background: radial-gradient(
    circle at top,
    #ffffff 0%,
    #f0f6fa 50%,
    #e6eef4 100%
  );
}

.review-card {
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-soft);
  height: 100%;
}

.review-stars {
  color: #f5b301;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.review-text {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
