# Power Platform: recorrido continuo con scroll

## Comportamiento

Una sola escena horizontal sigue la referencia COMPRA-007. El desplazamiento de
la página controla el encuadre, la escritura de los campos, el traslado del papel,
la presión y retirada del sello, la firma y el cambio del informe.

No hay temporizadores, reproducción automática ni decisiones del visitante.
Los botones de capítulos y las flechas son atajos de navegación accesibles.
No hay botones, formularios editables ni arrastre dentro de la escena.

El informe conserva ocho solicitudes: tres pendientes y cinco aprobadas al entrar;
dos pendientes y seis aprobadas al terminar. Un único punto recorre la curva entre
ambas filas. Todos los datos son ficticios.

## Adaptación

- Escritorio y tableta: scroll fijado desde 720 px de altura.
- Móvil de hasta 600 px de ancho: scroll fijado desde 650 px de altura, con encuadre propio.
- Ventanas más bajas y movimiento reducido: estados completos seleccionables.
  En movimiento reducido se suprimen la inclinación del papel y el sello físico.
- Se conservó la fotografía del portafolio. El sello se generó con `image_gen`
  integrado y se optimizó a WebP con transparencia (18,6 KB). Rutas y prompt en
  `docs/assets/power-scroll-v1.json`.

## Verificación

- Cuatro capítulos comprobados a 320 × 740, 390 × 844, 768 × 1024,
  901 × 720, 1280 × 720 y 390 × 650.
- Encabezado fijo, escena y relato caben en los tamaños con scroll activo.
  Sin desbordamiento horizontal; los contenidos de tableta e informe no se recortan.
- Desplazamiento nativo hacia delante y hacia atrás devuelve exactamente los mismos
  valores de posición, presión del sello, tinta y trazo de firma.
- Una pausa en el scroll conserva el mismo fotograma.
- Se retiraron los estilos y la acción de aprobación del componente anterior.
- No se añadieron dependencias, servicios ni conexiones externas.
- `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint` y `pnpm build`:
  correctos con Node 24. Las 12 salidas estáticas se generan; Inicio queda en 131 KB
  de JavaScript inicial. Consola del navegador sin errores durante la prueba.
- El recorrido financiero conserva el avance nativo de etapa tras el cambio del
  cálculo compartido de posición fija.

La preferencia de movimiento reducido se revisó en el código. No se cambiaron
las preferencias del sistema; el navegador integrado no ofrece emulación de medios.
