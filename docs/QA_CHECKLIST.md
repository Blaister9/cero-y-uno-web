# QA Checklist

## Experiencia Interactiva Binaria

- Abrir `/` en una sesión nueva y confirmar que aparece la intro.
- Confirmar que el botón `Saltar intro` es visible, enfocable con teclado y cierra la intro.
- Recargar `/` dentro de la misma sesión y confirmar que la intro no se repite por `sessionStorage`.
- Limpiar `sessionStorage` y confirmar que la intro vuelve a mostrarse.
- Activar `prefers-reduced-motion` y confirmar que se muestra una versión estática sin lluvia completa.
- Confirmar que la intro desaparece con transición suave y no deja el contenido bloqueado.

## Navegación

- Validar enlaces del header hacia `/`, `/servicios`, `/soluciones`, `/nosotros` y `/contacto`.
- Validar CTAs principales de la home.
- Validar que el menú móvil abre, cierra y no genera overflow horizontal.

## Responsive

- Probar 375px, 768px, 1024px y 1440px.
- Confirmar que no existe overflow horizontal.
- Confirmar que el hero, CTA, tarjetas y terminal decorativa son legibles.
- Confirmar que la animación no tapa contenido crítico.

## Accesibilidad

- Confirmar foco visible en navegación, CTAs y `Saltar intro`.
- Confirmar contraste suficiente sobre fondo oscuro.
- Confirmar que la información principal no depende solo de animaciones.
- Confirmar que la consola del navegador no registra errores.

## Validaciones

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```
