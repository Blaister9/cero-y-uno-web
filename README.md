# Cero y Uno Web

Página corporativa profesional de Cero y Uno, empresa de desarrollo de software, automatización e inteligencia aplicada.

El sitio comunica una propuesta ejecutiva: convertir ideas, procesos complejos y caos operativo en sistemas digitales reales, funcionales, escalables y mantenibles.

## Estado Actual

- Dominio de producción: https://ceroyuno.com.co, alojado en Vercel.
- Correo corporativo: contacto@ceroyuno.com.co en Namecheap Private Email. Buzón activo con 5 GB y registros de correo configurados; queda pendiente la prueba de envío y recepción.
- Sin backend, base de datos, autenticación ni formulario funcional.
- Contacto directo por correo y teléfono, con dirección y enlace al mapa.

## Stack

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- pnpm

## Requisitos

- Node.js 24 LTS (misma versión principal en desarrollo, CI y Vercel)
- pnpm 9.15.4 o compatible

## Instalación

```bash
pnpm install
```

Para validación en CI o entornos reproducibles:

```bash
pnpm install --frozen-lockfile
```

## Desarrollo Local

```bash
pnpm dev
```

El sitio queda disponible en `http://localhost:3000`.

## Producción

El despliegue de producción utiliza el dominio propio:

https://ceroyuno.com.co

Los DNS se administran en Namecheap. La variante `www` redirige al dominio principal. Los metadatos canónicos, la imagen social, `/robots.txt` y `/sitemap.xml` utilizan esta misma URL.

## Experiencia Interactiva Binaria

El primer pantallazo combina el mensaje principal con lluvia binaria verde. El titular, los botones y el fondo estático se sirven desde la primera carga.

El canvas 2D anima la lluvia mientras el hero está a la vista y la pestaña está activa. Con `prefers-reduced-motion`, permanece el patrón estático.

## Interactive Scroll

La home pasa de la propuesta principal a los servicios y a un portafolio de proyectos y ejemplos.

En escritorio, el scroll hace avanzar la escena del proyecto seleccionado. En móvil y con movimiento reducido, el contenido se lee en orden con ilustraciones fijas. El portafolio se edita en `src/content/project-stories.ts` y `src/content/service-case.ts`.

## Rutas Principales

- `/`: resumen ejecutivo de la empresa.
- `/servicios`: servicios técnicos con problema, entrega y resultado esperado.
- `/soluciones`: escenarios de solución aplicables a clientes.
- `/nosotros`: enfoque institucional y filosofía de trabajo.
- `/contacto#canales`: correo, teléfono y ubicación para iniciar una conversación.

## Build

```bash
pnpm build
```

## Validaciones

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Estructura Del Proyecto

```text
src/
  app/          App Router, layout global, metadata y página principal
  app/*/page.tsx Páginas corporativas internas
  components/   Componentes reutilizables de layout, UI, motion y visuales
  config/       Configuración pública del sitio
  content/      Contenido editable del sitio
  lib/          Utilidades y variantes de animación
  sections/     Secciones independientes de la página principal
docs/           Documentación técnica, marca y despliegue
```

## Flujo Git

- `main`: rama estable y candidata a producción.
- `dev`: rama de integración.
- `feature/*`: ramas de trabajo desde `dev`.

Flujo recomendado:

```bash
git fetch --all --prune
git checkout dev
git pull origin dev
git checkout -b feature/nombre-del-cambio
```

Abrir pull request desde `feature/*` hacia `dev`. No hacer merge directo a `main`.

## Despliegue Sugerido En Vercel

- Framework: Next.js.
- Install Command: `pnpm install --frozen-lockfile`.
- Build Command: `pnpm build`.
- Output: default de Next.js.
- Production Branch: `main`.
- Preview Deployments: ramas y pull requests.

## Variables

Usar `.env.example` como referencia:

```bash
NEXT_PUBLIC_SITE_URL=https://ceroyuno.com.co
```

Los datos públicos de contacto se editan en `src/config/site.ts`. Los botones de diagnóstico llevan a `/contacto#canales`.

## Notas Para Próximos Cambios

- Mantener el contenido editable en `src/content`.
- Mantener navegación, email, keywords y metadatos base en `src/config`.
- No agregar backend, autenticación ni base de datos sin autorización.
- No inventar clientes, métricas, certificaciones, casos de éxito ni testimonios.
- Conservar el dominio canónico y los registros de Private Email al modificar el alojamiento.
- Antes de cerrar cualquier cambio, ejecutar `pnpm typecheck`, `pnpm lint` y `pnpm build`.

## Documentación

- [Concepto de marca](docs/BRAND_CONCEPT.md)
- [Arquitectura](docs/ARCHITECTURE.md)
- [Despliegue](docs/DEPLOYMENT.md)
- [Roadmap](docs/ROADMAP.md)
- [Checklist QA](docs/QA_CHECKLIST.md)
- [Pendientes para producción y avance de correcciones](docs/PRODUCTION_READINESS.md)
