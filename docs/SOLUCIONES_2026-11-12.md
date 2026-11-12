# Soluciones: situaciones, ejemplos y enlaces compartibles

12 de noviembre de 2026. Rama: `feature/scrollytelling-escenas`.
Continuación del [diagnóstico de páginas interiores](DIAGNOSTICO_SECCIONES_2026-11-11.md).

## Implementación

La página se organiza por problemas de operación, con base marfil, texto grafito y
acentos arena, azul grisáceo y lavanda. La escena de entrada reutiliza la fotografía
conceptual `mesa-financiera-v1.webp` del repositorio, junto a un documento construido
en HTML. No requiere nuevos recursos generados ni dependencias.

Se conservan las seis situaciones y el contenido de problema, cambio esperado y
alcance. Cada escenario tiene una representación diferente:

| Escenario | Ejemplo |
| --- | --- |
| Plataformas internas | Expediente que reúne documento, conversación, responsable y estado |
| Portales corporativos | Entrega documental con una certificación pendiente |
| Automatización operativa | Ruta hacia un suplente cuando vence el plazo de revisión |
| Integración de sistemas | Aviso repetido que conserva una única reserva |
| Tableros gerenciales | Pendientes por responsable, actualización y acceso al registro de origen |
| IA aplicada | Borrador y extracto documental con referencia y revisión humana |

Los datos son ficticios y la página lo indica. Las escenas son ilustraciones,
no controles de una aplicación operativa. El texto de problema, alcance y resultado
permanece disponible fuera de las ilustraciones decorativas.

## Selección y navegación

Los radios nativos conservan flechas y navegación con teclado. CSS muestra el panel
seleccionado; sin soporte de `:has`, muestra todos como alternativa.
La mejora JavaScript añade URLs `#scenario-…`, restaura el escenario al cargar,
recargar o volver desde otra página y mantiene el enlace de servicio relacionado.
Cada panel ofrece «Enlace a este escenario».

La selección usa `replaceState`: recorrer opciones con flechas no añade una entrada
de historial por cada radio. El salto inicial respeta el margen de la cabecera.
Sin JavaScript, la selección manual sigue funcionando; la restauración del escenario
desde la URL requiere JavaScript.

La entrada de los paneles tiene un desplazamiento de 6 px durante 250 ms, habilitado
solo con `prefers-reduced-motion: no-preference`. No hay animaciones continuas.

Contenido en `src/content/solutions.ts` y `src/content/solution-visuals.ts`; componentes
en `src/components/solutions`; estilos y selección en `src/lib/solutions.css` y
`src/lib/use-solution-selection.ts`. Se retiran el flujo genérico anterior y su CSS.

## Pruebas realizadas

- Instalación congelada, typecheck, lint y build correctos con Node 24 / pnpm 9.15.4.
- Build local: Soluciones 1,06 kB; First Load JS 112 kB. No son Core Web Vitals.
- Seis escenarios en 320 × 740, 390 × 844, 768 × 1024 y 1280 × 900: 24 observaciones
  con un único panel visible, sin desbordamiento del documento ni del ejemplo.
- Flecha derecha pasa de plataformas a portales y actualiza la URL.
- Seis llegadas directas por hash restauran el radio y el panel correspondientes.
- Recarga de IA aplicada conserva la selección. El servicio relacionado llega a
  `/servicios#analitica-e-ia`; volver restaura IA aplicada.
- Primer Tab y Enter llevan al contenido principal. No se observaron errores de consola
  en la sesión de revisión.
- Inspección visual de los seis ejemplos y de la entrada en escritorio y móvil.

Evidencia: [pruebas](qa/soluciones-2026-11-12/pruebas.json),
[entrada de escritorio](qa/soluciones-2026-11-12/hero-desktop.png),
[página completa](qa/soluciones-2026-11-12/pagina-desktop.png),
[integración](qa/soluciones-2026-11-12/integracion-desktop.png),
[entrada móvil](qa/soluciones-2026-11-12/hero-mobile.png) y
[IA en móvil](qa/soluciones-2026-11-12/ia-mobile.png).

No se ejecutó Lighthouse, lector de pantalla, emulación de movimiento reducido ni
pruebas en otros navegadores o dispositivos físicos. La alternativa sin JavaScript
y sin `:has` se revisó en código, no mediante emulación.

## Seguimiento

INT-03 e INT-09 abordados para Soluciones. INT-10 mejora con enlaces compartibles;
la conservación del contexto comercial al llegar a Contacto sigue pendiente.
El registro de la publicación conjunta con Servicios y la base compartida se mantiene
en [DEPLOYMENT.md](DEPLOYMENT.md). No se hace merge a `main`.
