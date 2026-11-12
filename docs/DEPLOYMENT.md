# Despliegue

## Publicación de recorridos visuales · 11 de noviembre de 2026

Publicados todos los cambios aprobados en https://ceroyuno.com.co/ desde
`feature/scrollytelling-escenas`, sin merge a `main`.

- Commit de aplicación: `be44291a6082f90c529b90676d16dedd86e55d45`.
- Deployment de producción: `5SYwJbjX1pixjU9NGZB9FybyMnjm`.
- Panel: https://vercel.com/blaisters-projects/cero-y-uno-web/5SYwJbjX1pixjU9NGZB9FybyMnjm.
- Vercel reconstruyó la vista previa aprobada con el entorno de producción tras
  la verificación del titular y confirmó `Ready` / `Production`.
- Incluye escenas financieras y de atención, recorridos continuos de Power Platform,
  Blockchain e Integraciones y APIs, paleta neutral y mayor densidad Matrix.
- CI `43151282650` correcto; instalación congelada, typecheck, lint y build validados.
- Las cinco páginas, robots, sitemap y Open Graph respondieron 200 en producción.
  Los seis recursos fotográficos de las escenas coincidieron por SHA-256 con el
  repositorio. Se abrieron los recorridos nuevos en el dominio público y se verificó
  el resultado de integraciones: seis disponibles, dos reservadas y RES-042.
- Detalles de implementación y límites de QA: `docs/SCROLLYTELLING_QA.md`.

El commit posterior de documentación registra esta publicación; no modifica la
versión de aplicación servida en producción.

## Publicación de portadas v3 · 11 de noviembre de 2026

Rama `feature/portfolio-imagenes-v3`. Incluye todo el rediseño anterior y el reemplazo
completo de las cinco portadas del portafolio. Publicada por solicitud del titular
en `https://ceroyuno.com.co/`, desde el commit
`d0f37827cc476ed2c1b314e257d130dafa34ca5b`, sin merge a `main`.

- Deployment: `9twJ91b5UG6Qx1TAttrwiYUinyuS`.
- Vercel confirmó `Ready` y `Production` a las 20:16 de Bogotá.
- Las cinco páginas, robots, sitemap y Open Graph respondieron 200. Las cinco
  imágenes v3 públicas coincidieron por SHA-256 con las del commit.

Los archivos de imagen están incluidos en `public/images/portfolio/*-v3.webp`.
La configuración está en `src/content/portfolio.ts`; no requiere servicios nuevos ni
variables adicionales. Conservar Node 24 y pnpm 9.15.4. El historial de la publicación
anterior se mantiene a continuación como referencia.

## Publicación de Inicio · 11 de noviembre de 2026

- URL verificada: https://ceroyuno.com.co/.
- Commit publicado: `6f8b6aa6db6200953bb617848b5bc4ee5bc00861`.
- Rama de origen: `feature/inicio-claro`, basada en `dev`.
- Deployment de producción: `EvfzirgUMvLnLgvdgPpqG6UkQUhY`.
- Panel: https://vercel.com/blaisters-projects/cero-y-uno-web/EvfzirgUMvLnLgvdgPpqG6UkQUhY.
- Se promovió la preview revisada y Vercel reconstruyó la versión con el entorno
  de producción. El titular completó la verificación de identidad requerida.
- Vercel confirmó `Ready` y `Production`. GitHub CI `Validate` y la preview del
  commit publicado terminaron correctamente.
- Inicio incluye el banner Matrix ampliado, capacidades fotográficas con movimiento
  por extremos, cinco portadas con protagonistas negros y los cinco relatos por scroll.
- Verificación pública: las cinco páginas, robots, sitemap y la imagen nueva de
  Atención responden 200. Las cinco portadas cargan; los cinco recorridos activan
  scroll-linked en escritorio y etapas estáticas en móvil. Capturas en
  `docs/qa/inicio-claro/produccion-1440.jpg` y `produccion-390.jpg`.

No se hizo merge a `main`. `main` y `dev` todavía no contienen este rediseño;
la referencia del código publicado es el commit anterior de `feature/inicio-claro`.
Los commits posteriores de documentación no cambian la versión que sirve producción.

## Variables

Copiar `.env.example` a `.env.local` cuando se necesite configurar el entorno local.

```bash
NEXT_PUBLIC_SITE_URL=https://ceroyuno.com.co
```

`NEXT_PUBLIC_SITE_URL` debe apuntar a `https://ceroyuno.com.co`. Si se define en Vercel, debe coincidir con el dominio canónico del repositorio; cambiarla requiere un nuevo despliegue. La URL se usa en canonical, Open Graph, robots y sitemap.

Los datos públicos de contacto se editan en `src/config/site.ts` y se incluyen en el build.

## URL De Producción Actual

https://ceroyuno.com.co

El alojamiento continúa en el proyecto `cero-y-uno-web` de Vercel. El registro del dominio y el DNS se administran en Namecheap. El buzón `contacto@ceroyuno.com.co` está activo en Private Email, con 5 GB, y es el correo público definido en `src/config/site.ts`.

## Validaciones Antes De Merge

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```

## Despliegue Recomendado En Vercel

- Framework: Next.js.
- Node.js: `24.x`, fijado en `package.json` (`engines.node`) y `.nvmrc`. Vercel aplica la versión de `engines.node`; CI consume `.nvmrc`.
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
| Google Search Console | TXT en `@` generado por Google para la cuenta propietaria autorizada; conservarlo para mantener la verificación |

Los valores de la web proceden del panel del proyecto en Vercel; no son valores universales para otros proyectos. Se sustituyeron el CNAME de parking y la redirección HTTP inicial de Namecheap. No cambiar los nameservers ni aplicar una plantilla que borre los registros de correo.

Después de un cambio, comprobar HTTPS, redirecciones con rutas internas, los cinco canonical, `/robots.txt`, `/sitemap.xml`, `/opengraph-image` y el enlace `mailto:`. La propagación DNS y la emisión del certificado son independientes de una compilación correcta.

### Estado Del Correo Y RelateSEO

- El titular completó la creación del buzón; el 10 de noviembre de 2026 se comprobó el estado `ON` y la suscripción `ACTIVE`. La contraseña no se almacena en este repositorio.
- MX, SPF, DKIM y DMARC están publicados. Queda pendiente comprobar recepción y envío de mensajes reales, incluyendo los resultados de autenticación en sus cabeceras; el estado del buzón y el DNS no sustituyen esta prueba.
- RelateSEO: configuración inicial completada para `ceroyuno.com.co`. Dirección confirmada: `Carrera 72BIS # 25B-50, Bogotá, 110931, Colombia`. Modalidad final solicitada por el titular: recibir clientes y visitarlos; área local de seguimiento: Bogotá. Correo corporativo y teléfono comercial guardados. Categorías: empresa de software y consultora informática; ocho palabras clave de los servicios y `asesoftware.com` como referencia inicial de comparación.
- Incidencia de RelateSEO: conserva `http://ceroyuno.com.co` en un campo bloqueado, aunque HTTP redirige a HTTPS y la web responde correctamente. Consulta enviada a soporte con autorización del titular para actualizar la URL conservando el proyecto. La vinculación de Google Business y Analytics sigue pendiente.

### Identidad E Indexación En Buscadores

- La portada entrega JSON-LD `WebSite` y `Organization` desde el servidor, con nombre, dominio y contacto de `src/config/site.ts`. No añade horarios, reseñas, redes sociales ni otros datos sin confirmar.
- Las cinco páginas públicas permiten indexación y tienen canonical propio. El sitemap y robots son accesibles; esto no demuestra que Google ya las haya indexado ni garantiza posiciones.
- Google Search Console: propiedad de dominio `ceroyuno.com.co` verificada mediante DNS el 10 de noviembre de 2026 con la cuenta propietaria autorizada por el titular. El TXT se comprobó en ambos nameservers y Google confirmó la propiedad. No guardar credenciales ni tokens de verificación en el repositorio.
- `https://ceroyuno.com.co/sitemap.xml` enviado y procesado correctamente por Google: cinco páginas descubiertas. La primera lectura mostró un fallo transitorio que se resolvió durante la misma revisión.
- La inspección de `https://ceroyuno.com.co/` mostró «Descubierta: actualmente sin indexar». La solicitud de indexación fue aceptada y la URL quedó en la cola de rastreo prioritaria. Esto no significa que ya esté indexada; comprobar la evolución en el informe de páginas y la inspección de URL.
- La indexación puede tardar días o semanas. Consultar el estado en Search Console; repetir solicitudes no acelera el rastreo. Referencia: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

## Backend Futuro

El sitio actual no tiene backend. Si más adelante se requiere formulario, CRM o automatización comercial:

1. Definir proveedor o backend.
2. Agregar variables reales de entorno.
3. Implementar protección anti-spam y manejo de errores.
4. No simular envíos desde el frontend.

## Rollback Básico

En Vercel, usar un deployment anterior estable y promoverlo nuevamente si una versión nueva falla. Después del rollback, abrir un issue o PR correctivo desde `dev`.
