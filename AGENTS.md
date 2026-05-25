# AGENTS.md

## Propósito

Este repositorio contiene la página corporativa de Cero y Uno. Cualquier agente que trabaje aquí debe preservar una experiencia sobria, premium, oscura y tecnológica, sin convertir la estética binaria en un recurso saturado, genérico o tipo hacker.

## Reglas De Rama

- No trabajar directamente sobre `main`.
- Usar `dev` como base de integración.
- Crear ramas `feature/*` desde `dev`.
- No hacer merge a `main` desde agentes.

## Reglas De Implementación

- Mantener Next.js con App Router, TypeScript y Tailwind CSS.
- No agregar backend, autenticación ni base de datos sin autorización explícita.
- No concentrar la página en `src/app/page.tsx`; usar secciones y componentes.
- Mantener el contenido editable en `src/content`.
- Mantener la configuración pública en `src/config`.
- Mantener variantes y utilidades de animación en `src/lib`.
- Usar `lucide-react` para iconos de interfaz.
- Usar Framer Motion solo para animaciones sutiles, accesibles y funcionales.
- No agregar dependencias pesadas sin justificar el valor técnico.

## Contenido Y Marca

- Mantener identidad visual premium, ejecutiva y tecnológica.
- No inventar clientes, métricas, certificaciones, casos de éxito ni testimonios.
- Evitar clichés como "transformación digital" o "soluciones innovadoras" sin sustancia.
- Comunicar software real, automatización, arquitectura, integración e inteligencia aplicada.

## Calidad

- Ejecutar `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint` y `pnpm build` antes de cerrar cambios relevantes.
- Priorizar accesibilidad básica: semántica HTML, contraste, enlaces claros y navegación usable.
- Respetar `prefers-reduced-motion` en animaciones.
- Evitar código muerto, imports rotos y uso de `window` o `document` en server components.
