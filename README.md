# Cero y Uno Web

Página corporativa profesional de Cero y Uno, empresa de desarrollo de software, automatización e inteligencia aplicada.

El sitio comunica una propuesta ejecutiva: convertir ideas, procesos complejos y caos operativo en sistemas digitales reales, funcionales, escalables y mantenibles.

## Estado Actual

- Producción temporal en Vercel: https://cero-y-uno-web.vercel.app
- Sin dominio propio todavía.
- Sin backend, base de datos, autenticación ni formulario funcional.
- Contacto directo configurable por variables públicas cuando exista correo o WhatsApp real.

## Stack

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- pnpm

## Requisitos

- Node.js 20 LTS
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

El despliegue actual está publicado con URL temporal de Vercel:

https://cero-y-uno-web.vercel.app

Esta URL debe tratarse como productiva mientras no exista dominio propio.

## Rutas Principales

- `/`: resumen ejecutivo de la empresa.
- `/servicios`: servicios técnicos con problema, entrega y resultado esperado.
- `/soluciones`: escenarios de solución aplicables a clientes.
- `/nosotros`: enfoque institucional y filosofía de trabajo.
- `/contacto`: contacto sin formulario funcional ni backend.

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
NEXT_PUBLIC_SITE_URL=https://cero-y-uno-web.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_WHATSAPP_URL=
```

`NEXT_PUBLIC_CONTACT_EMAIL` y `NEXT_PUBLIC_WHATSAPP_URL` deben permanecer vacíos hasta que exista un canal real aprobado. Si ambos están vacíos, los CTAs apuntan a la sección Contacto y no simulan envíos.

## Notas Para Próximos Cambios

- Mantener el contenido editable en `src/content`.
- Mantener navegación, email, keywords y metadatos base en `src/config`.
- No agregar backend, autenticación ni base de datos sin autorización.
- No inventar clientes, métricas, certificaciones, casos de éxito ni testimonios.
- No asumir dominio propio hasta que esté comprado y configurado.
- Antes de cerrar cualquier cambio, ejecutar `pnpm typecheck`, `pnpm lint` y `pnpm build`.

## Documentación

- [Concepto de marca](docs/BRAND_CONCEPT.md)
- [Arquitectura](docs/ARCHITECTURE.md)
- [Despliegue](docs/DEPLOYMENT.md)
- [Roadmap](docs/ROADMAP.md)
