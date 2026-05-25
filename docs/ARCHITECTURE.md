# Arquitectura

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- pnpm

## Organización

```text
src/app
```

Contiene el layout global, estilos globales, metadata y páginas del App Router.

Rutas actuales:

- `/`
- `/servicios`
- `/soluciones`
- `/nosotros`
- `/contacto`

```text
src/sections
```

Contiene las secciones principales del home:

- Hero
- Manifiesto
- Servicios
- Diferencial
- Impacto
- Proceso
- Contacto

```text
src/components
```

Contiene componentes reutilizables:

- `layout`: header, footer y contenedores.
- `experience`: intro binaria, canvas, wordmark, terminal decorativa y glow interactivo.
- `motion`: wrappers de animación.
- `ui`: tarjetas y headings.
- `visual`: elementos visuales como la animación binaria.

```text
src/content
```

Contiene textos, listas y datos editables del sitio. Las secciones y páginas consumen contenido desde aquí para evitar mezclar layout con copy.

```text
src/config
```

Contiene metadatos, navegación, email público, keywords y datos configurables.

```text
src/lib
```

Contiene utilidades compartidas y variantes de animación.

## Restricciones

- No hay backend.
- No hay autenticación.
- No hay base de datos.
- No hay APIs internas.
- No hay analytics ni integraciones con claves.
- La página no debe depender de servicios externos para compilar.

## Convenciones

- Mantener `src/app/page.tsx` como composición de secciones.
- Mantener páginas internas en `src/app/{ruta}/page.tsx`.
- Evitar lógica de negocio dentro de componentes visuales.
- Preferir contenido estructurado para listas y cards.
- Usar componentes cliente solo cuando sean necesarios para estado, interacción o animación.
- Respetar `prefers-reduced-motion`.

## Experiencia Binaria

Los componentes de `src/components/experience` elevan la home sin cambiar la arquitectura multipágina:

- `binary-intro.tsx`: intro inicial de la home, con botón para saltar, control por `sessionStorage` y degradación para reduced motion.
- `binary-canvas.tsx`: lluvia binaria en canvas 2D. Se usa canvas para mantener bajo el número de nodos DOM y controlar densidad, velocidad y limpieza de `requestAnimationFrame`.
- `binary-wordmark.tsx`: formación visual de `CERO Y UNO` con texto accesible para lectores de pantalla.
- `code-terminal.tsx`: bloque decorativo de terminal con líneas de construcción del sistema.
- `interactive-glow.tsx`: luz sutil guiada por cursor en desktop, desactivada para touch o reduced motion.
- `scroll-reveal.tsx`: wrapper de aparición por scroll para narrativa progresiva sin bloquear scroll nativo.
- `binary-divider.tsx`: separadores visuales de flujo entre secciones.
- `process-pipeline.tsx`: pipeline animado para el proceso, con degradación limpia en móvil.

La intro solo se monta en la ruta `/`. Las páginas internas mantienen navegación y contenido corporativo sin depender de la animación para comunicar información esencial.

## Scroll Storytelling

La home sigue esta secuencia narrativa:

1. Caos binario inicial en hero.
2. Formación de identidad con `CERO Y UNO`.
3. Conversión de idea en sistema mediante terminal y señales técnicas.
4. Servicios como módulos ejecutables.
5. Impacto como transformación de desorden a operación.
6. Proceso como pipeline de diagnóstico a evolución.
7. Contacto como estado `ready for deploy`.

Las animaciones deben limitarse a `opacity` y `transform`. No se usa scroll hijacking, Three.js, GSAP ni dependencias externas para scroll.

## SEO

La metadata vive en `src/app/layout.tsx` y usa valores de `src/config/site.ts`.

Incluye:

- title
- description
- keywords moderadas
- robots básico
- openGraph
- twitter card
- metadataBase configurable por entorno
