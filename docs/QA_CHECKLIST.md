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

## Scroll Storytelling

- Hacer scroll completo de arriba abajo en `/` y confirmar que la narrativa fluye sin saltos bruscos.
- Hacer scroll de abajo arriba y confirmar que el contenido permanece disponible y legible.
- Confirmar que los divisores binarios no tapan contenido ni capturan interacción.
- Confirmar que Servicios se percibe como módulos cargados sin depender solo de hover.
- Confirmar que Impacto comunica transformación de `Antes` a `Después`.
- Confirmar que Proceso se presenta como pipeline: diagnóstico, diseño, arquitectura, desarrollo, pruebas, despliegue y evolución.
- Confirmar que Contacto cierra con estado `ready for deploy` sin formulario falso.

## Responsive

- Probar 375px, 768px, 1024px y 1440px.
- Confirmar que no existe overflow horizontal.
- Confirmar que el hero, CTA, tarjetas y terminal decorativa son legibles.
- Confirmar que la animación no tapa contenido crítico.
- Confirmar que el pipeline no genera scroll horizontal en móvil.
- Confirmar que el scroll en 375px se mantiene fluido.

## Accesibilidad

- Confirmar foco visible en navegación, CTAs y `Saltar intro`.
- Confirmar contraste suficiente sobre fondo oscuro.
- Confirmar que la información principal no depende solo de animaciones.
- Confirmar que `prefers-reduced-motion` reduce intro, canvas y animaciones por scroll.
- Confirmar que la consola del navegador no registra errores.

## Validaciones

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```
