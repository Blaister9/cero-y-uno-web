# Despliegue

## Variables

Copiar `.env.example` a `.env.local` cuando se necesite configurar el entorno local.

```bash
NEXT_PUBLIC_SITE_URL=https://ceroyuno.com.co
```

`NEXT_PUBLIC_SITE_URL` debe apuntar a `https://ceroyuno.com.co`. Si se define en Vercel, debe coincidir con el dominio canónico del repositorio; cambiarla requiere un nuevo despliegue. La URL se usa en canonical, Open Graph, robots y sitemap.

Los datos públicos de contacto se editan en `src/config/site.ts` y se incluyen en el build.

## URL De Producción Actual

https://ceroyuno.com.co

El alojamiento continúa en el proyecto `cero-y-uno-web` de Vercel. El registro del dominio y el DNS se administran en Namecheap. El buzón previsto es `contacto@ceroyuno.com.co` en Private Email; el titular debe terminar de crearlo con su contraseña antes de sustituir el correo actual en `src/config/site.ts`.

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
- Environment Variable: `NEXT_PUBLIC_SITE_URL=https://ceroyuno.com.co`.

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

## Dominio Y DNS

Configuración aplicada el 10 de noviembre de 2026:

| Elemento | Configuración |
| --- | --- |
| Nameservers | Namecheap BasicDNS: `dns1.registrar-servers.com`, `dns2.registrar-servers.com` |
| `@` | A → `216.198.79.1` |
| `www` | CNAME → `57b46cd80923f1e5.vercel-dns-017.com.` |
| Dominio en Vercel | `ceroyuno.com.co` → Production |
| Variante `www` en Vercel | 308 permanente → `ceroyuno.com.co` |
| Mail Settings | Private Email; conservar MX y SPF automáticos |
| DKIM | TXT en `privateemail._domainkey`; clave pública de la suscripción Private Email, comprobada en DNS |
| DMARC | TXT en `_dmarc`: `v=DMARC1; p=quarantine; adkim=r; aspf=r` |

Los valores de la web proceden del panel del proyecto en Vercel; no son valores universales para otros proyectos. Se sustituyeron el CNAME de parking y la redirección HTTP inicial de Namecheap. No cambiar los nameservers ni aplicar una plantilla que borre los registros de correo.

Después de un cambio, comprobar HTTPS, redirecciones con rutas internas, los cinco canonical, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` y el enlace `mailto:`. La propagación DNS y la emisión del certificado son independientes de una compilación correcta.

### Activación Pendiente Del Correo Y RelateSEO

- Terminar la creación de `contacto` desde Private Email con los 5 GB incluidos. La contraseña la introduce y guarda el titular; no se almacena en este repositorio.
- Verificar recepción y envío, incluyendo SPF/DKIM/DMARC, y después publicar la nueva dirección de contacto.
- RelateSEO ya tiene un proyecto para `ceroyuno.com.co`, con nombre y URL introducidos. El asistente requiere confirmar dirección comercial, código postal y modalidad de atención; no reutilizar los datos personales del registrante como datos del negocio.

## Backend Futuro

El sitio actual no tiene backend. Si más adelante se requiere formulario, CRM o automatización comercial:

1. Definir proveedor o backend.
2. Agregar variables reales de entorno.
3. Implementar protección anti-spam y manejo de errores.
4. No simular envíos desde el frontend.

## Rollback Básico

En Vercel, usar un deployment anterior estable y promoverlo nuevamente si una versión nueva falla. Después del rollback, abrir un issue o PR correctivo desde `dev`.
