# Recorridos visuales del portafolio

Fecha: 11 de noviembre de 2026. Rama: `feature/scrollytelling-escenas`.

## Dirección y alcance

El titular pidió fotografía combinada con interfaces y objetos que actúan durante
el recorrido, evitando repetir un panel genérico en los cinco ejemplos. Se conservan
las portadas v3 y la estructura general de Inicio. Cada recorrido tiene ahora una
composición independiente, cuatro capítulos y acciones dentro de la escena.

| Recorrido | Comportamiento |
| --- | --- |
| Automatización financiera | Documento sobre una mesa fotográfica, línea de lectura, traslado de valores, escritura progresiva y teclas que se presionan; los tres campos quedan registrados. |
| Atención | Teléfono en primer plano, fotografía de la persona que atiende y consola; la respuesta se escribe y llega al portal, y el cierre deja un historial. |
| Power Platform | Recorrido continuo controlado por scroll: app, traslado de una misma solicitud, sello de aprobación e incorporación al informe. Sin decisiones del visitante. Véase `POWER_PLATFORM_SCROLL_QA.md`. |
| Blockchain | Documento sobre una escena oscura, registro de la huella y comparación SHA-256 real del texto; cambiar/restaurar una palabra modifica el resultado. El registro en cadena es ilustrativo. |
| Integraciones | Producto fotográfico con luz accionable; ocho unidades visibles, dos apartadas y un reintento que conserva la misma reserva. |

Los movimientos son composiciones web por capas, sin vídeo ni motor 3D. Los datos
siguen identificados como recreaciones, prototipo o ejemplos. No se añadieron
servicios, dependencias de producción ni llamadas a sistemas de terceros.

## Implementación

- `src/components/home/stories/`: coordinador y cinco escenas independientes.
- `src/content/story-scenes.ts`: textos y rutas de medios de las escenas.
- `src/lib/story-scenes.css`: composición, transiciones y adaptaciones.
- `src/lib/use-story-progress.ts`: avance y retroceso nativo con scroll.
- Se eliminaron las dos demostraciones anteriores y sus estilos sin uso.
- El cambio de proyecto lleva directamente al encabezado para evitar atravesar las
  etapas de otro recorrido. Las acciones que desaparecen devuelven el foco al relato.

En escritorio a partir de 901 × 720, el scroll controla la escena fijada. En pantallas
menores y con movimiento reducido se usan estados completos seleccionables, flechas
y acciones contextuales. El relato íntegro queda accesible en un desplegable.

## Medios

Se generaron una mesa cenital y una lámpara aislada con la herramienta integrada
`image_gen`. Se guardaron versiones WebP en `public/images/stories/`, preservando
la transparencia de la lámpara. Ambos archivos suman aproximadamente 278 KB.
Los prompts y rutas están en `docs/assets/story-scenes-v1.json`. Las otras escenas
reutilizan fotografías existentes del portafolio.

## Verificación

- Instalación con lockfile congelado, TypeScript y ESLint: correctos.
- Compilación de producción: correcta con Node 24.22.3 y pnpm 9.15.4;
  las 12 salidas estáticas se generaron. Inicio: 129 KB de JavaScript inicial.
- Navegador integrado: 1440 × 1000, 901 × 760, 768 × 1024, 390 × 844 y 320 × 740.
- Ajuste adicional para la ventana integrada de 720 px: scroll activo desde
  901 × 720. Se comprobaron los cuatro estados de las cinco escenas a 901 × 720
  y 1280 × 720; se compactaron tableta e inventario y se verificó que no recortan
  su contenido ni el texto del capítulo.
- Los cinco recorridos permiten seleccionar las cuatro etapas.
- En la compilación final, los cinco respondieron al scroll nativo de 01 a 02 y
  regresaron a 01 al invertirlo. Inicio y las otras cuatro páginas, robots y sitemap
  respondieron 200 en la prueba local de producción.
- El scroll financiero retrocede, vacía los campos y vuelve a mostrar escritura parcial.
- La copia original coincide; cambiar martes por jueves produce otra huella;
  restaurar el original vuelve a coincidir.
- La interrupción deja seis unidades disponibles y dos reservadas. El reintento,
  también accionado con Enter, conserva ambas cantidades.
- La lámpara cambia `aria-pressed` y su luz visible al activarse.
- Los capítulos responden al teclado. Las acciones de las otras escenas trasladan el foco al relato.
- Se corrigieron recortes de documento, consola, aprobación y reserva en los tamaños
  mínimos. No se observó desplazamiento horizontal en los tamaños comprobados.
- Consola del navegador: sin errores durante la revisión.

Las capturas de escritorio y móvil están en `docs/qa/scrollytelling/`.

## Ajuste de atención: retrato que responde

- La etapa «La respuesta» inicia una secuencia de 5,4 segundos. Un único reloj
  coordina boca, burbuja y consola; el celular recibe el mismo texto 440 ms después.
- El retrato original se conserva. Dos recortes fotográficos generados con IA
  (17 KB en total) cambian únicamente la zona de los labios con una máscara suave.
  Es una animación ilustrativa sin audio, no una videollamada ni sincronización fonética real.
- Al terminar, la boca vuelve al reposo y aparece la confirmación en el celular.
  «Volver a ver la respuesta» reinicia la secuencia. Retroceder de etapa la cancela;
  regresar a la respuesta la inicia de nuevo. El historial muestra el mensaje completo.
- Movimiento reducido: retrato quieto y respuesta completa, sin escritura progresiva.
- Verificación en navegador: poses abierta/redonda/reposo, texto parcial con desfase,
  igualdad del mensaje final, repetición, reinicio al retroceder, avance con scroll
  y activación con Enter conservando el foco en el relato.
- Ajustes de encuadre y lectura comprobados a 320, 390, 601, 768, 901 y 1280 px;
  los mensajes, la burbuja y el historial caben también a 720 px de alto en escritorio.
- Los otros cuatro recorridos conservan su implementación.
- Imágenes y prompts: `docs/assets/atencion-hablando-v1.json`.

## Blockchain: cristal, huella y comparación

- El scroll forma una huella en un bloque de cristal, lo incorpora a la cadena
  y abre la comparación entre el documento original y la copia. Al avanzar,
  «martes» cambia a «jueves»; retroceder restaura exactamente el estado anterior.
- Se conservan las huellas SHA-256 reales calculadas en el servidor. Se muestran
  completas en la comparación; los 63 caracteres distintos se destacan en ámbar.
  La huella registrada permanece fija. La cadena es una representación ilustrativa.
- Todas las posiciones y opacidades dependen del scroll. Sin reloj, reproducción
  automática ni controles dentro de la escena. Los capítulos siguen disponibles.
- Cristal azul grisáceo con transparencia: 45,9 KB; generación integrada, prompt
  y preparación documentados en `docs/assets/blockchain-scroll-v1.json`.
- Revisado en 1280 × 720, 901 × 720, 768 × 1024, 390 × 844 y 320 × 650.
  Se corrigió el cruce de huellas con el resultado en móvil. Sin desbordamiento
  horizontal; el relato cabe en la ventana mínima con scroll activo.
- A 390 × 600 se verificó la alternativa sin fijación: capítulos seleccionables
  y estados completos. La preferencia de movimiento reducido usa esa misma ruta.
- Avanzar y retroceder la misma distancia recuperó idénticos progreso, matriz de
  transformación y huellas. Se comprobaron los límites de cambio del texto y los
  valores SHA-256 frente a `node:crypto`. La escena no contiene botones ni inputs.
- Regresión de Power Platform: último capítulo, progreso completo y sin
  desbordamiento en móvil. La selección financiera inicial sigue disponible.
- `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint` y `pnpm build`
  correctos con Node 24. Inicio: 131 KB de JavaScript inicial, sin dependencias nuevas.

## Paleta y densidad Matrix

- Inicio adopta fondo carbón, superficies neutras y texto grafito. El verde se
  conserva en los acentos de marca y los dígitos del banner.
- Separación de columnas: 18 px en escritorio (antes 30) y 21 px en móvil
  (antes 34), aproximadamente un 65 % más de columnas. Se densificó también
  la alternativa SVG estática. Se mantienen el límite de fotogramas, DPR y
  la suspensión fuera de pantalla o con la pestaña oculta.
- Revisados banner de escritorio y móvil, contraste del texto y botón de pausa
  con actualización correcta de `aria-pressed`.

## Límites

La preferencia de movimiento reducido se verificó en la implementación; el navegador
integrado no expone emulación de esa preferencia y no se cambiaron ajustes del sistema.
Queda pendiente revisión en dispositivos físicos, Safari y lector de pantalla.
La aprobación visual se realiza sobre una vista previa; esta rama no se ha promovido
a producción ni fusionado con `main`.
