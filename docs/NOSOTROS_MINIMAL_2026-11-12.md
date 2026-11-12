# Nosotros: continuidad clara y apertura de retratos

12 de noviembre de 2026. Rama `feature/nosotros-sticky`. Revisión local posterior
a [la primera propuesta](NOSOTROS_2026-11-12.md); no publicada.

## Cambios solicitados

- Santensor pasa a desarrollo fullstack en el rótulo y la descripción del perfil,
  conservando las demás capacidades proporcionadas por el titular.
- Se elimina el párrafo sobre alias y generación de los retratos de la vista.
- Entrada, equipo, principios y cierre comparten fondo claro. El negro queda dentro
  de las fotografías. Los perfiles usan columnas editoriales, sin paneles oscuros.
- Se conserva el apilado de los principios; su última tarjeta pasa a verde grisáceo
  claro con texto oscuro para mantener la continuidad.
- Los retratos aprobados se reutilizan sin regenerarlos ni sustituirlos.

## Referencias revisadas en vivo

- [Minimal Goods](https://minimal-goods.webflow.io/): apertura de una imagen desde una
  forma redondeada hacia un encuadre amplio; referencia principal para los retratos.
- [SVG Stagger](https://svg-stagger.webflow.io/): progresión desfasada con el scroll.
- [Scroll Toggle](https://tr-scroll-toggle.webflow.io/): relación entre imagen y contenido.
- [Sticky + Horizontal Scroll](https://horizontal-scrolling-sticky-section.webflow.io/):
  referencia comparativa; no se incorpora un carrusel horizontal.

La implementación es propia. No se copian código, imágenes, fuentes ni marca de
las referencias y no se añade GSAP ni otra dependencia.

## Apertura y lectura

`CompanyTeamReveal` conserva el contenido de los perfiles servido desde el servidor.
El hook `useTeamReveal`, en `src/lib`, calcula la apertura de dos máscaras mediante
un listener pasivo y `requestAnimationFrame`; no actualiza estado React en cada scroll.
El segundo retrato lleva un desfase pequeño. El movimiento es reversible.

Desde 701 px de ancho y 700 px de alto, con movimiento permitido, cada retrato
permanece en una figura sticky mientras se abre. Se incluyen tabletas y el ancho
del panel de vista previa. La ampliación mantiene el rostro oculto y el cabello visible.

En móvil, ventanas cortas y movimiento reducido, se muestran imágenes completas
en flujo normal. Cada perfil sigue a su fotografía en el mismo artículo. El índice
permite saltar a `#perfil-weso` y `#perfil-santensor` con enlaces nativos.
La preferencia se consulta tanto en CSS como en JavaScript; el hook cancela su
trabajo pendiente y retira las propiedades de apertura al desactivarse.

Sin JavaScript no se aplica la máscara: los retratos, nombres y textos permanecen
disponibles. El sticky de principios mantiene su umbral de 1024 × 700 px.

## Verificación

- Instalación congelada, typecheck, lint y build correctos con Node 24 y pnpm 9.15.4.
  Se valida en la copia temporal fuera de OneDrive utilizada en la primera revisión.
- Los 114 archivos de código y recursos de la copia coinciden por SHA-256 con el
  checkout: [comparación](qa/nosotros-minimal-2026-11-12/copia-validacion.json).
- Build final: ruta Nosotros 851 B; First Load JS 111 kB. Estas cifras no son Core
  Web Vitals ni una medición de rendimiento en dispositivos reales.
- Siete tamaños, de 320 a 1280 px, incluyendo 814 × 884 y 1024 × 700: sin
  desbordamiento horizontal. Un H1 en cada observación.
- Entrada, apertura completa y retroceso comprobados con muestras de las dos
  máscaras: [movimiento](qa/nosotros-minimal-2026-11-12/movimiento.json).
- Llegada al perfil de Santensor mediante Enter: destino a unos 112 px del borde
  superior frente a una cabecera móvil de 65 px; descripción fullstack visible.
- Copia del HTML compilado sin etiquetas script: dos perfiles, titular visible,
  ausencia del párrafo retirado y ninguna máscara sobre los retratos.
- La revisión final de la compilación de producción local no registró errores ni
  advertencias nuevos de consola.

Evidencia: [responsive](qa/nosotros-minimal-2026-11-12/responsive.json),
[sin JavaScript](qa/nosotros-minimal-2026-11-12/sin-javascript.json),
[perfil móvil](qa/nosotros-minimal-2026-11-12/perfil-mobile.json),
[entrada](qa/nosotros-minimal-2026-11-12/equipo-entrada-desktop.png),
[retratos abiertos](qa/nosotros-minimal-2026-11-12/equipo-abierto-desktop.png),
[principios](qa/nosotros-minimal-2026-11-12/principios-desktop.png) y
[Santensor en móvil](qa/nosotros-minimal-2026-11-12/santensor-mobile.png).

No se emuló la preferencia de movimiento reducido del sistema; se revisaron sus
guardas y se comprobó la retirada de máscaras al cambiar a móvil. No se ejecutaron
Lighthouse, lector de pantalla ni pruebas en otros navegadores o dispositivos físicos.
