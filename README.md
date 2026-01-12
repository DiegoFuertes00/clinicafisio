# Sitio web accesible para LEONFISIO

Este proyecto corresponde a un **prototipo web accesible** para la clínica de fisioterapia **LEONFISIO**, desarrollado con fines académicos.  
El objetivo principal es evaluar aspectos de **diseño, interacción y accesibilidad web**, siguiendo buenas prácticas y criterios WCAG.

El prototipo se ejecuta **completamente en local** y no requiere conexión a internet una vez realizada la instalación inicial.

---

## Requisitos previos

Antes de ejecutar el prototipo es necesario tener instalado:

- **Node.js** (versión recomendada: LTS)
- **npm** (incluido con Node.js)

Para comprobar si Node.js está instalado correctamente, ejecutar en la terminal:

```bash
node -v
npm -v
````
---
## Ejecución del prototipo (modo local)

Seguir los siguientes pasos desde una terminal:

1. Acceder a la carpeta del frontend:
   ```bash
   cd app_frontend
2. Instalar las dependencias del proyecto:
 ```bash
   npm install
   ````
3. Ejecutar el servidor en desarrollo:
 ```bash
   npm run dev
   ````
4. El sistema mostrará en consola una URL similar a: http://localhost:5173
5. Abrir dicha dirección en el navegador para interactuar con el prototipo.

---
## Funcionamiento offline

- Una vez instaladas las dependencias, el prototipo puede ejecutarse sin conexión a internet.
- Todas las pantallas y flujos del prototipo son accesibles desde el navegador.
- No se realiza conexión a servicios externos ni a bases de datos reales.
