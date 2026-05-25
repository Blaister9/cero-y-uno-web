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
