# Roadmap

## v1 - Publicación Inicial En Vercel

Estado: completado.

- Sitio corporativo publicado en `https://cero-y-uno-web.vercel.app`.
- Stack base con Next.js App Router, TypeScript, Tailwind CSS, Framer Motion y lucide-react.
- Estructura modular con secciones, contenido y configuración separados.
- Diseño oscuro, premium y tecnológico.

## v1.1 - Hardening Post-Deploy

Estado: completado.

- Revisión productiva básica.
- Metadata, Open Graph y Twitter Card ajustadas.
- Favicon e imagen social agregados.
- Documentación de despliegue actualizada.

## v2 - Preparación Comercial Sin Dominio Propio

Estado: completado.

- Centralizar correo, teléfono y dirección en `src/config/site.ts`.
- Unificar los botones de diagnóstico en `/contacto#canales`.
- Mostrar los canales directos en Contacto y en el pie de página.

## v3 - Estructura Corporativa Multipágina

Estado: completado. Las mejoras de cada página continúan de forma incremental.

- Mantener home como resumen ejecutivo.
- Crear páginas dedicadas para servicios, soluciones, nosotros y contacto.
- Usar metadata propia por página.
- Mantener contacto sin backend ni formulario simulado.
- Mantener `https://ceroyuno.com.co` como dominio canónico.

## v4 - Dominio Propio Y Correo

Estado: completado para publicación; prueba de envío y recepción de correo pendiente.

- Comprar y conectar dominio propio.
- Actualizar `NEXT_PUBLIC_SITE_URL`.
- Verificar metadata social, canonicalidad y previews.
- Mantener Vercel como plataforma de despliegue salvo decisión distinta.

## v5 - Formulario, Backend O CRM Futuro

Estado: pendiente.

- Definir necesidad real de captación.
- Elegir backend, proveedor serverless o CRM.
- Agregar protección anti-spam, validación y manejo de errores.
- Implementar analítica solo con claves reales y aprobación previa.
- No inventar automatizaciones ni integraciones antes de definir operación comercial.

## Próximas prioridades

- Proteger `main` y `dev`, exigir CI y ampliar las comprobaciones de publicación.
- Completar navegación accesible y contenido visible sin JavaScript en Nosotros y CTA de home.
- Revisar Nosotros y Contacto con la identidad ya definida: Manrope y verde matriz.
- Mantener el detalle y la evidencia de cierre en `PRODUCTION_READINESS.md`.
