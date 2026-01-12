<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <main id="main-content" class="home">

    <!-- HERO (INLINE) -->
    <section class="hero">
      <img
        class="hero-image"
        :src="heroImage"
        alt="Paciente recibiendo tratamiento de fisioterapia"
      />

      <div class="hero-content">
        <span class="hero-badge">
          Clínica de fisioterapia en León
        </span>

        <h1 class="hero-title">
          Recupera tu movilidad, recupera tu vida.
        </h1>

        <p class="hero-subtitle">
          En <strong>Clínica LeonFisio</strong> te acompañamos en todo el proceso de recuperación
          con tratamientos personalizados y un equipo especializado en fisioterapia deportiva y del día a día.
        </p>

        <div class="d-flex flex-wrap align-items-center gap-3 mt-3">
          <router-link
            to="/login"
            class="btn btn-primary btn-lg"
            aria-label="Reserva tu cita con nosotros"
          >
            Reserva tu cita
          </router-link>

          <router-link
            to="/services"
            class="btn btn-outline-primary btn-lg"
            aria-label="Ver todos nuestros tratamientos"
          >
            Ver tratamientos
          </router-link>
        </div>

        <p class="hero-note">
          Primera valoración gratuita de 15 minutos para nuevos pacientes.
        </p>
      </div>
    </section>

    <!-- SECCIÓN CLÍNICA -->
    <section class="clinic-section">
      <div class="container py-5 text-center">
        <h2 class="section-title">Nuestra clínica</h2>
        <p class="section-subtitle">
          Un espacio moderno, cómodo y pensado para tu recuperación
        </p>

        <div class="clinic-placeholder">
          (Fotos de la clínica)
        </div>
      </div>
    </section>

    <!-- SECCIÓN RESEÑAS -->
    <section class="reviews-section">
      <div class="container py-5">
        <h2 class="section-title text-center mb-4">
          Opiniones de nuestros pacientes
        </h2>

        <div class="row g-4">
          <div class="col-md-4">
            <article class="review-card">
              <p class="review-text">
                “Trato cercano y profesional. Me explicaron todo desde el primer momento
                y noté mejoría muy rápido.”
              </p>
              <p class="review-author">
                — María González ★★★★★
              </p>
            </article>
          </div>

          <div class="col-md-4">
            <article class="review-card">
              <p class="review-text">
                “Instalaciones modernas y equipo muy preparado.
                Totalmente recomendable.”
              </p>
              <p class="review-author">
                — Javier López ★★★★★
              </p>
            </article>
          </div>

          <div class="col-md-4">
            <article class="review-card">
              <p class="review-text">
                “Buen ambiente, horarios flexibles y tratamientos personalizados.
                Volveré sin duda.”
              </p>
              <p class="review-author">
                — Ana Martínez ★★★★☆
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import heroImage from '@/assets/fisioterapia-deportiva.jpg'
</script>

<style scoped>
/* ===== HERO ===== */

.hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%) contrast(1.05) brightness(0.85);
  z-index: -2;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(20, 24, 23, 0.85),
    rgba(34, 40, 38, 0.88)
  );
  z-index: -1;
}

.hero-content {
  max-width: 720px;
  padding: 2.5rem 1.5rem;
  color: #f5f5f2;
}

.hero-badge {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(210, 215, 205, 0.15);
  color: #d2d7cd;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.2rem;
}

.hero-subtitle {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #e1e3dc;
}

.hero-note {
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #cfd4c8;
}

.clinic-section {
  background: #f5fbff;
  padding: 6rem 0;
}

.clinic-section .container {
  background: #ffffff;
  border-radius: 1.5rem;
  padding: 4rem 3rem;
  box-shadow: 0 20px 50px rgba(31, 59, 114, 0.18);
  border: 2px solid rgba(31, 59, 114, 0.25);
}

.clinic-placeholder {
  height: 240px;
  border-radius: 1rem;
  border: 2px dashed rgba(31, 59, 114, 0.35);
  background: #f9fbfd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

/* ===== RESEÑAS · OPCIÓN 3 ===== */

.reviews-section {
  background: #eef6fa;
  padding: 5rem 0;
}

.review-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 1.75rem;
  border-left: 6px solid var(--color-primary);
  box-shadow: 0 16px 40px rgba(31, 59, 114, 0.25);
}


</style>
