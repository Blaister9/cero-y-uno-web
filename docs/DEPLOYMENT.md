# Despliegue

## Variables

Copiar `.env.example` a `.env.local` cuando se necesite configurar el entorno local.

```bash
NEXT_PUBLIC_SITE_URL=https://replace-with-your-vercel-url.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=contacto@ceroyuno.co
```

`NEXT_PUBLIC_SITE_URL` debe actualizarse cuando exista dominio propio o URL definitiva de Vercel.

## Validaciones Antes De Merge

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```

## Despliegue Recomendado En Vercel

- Framework: Next.js.
- Install Command: `pnpm install --frozen-lockfile`.
- Build Command: `pnpm build`.
- Output: default de Next.js.
- Production Branch: `main`.
- Preview Deployments: ramas y pull requests.

No commitear `.vercel`.

## Ramas

- `main`: producción y rama estable.
- `dev`: integración.
- `feature/*`: trabajo incremental desde `dev`.

Los pull requests de feature deben apuntar a `dev`. El paso de `dev` a `main` debe ocurrir solo cuando la versión esté revisada.

## Protección De Ramas Recomendada

Para `main`:

- Require a pull request before merging.
- Require status checks to pass.
- Require branch to be up to date before merging si el flujo del equipo lo permite.
- Bloquear push directo a `main`.

Para `dev`:

- Permitir integración mediante pull requests desde `feature/*`.
- Ejecutar CI en cada PR.
- Evitar merges si `pnpm build` falla.

## Dominio Propio Futuro

Cuando exista dominio propio:

1. Configurarlo en Vercel.
2. Actualizar DNS según instrucciones de Vercel.
3. Actualizar `NEXT_PUBLIC_SITE_URL`.
4. Verificar metadata Open Graph con la URL final.

## Rollback Básico

En Vercel, usar un deployment anterior estable y promoverlo nuevamente si una versión nueva falla. Después del rollback, abrir un issue o PR correctivo desde `dev`.
