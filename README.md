# 🪳 Fumigaciones Buenos Aires - Landing Page & Programmatic SEO

**Sitio web oficial:** [https://xn--fumigacines-buenosaires-djc.com.ar/](https://xn--fumigacines-buenosaires-djc.com.ar/)

Sitio web estático de ultra-alta velocidad desarrollado para un servicio profesional de control de plagas y desinfección en Buenos Aires (CABA y GBA). El proyecto está diseñado para maximizar la captación de leads a través de WhatsApp, priorizando un rendimiento impecable en dispositivos móviles y una estrategia agresiva de **SEO Local Programático**.

## 🚀 Arquitectura y Optimización SEO

### 1. Programmatic SEO (Generación Masiva de Rutas)
El sitio utiliza el motor estático de Astro (`getStaticPaths`) para generar más de 100 landing pages dedicadas a cada municipio y barrio de cobertura. 
* **Preservación de Slugs:** Se mantuvo la estructura indexada original (`/fumigacion-zona-[slug]/`) para no perder el posicionamiento histórico.
* **Inyección Dinámica:** Las variables de ubicación (`nombreZona`, `region`) se inyectan automáticamente en los meta-títulos, descripciones, etiquetas `<h1>` y textos comerciales, logrando una relevancia local perfecta para Google.

### 2. Directorio de Cobertura e Interlinking
Se implementó una página dedicada de **Directorio de Zonas** (`/zonas-de-cobertura/`) accesible desde el Footer. Esta arquitectura de enlaces internos (Interlinking) facilita que las arañas de Google rastreen e indexen todas las páginas de barrios rápidamente.

### 3. Rendimiento Extremo
* **Framework:** Construido con [Astro.js](https://astro.build/) para generar HTML estático y eliminar el JavaScript innecesario en el cliente.
* **Imágenes Optimizadas:** Uso de formatos WebP de próxima generación con políticas estrictas de `fetchpriority="high"` y `loading="eager"` para el Hero, asegurando un Largest Contentful Paint (LCP) instantáneo.
* **Estilos:** Diseño creado con [Tailwind CSS](https://tailwindcss.com/), utilizando un sistema de variables personalizadas para mantener una paleta de colores limpia (Blanco, Slate y Verde Marca) que transmite higiene y profesionalismo.

### 4. Conversión Inteligente
* Los botones de llamada a la acción (CTA) de WhatsApp leen la URL en la que está el usuario y pre-arman el mensaje con su ubicación exacta (ej. *"Hola, necesito fumigación de plagas en Las Lomitas"*), mejorando la tasa de respuesta y facilitando el presupuesto.

## 🛠️ Stack Tecnológico

* **Astro.js** (SSG - Static Site Generation)
* **Tailwind CSS** (Styling & Design System)
* **TypeScript** (Tipado estricto para las propiedades dinámicas de SEO)
* **Schema.org** (JSON-LD inyectado para FAQs y Servicios Locales)