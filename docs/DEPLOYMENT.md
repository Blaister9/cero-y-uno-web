# Despliegue

## Variables

Copiar `.env.example` a `.env.local` cuando se necesite configurar el entorno local.

```bash
NEXT_PUBLIC_SITE_URL=https://ceroyuno.co
NEXT_PUBLIC_CONTACT_EMAIL=contacto@ceroyuno.co
```

## Build local

```bash
pnpm install
pnpm build
```

## Despliegue recomendado

El proyecto está preparado para Vercel por ser una aplicación Next.js estándar.

1. Conectar el repositorio `Blaister9/cero-y-uno-web`.
2. Seleccionar pnpm como package manager.
3. Usar `pnpm build` como comando de build.
4. Usar `.next` como salida administrada por Vercel.
5. Configurar las variables públicas si cambian los valores de producción.

## Ramas

- `main`: rama estable.
- `dev`: rama de integración y desarrollo.
