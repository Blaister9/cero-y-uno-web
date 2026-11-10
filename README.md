# Cero y Uno Web

Página corporativa profesional de Cero y Uno, empresa de desarrollo de software, automatización e inteligencia aplicada.

El sitio comunica una propuesta ejecutiva: convertir ideas, procesos complejos y caos operativo en sistemas digitales reales, funcionales, escalables y mantenibles.

## Estado Actual

- Producción temporal en Vercel: https://cero-y-uno-web.vercel.app
- Sin dominio propio todavía.
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

## Experiencia Interactiva Binaria

El primer pantallazo combina el mensaje principal con lluvia binaria verde. El titular, los botones y el fondo estático se sirven desde la primera carga.

El canvas 2D anima la lluvia mientras el hero está a la vista y la pestaña está activa. Con `prefers-reduced-motion`, permanece el patrón estático.

## Interactive Scroll

La home pasa de la propuesta principal a los servicios, el antes y después y el proceso de trabajo. Las apariciones se apoyan en Framer Motion con `transform` y `opacity` y conservan el desplazamiento del navegador.

El proceso se presenta como pipeline visual: diagnóstico, diseño, arquitectura, desarrollo, pruebas, despliegue y evolución. En móviles se degrada a una lectura limpia por tarjetas.

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
NEXT_PUBLIC_SITE_URL=https://cero-y-uno-web.vercel.app
```

Los datos públicos de contacto se editan en `src/config/site.ts`. Los botones de diagnóstico llevan a `/contacto#canales`.

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
- [Checklist QA](docs/QA_CHECKLIST.md)
