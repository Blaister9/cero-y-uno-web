# AGENTS.md

## Propósito

Este repositorio contiene la página corporativa de Cero y Uno. Cualquier agente que trabaje aquí debe preservar una experiencia sobria, premium, oscura y tecnológica, sin convertir la estética binaria en un recurso saturado o genérico.

## Reglas de implementación

- Mantener Next.js con App Router, TypeScript y Tailwind CSS.
- No agregar backend, autenticación ni base de datos.
- No concentrar la página en `src/app/page.tsx`; usar secciones y componentes.
- Mantener el contenido editable en `src/content`.
- Mantener la configuración pública en `src/config`.
- Mantener variantes y utilidades de animación en `src/lib`.
- Usar `lucide-react` para iconos de interfaz.
- Usar Framer Motion solo para animaciones sutiles y funcionales.

## Calidad

- Verificar con `pnpm build` antes de entregar cambios relevantes.
- Evitar dependencias nuevas si no resuelven una necesidad clara.
- Conservar copy corporativo, directo y gerencial.
- Priorizar accesibilidad básica: semántica HTML, contraste y etiquetas claras.

## Rama

- `main` se considera estable.
- `dev` es la rama de trabajo para evolución del sitio.
