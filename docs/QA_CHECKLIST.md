# QA Checklist

## Experiencia Interactiva Binaria

- Abrir `/` y comprobar que el titular, el botón principal y la lluvia verde se ven en la primera pantalla.
- Confirmar que la terminal acompaña al mensaje en escritorio y que en móvil se priorizan el texto y los botones.
- Comprobar el patrón fijo con `prefers-reduced-motion` y tras redimensionar la ventana.
- Verificar que el canvas pausa al bajar a Proceso o cambiar de pestaña y vuelve a dibujar al regresar.

## Navegación

- Validar enlaces del header hacia `/`, `/servicios`, `/soluciones`, `/nosotros` y `/contacto`.
- Validar que «Ver proyectos» lleva a `/#proceso` y que cada tarjeta de servicio abre su detalle.
- Validar que el menú móvil abre, cierra y no genera overflow horizontal.

## Scroll Storytelling

- Hacer scroll completo de arriba abajo en `/` y confirmar que la narrativa fluye sin saltos bruscos.
- Hacer scroll de abajo arriba y confirmar que el contenido permanece disponible y legible.
- Seleccionar los cinco proyectos y ejemplos con mouse y teclado. En móvil, comprobar el desplazamiento horizontal del selector.
- Confirmar que el scroll mueve la consulta hacia la consola, trae la respuesta y muestra el cierre. Al subir, la escena debe retroceder a la posición correspondiente.
- En Automatización financiera, comprobar que la lectura resalta un campo a la vez, que cada dato cruza antes de aparecer en el registro y que la confirmación se ve completa. Al subir, el recorrido debe revertirse.
- En Power Platform, comprobar que la misma solicitud llega a la bandeja, que la decisión cambia su estado en Dataverse y que el informe cambia sus conteos después.
- En Blockchain, comprobar que se registra la huella del original, que la copia coincide y que al cambiar la fecha aparece otra huella mientras la registrada se conserva.
- Confirmar que el ejemplo fijo y los cuatro capítulos se leen en orden en móvil y con movimiento reducido.
- Confirmar que los botones de diagnóstico llevan a `/contacto#canales` y que el encabezado fijo deja visible el bloque.
- Verificar correo, teléfono y enlace al mapa en Contacto y en el pie de página.

## Responsive

- Probar 375px, 768px, 1024px y 1440px.
- Confirmar que no existe overflow horizontal.
- Confirmar que el hero, CTA, tarjetas y terminal decorativa son legibles.
- Confirmar que la animación no tapa contenido crítico.
- Confirmar que el caso no genera scroll horizontal en móvil.
- Confirmar que el scroll en 375px se mantiene fluido.

## Accesibilidad

- Confirmar foco visible en navegación y CTAs.
- Confirmar contraste suficiente sobre fondo oscuro.
- Confirmar que la información principal no depende solo de animaciones.
- Confirmar que `prefers-reduced-motion` muestra el fondo fijo y reduce las animaciones por scroll.
- Confirmar que la consola del navegador no registra errores.

## Validaciones

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm build
```
