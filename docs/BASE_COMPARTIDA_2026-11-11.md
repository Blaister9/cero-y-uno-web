# Primera implementación: continuidad y navegación

11 de noviembre de 2026. Rama: `feature/scrollytelling-escenas`.
Punto de partida: [diagnóstico de páginas interiores](DIAGNOSTICO_SECCIONES_2026-11-11.md).

## Decisión y alcance

Se prioriza INT-02 por su alcance: afecta al paso de Inicio a cualquiera de las
cuatro páginas interiores. Todas utilizan ahora la identidad de la cabecera y el
pie aprobados en Inicio: logo `01_`, superficies claras, tipografía, enlaces y
«Hablemos» como siguiente paso. El contenido principal de cada página mantiene su
estructura actual; su composición, paleta y contenido se abordarán por separado.

Hay una única implementación de Header, Footer y Brand en `src/components/layout`.
Se retiraron las variantes duplicadas de Inicio y la cabecera anterior. Los textos
compartidos se editan en `src/content/chrome.ts`; el contacto sigue en `siteConfig`.
No se añadieron dependencias ni animaciones.

## Hallazgos atendidos

| Hallazgo | Resultado en esta rama |
| --- | --- |
| INT-02 | Cabecera, marca y pie comunes en las cinco páginas; CTA «Hablemos» hacia los canales de contacto. |
| INT-01 | El enlace de Soluciones llega a `/#portafolio`, cuyo destino existe y queda visible bajo la cabecera. |
| INT-04 | Primer Tab muestra «Saltar al contenido» en las cinco rutas; Enter enfoca `main#contenido`. |
| INT-05 | Página actual con `aria-current="page"`; menú asociado por `aria-controls`, cierre con Escape y retorno de foco. La selección de una ruta cierra el menú. |
| INT-11 | Pie común con los seis servicios enlazados a sus anclas, obtenidos del contenido de Servicios. |

INT-03 y el rediseño particular de las páginas siguen pendientes. INT-07 solo
cambia en la cabecera: los CTA del cuerpo que ofrecen diagnóstico todavía necesitan
la decisión editorial/comercial indicada en el informe original.

## Validación

- Instalación con `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint`
  y `pnpm build`, con Node 24 y pnpm 9.15.4: correctos.
- Navegador integrado sobre compilación de producción local, cinco rutas en
  1280 × 900, 768 × 1024, 390 × 844 y 320 × 740: 20 observaciones sin
  desbordamiento horizontal; menú cerrado fuera del orden de tabulación.
- Página actual correcta en escritorio y estado activo comprobado en menú móvil.
- Tab y Enter desde el comienzo: foco trasladado al contenido en las cinco rutas.
- Menú móvil: apertura, Escape desde un enlace, retorno de foco al botón,
  cierre al seleccionar Servicios desde Contacto.
- Seis enlaces del pie desde Contacto: abren el detalle correspondiente en Servicios;
  encabezados a aproximadamente 96 px del borde superior, por debajo de la cabecera
  móvil de 65 px. Solo un servicio queda abierto.
- Enlace de Soluciones a Inicio: portafolio a aproximadamente 104 px del borde
  superior, por debajo de la cabecera móvil.

Las mediciones están en [pruebas de navegación](qa/base-compartida-2026-11-11/navegacion.json).
Capturas: [cabecera de Servicios](qa/base-compartida-2026-11-11/servicios-desktop.png),
[cabecera y pie en Contacto](qa/base-compartida-2026-11-11/contacto-desktop.png) y
[menú móvil](qa/base-compartida-2026-11-11/menu-mobile.png).

Esta comprobación no sustituye una auditoría con lector de pantalla ni pruebas en
Safari, Firefox o dispositivos físicos. No se modifican las animaciones existentes.

## Entrega

Código, diagnóstico actualizado y evidencia en GitHub. Vista previa para revisión;
producción conserva la última versión publicada. No se hizo merge a `main`.
