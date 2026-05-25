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

Estado: en curso.

- Tratar `https://cero-y-uno-web.vercel.app` como URL productiva temporal.
- Centralizar configuración comercial en `src/config/site.ts`.
- Mantener correo, WhatsApp y redes sociales como canales opcionales explícitos.
- Evitar formularios falsos o CTAs que apunten a canales no confirmados.
- Dejar la sección Contacto lista para activar canales reales en el futuro.

## v3 - Estructura Corporativa Multipágina

Estado: en curso.

- Mantener home como resumen ejecutivo.
- Crear páginas dedicadas para servicios, soluciones, nosotros y contacto.
- Usar metadata propia por página.
- Mantener contacto sin backend ni formulario simulado.
- Conservar URL temporal de Vercel como producción mientras no exista dominio propio.

## v4 - Dominio Propio Futuro

Estado: pendiente.

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
