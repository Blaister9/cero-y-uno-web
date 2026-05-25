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

Contiene el layout global, estilos globales y la composición de la página principal.

```text
src/sections
```

Contiene las secciones principales del home. Cada sección debe ser independiente y consumir contenido desde `src/content` cuando aplique.

```text
src/components
```

Contiene componentes reutilizables:

- `layout`: header, footer y contenedores.
- `motion`: wrappers de animación.
- `ui`: tarjetas, headings y piezas de interfaz.
- `visual`: elementos visuales como la animación binaria.

```text
src/content
```

Contiene textos, listas y datos editables del sitio.

```text
src/config
```

Contiene metadatos, navegación y datos públicos configurables.

```text
src/lib
```

Contiene utilidades compartidas y variantes de animacion.

## Restricciones

- No hay backend.
- No hay autenticación.
- No hay base de datos.
- No hay APIs internas.
- La página no debe depender de servicios externos para compilar.

## Convenciones

- Mantener `src/app/page.tsx` como composición de secciones.
- Evitar lógica de negocio dentro de componentes visuales.
- Preferir contenido estructurado para repetir bloques.
- Usar componentes cliente solo cuando sean necesarios para animación o interacción.
