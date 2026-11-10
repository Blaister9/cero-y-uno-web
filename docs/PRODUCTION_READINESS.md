# Preparación para producción — 10 de noviembre de 2026

## Diagnóstico

El sitio ya está publicado en <https://cero-y-uno-web.vercel.app>. Las cinco páginas principales funcionan y el proyecto compila. La recomendación es cerrar primero seguridad de dependencias, consistencia del entorno y protección de la publicación antes de promover una nueva versión comercial.

Base de la auditoría inicial: `main` en `2b8a0b6` y `dev` en `18c2de4`, con el mismo contenido. La corrección de dependencias se integró mediante los PR [17](https://github.com/Blaister9/cero-y-uno-web/pull/17) y [18](https://github.com/Blaister9/cero-y-uno-web/pull/18). Producción quedó en `72bd6e4`, con CI y despliegue Vercel correctos; se verificaron las cinco rutas públicas, imagen OG, icono, selector y contacto.

## Lista ordenada de trabajo

P1: resolver antes de aprobar la siguiente publicación. P2: defecto o mejora importante, sin evidencia de caída o bloqueo general. Los controles externos pendientes no se consideran verificados por una compilación local.

| Orden | Prioridad | Pendiente | Evidencia | Criterio de cierre | Estado |
| --- | --- | --- | --- | --- | --- |
| 1 | P1 | Actualizar dependencias y resolver alertas de seguridad | Lockfile inicial con Next.js 15.5.18 y sharp 0.34.5; auditoría de producción inicial: 3 críticas, 12 altas y 9 moderadas | Actualización compatible, revisión de alertas residuales, instalación reproducible, tipos, lint, build y revisión del preview | Publicado y verificado; 0 alertas en producción. Resta seguimiento de 1 moderada en herramientas de desarrollo |
| 2 | P1 | Unificar Node en una versión LTS soportada | `.nvmrc` fija 20; CI la consume; README pide Node 20; `package.json` no declara `engines.node` | Fijar una versión soportada, por ejemplo 24.x, en repositorio y Vercel; CI y preview aprobados con esa versión | Pendiente |
| 3 | P1 | Proteger ramas y exigir validaciones para publicar | API pública de GitHub informa `protected: false` para `main` y `dev`; CI ejecuta tipos, lint y build, sin auditoría ni prueba de navegación | PR obligatorio, impedir push directo a main, checks obligatorios; auditoría de seguridad y smoke de rutas/CTA/menú/selector en CI; verificar qué commit se promueve en Vercel | Pendiente |
| 4 | P2 | Entregar el contenido principal visible antes de hidratar | En la auditoría inicial, `Reveal` usa `initial="hidden"` y oculta titular y CTA de `/servicios` en el HTML servido | El contenido de servicios, soluciones, nosotros y CTA de home sigue visible si falla o se retrasa JavaScript; animación como mejora progresiva | Servicios corregido en `feature/services-experience`; resto pendiente |
| 5 | P2 | Completar rastreo SEO | `/robots.txt` y `/sitemap.xml` devuelven 404 en el sitio publicado; canonical por ruta sí existe | Generar robots y sitemap con las cinco rutas públicas, URLs canónicas y respuesta 200 | Pendiente |
| 6 | P2 | Completar accesibilidad de navegación | Menú móvil abre y navega, pero Escape no lo cierra; no hay enlace para saltar al contenido ni `aria-current` en navegación | Escape cierra y conserva foco coherente, enlace de salto y página activa; comprobar teclado y movimiento reducido | Pendiente |
| 7 | P2 | Añadir cabeceras de protección apropiadas al sitio | Respuesta pública tiene HSTS; no se observaron CSP, X-Content-Type-Options, protección contra enmarcado ni Referrer-Policy | Definir cabeceras compatibles con Next.js y animaciones; comprobar rutas y recursos en preview sin bloqueos | Pendiente |
| 8 | P2 | Cerrar evidencia de rendimiento y operación | No hay presupuestos de rendimiento ni prueba de rollback registrada en el repo; el roadmap conserva v3 «en curso» | Medir rendimiento móvil, probar movimiento reducido y retorno de scroll, registrar release/rollback y actualizar roadmap | Pendiente |

## Alcance de las alertas de seguridad

La auditoría completa inicial reportó 48 alertas: 3 críticas, 28 altas, 16 moderadas y 1 baja. `pnpm audit --prod --json` reportó 24: 3 críticas, 12 altas y 9 moderadas. Son resultados del árbol de dependencias, no 48 fallos explotados en la aplicación.

No se encontraron Server Actions, middleware de autenticación, rewrites ni uso de `next/image` en el código del sitio. Por ello, varias condiciones descritas en los avisos no están presentes en este proyecto. No se realizaron pruebas de explotación ni peticiones maliciosas al sitio público.

La alerta de ejecución remota en Windows afecta a servidores alojados en Windows; no demuestra que Vercel esté expuesto. Las alertas de optimización de imágenes dependen de la ruta y configuración de procesamiento de imágenes. Aun así, el lockfile conserva versiones con avisos publicados y debe actualizarse antes de una nueva publicación.

Referencias verificadas:

- [Next.js: aviso de Image Optimization y versión corregida 15.5.28](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw).
- [Next.js: alcance del aviso para servidores Windows](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36).
- [Estado oficial de versiones Node.js](https://nodejs.org/en/about/previous-releases): Node 20 está fuera de soporte.
- [Versiones de Node soportadas en Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions): `engines.node` puede fijar la versión principal del despliegue.

## Verificaciones realizadas sobre la versión inicial

| Verificación | Resultado |
| --- | --- |
| Instalación con pnpm 9.15.4 y `--frozen-lockfile` | Correcta |
| `pnpm typecheck` | Correcto |
| `pnpm lint` | Correcto |
| `pnpm build`, Node local 24.14.1 | Correcto; Next.js 15.5.18 |
| [CI de main](https://github.com/Blaister9/cero-y-uno-web/actions/runs/42756228921) | Success para `2b8a0b6` |
| `/`, `/servicios`, `/soluciones`, `/nosotros`, `/contacto` | HTTP 200 y canonical propio |
| `/opengraph-image`, `/icon.svg` | HTTP 200 con tipo de contenido correcto |
| Navegación por las cinco páginas en navegador integrado a 375 px | Correcta, sin desbordamiento horizontal del documento |
| Home a 768, 1024 y 1440 px | Sin desbordamiento horizontal del documento |
| Menú móvil | Abre, cierra por botón y cierra al navegar; Escape pendiente |
| «Ver proyectos» y las cinco opciones del selector | Contenido cambia correctamente; Power Platform también comprobado mediante Enter |
| CTA de diagnóstico | Llega a `/contacto#canales`; bloque visible por debajo del encabezado fijo |
| Consola durante los recorridos revisados | Sin advertencias ni errores registrados |

## Límites de esta revisión

- Se revisó código, HTTP y navegación en el navegador integrado. No se ejecutó una auditoría formal WCAG ni Lighthouse, ni toda la matriz de escenas con movimiento reducido.
- Se comprobaron los destinos `mailto:`, `tel:` y mapa, sin enviar correos ni realizar llamadas. La recepción y atención comercial deben verificarse por sus responsables.
- No se accedió al panel de Vercel: su versión efectiva de Node, variables, permisos, protección de previews y rollback quedan por confirmar. `.nvmrc` no demuestra qué versión usa el despliegue actual.
- El funcionamiento observado en producción corresponde al sitio publicado. Las correcciones locales necesitan su propio preview antes de publicarse.

## Mejoras comerciales que no bloquean el alcance actual

Dominio propio, correo corporativo, formulario/CRM y analítica son decisiones posteriores. El alcance vigente es un sitio corporativo con canales directos de contacto. Agregar backend, autenticación o base de datos requiere una decisión explícita según `AGENTS.md`.

## Registro de avance

- 2026-11-10: revisión inicial terminada y punto 1 implementado en rama local. La publicación y el merge a main quedan fuera de este cambio.
- 2026-11-10, después de la aprobación del usuario: punto 1 publicado mediante PR 17 y 18. CI y Vercel correctos; revisión funcional realizada sobre producción. El preview de Vercel requiere autenticación y no se considera revisado visualmente.
- 2026-11-10: siguiente mejora de presentación en `feature/portfolio-typography`: Manrope local, jerarquía del portafolio e índice de recorridos adaptable; scrollytelling conservado. Decisión de dominio en pausa por solicitud del usuario.
- 2026-11-10: Servicios renovado en `feature/services-experience`, conservando Manrope y la paleta verde matriz. Se reemplaza la cuadrícula de tarjetas por seis desplegables nativos, índice lateral y ejemplos ilustrativos de tres pasos. Las URLs de cada servicio se conservan; el servicio enlazado se abre y se sitúa bajo el encabezado. El movimiento es puntual y respeta la preferencia de movimiento reducido.
- Validación de Servicios: instalación congelada, tipos, lint y build correctos; cinco rutas con HTTP 200. Navegación por los seis servicios y teclado comprobados; vistas de 375, 768 y 1440 px sin desbordamiento. CTA verificado hasta `/contacto#canales`. Una copia del HTML compilado sin ninguna etiqueta `script` mantiene el titular visible y permite abrir y cerrar los servicios. La preferencia de movimiento reducido se revisó en código; no se emuló en el navegador. No se añadieron dependencias.

### Punto 1 — actualización local de dependencias

- Next.js y `eslint-config-next`: 15.5.18 → 15.5.29; se conserva la versión principal 15.
- Actualizadas las dependencias dentro de sus versiones principales existentes, incluido React 19.3.1, Framer Motion 12.43.0 y PostCSS 8.5.32.
- Agregado override `postcss@<8.5.23` para evitar la copia antigua fijada transitivamente por Next.js. Se limita al mismo major y se comprueba con la compilación del sitio. Retirarlo cuando el árbol de Next.js deje de requerir una versión vulnerable.
- Auditoría de producción después del cambio: **0 alertas**.
- Auditoría completa después del cambio: **0 críticas, 0 altas, 1 moderada**, frente a 48 alertas iniciales.
- Alerta residual: [GHSA-g3hv-75wg-m249](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249), `minimatch` 10.2.6, dependencia de desarrollo de `@typescript-eslint/typescript-estree`. El aviso requiere patrones controlados por un atacante y `optimizationLevel >= 2`. La llamada encontrada en el parser utiliza `{ dot: true }`, sin activar ese nivel; no se expone una entrada de patrones del visitante. No se forzó el major 11 del paquete indirecto. Mantener seguimiento para actualizar la cadena de lint cuando adopte la versión corregida.
- ESLint 9 muestra aviso de fin de soporte. Su migración mayor y la del paquete de configuración se consideran mantenimiento de herramientas de desarrollo; no se mezclaron con la actualización compatible de producción.
- Las auditorías se ejecutaron el 10 de noviembre de 2026; su resultado es temporal y debe repetirse antes de publicar.
- Validación final local: `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint` y `pnpm build` completados correctamente con Node 24.14.1. Se abrió el build con `next start` en `127.0.0.1:3100`; selector de proyectos y CTA de contacto funcionaron sin errores ni advertencias de consola. Falta la comprobación del preview de Vercel antes de promoverlo.
