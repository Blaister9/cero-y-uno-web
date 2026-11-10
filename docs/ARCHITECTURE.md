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
- Proceso y caso de prototipo
- Contacto

```text
src/components
```

Contiene componentes reutilizables:

- `layout`: header, footer y contenedores.
- `experience`: canvas, terminal decorativa, separadores y apariciones por scroll.
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

- `binary-canvas.tsx` renderiza un patrón fijo en SVG y anima la lluvia con canvas 2D. `IntersectionObserver` y la visibilidad de la pestaña controlan el ciclo de dibujo. El patrón fijo cubre la carga inicial y el movimiento reducido.
- `code-terminal.tsx` muestra una terminal decorativa en escritorio.
- `scroll-reveal.tsx`: wrapper de aparición por scroll para narrativa progresiva sin bloquear scroll nativo.
- `binary-divider.tsx`: separadores visuales de flujo entre secciones.
- `case-story.tsx` mantiene los cuatro capítulos en el flujo y actualiza el panel decorativo de escritorio con `IntersectionObserver`.

El hero renderiza su contenido y sus enlaces desde el servidor. El canvas decora el fondo en la ruta `/`.

## Scroll Storytelling

La home sigue esta secuencia narrativa:

1. Propuesta principal con lluvia binaria de fondo y terminal secundaria.
2. Servicios como módulos ejecutables.
3. Caso de atención en tiempo real en cuatro momentos. El bloque de Proceso conserva el ancla `#impacto` en su encabezado.
4. Contacto mediante los canales comerciales.

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
