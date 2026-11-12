# Servicios: composición editorial y ejemplos de uso

12 de noviembre de 2026. Rama: `feature/scrollytelling-escenas`.
Seguimiento del [diagnóstico de páginas interiores](DIAGNOSTICO_SECCIONES_2026-11-11.md).

## Cambio

La página usa una base marfil, texto grafito y acentos azul grisáceo, arena y lavanda.
El contraste oscuro se reserva al ejemplo de integración. Cabecera y pie conservan
la identidad compartida de la fase anterior.

La entrada combina texto con una fotografía conceptual. Un índice lleva directamente
a las seis capacidades; cada una presenta su resumen y un ejemplo distinto. El alcance
se consulta en un `details` nativo con problema, entregable y resultado buscado.
Se mantienen los seis identificadores de URL usados desde Inicio, Soluciones y el pie.

| Capacidad | Representación |
| --- | --- |
| Software a medida | Aplicación con bandeja, responsables y estados |
| Automatización | Solicitud de compra en papel con aprobación registrada |
| Integraciones y APIs | Pedido, evento y respuesta de inventario |
| Power Platform | Captura desde una app y registro de aprobación |
| Analítica e IA | Serie ficticia con una interpretación explícita |
| Modernización | Sustitución acotada de un módulo conservando el resto |

El scroll modifica trazos, desplazamientos y énfasis visuales breves. No hay bucles,
desplazamiento secuestrado ni interacciones obligatorias para entender la oferta.
`useReducedMotion` devuelve posiciones finales y evita esos desplazamientos cuando
la preferencia está activa. Los textos y alcances permanecen disponibles en HTML.
Los gráficos decorativos se acompañan de una descripción textual del ejemplo.

El cierre pasa de «Solicitar diagnóstico» a «Hablemos de tu proyecto». La conservación
del servicio de origen en Contacto sigue pendiente de esa fase; no se añade un flujo
de formulario ni se promete un entregable comercial no definido.

## Organización y recurso visual

- Página y catálogo: `src/app/servicios/page.tsx` y `src/components/services`.
- Copy y datos ilustrativos: `src/content/services.ts` y `src/content/service-visuals.ts`.
- Estilos y movimiento: `src/lib/services.css` y `src/lib/use-service-scene.ts`.
- Se retiran el antiguo diagrama repetido de tres nodos y sus variantes de animación.
- No se añaden dependencias al proyecto.

La imagen `public/images/services/mesa-software-v1.webp` fue generada con la herramienta
de imágenes para esta página: portátil sin marca sobre mesa clara, cuaderno de procesos,
luz natural y tonos neutros. Está identificada como conceptual y generada con IA.
No representa un cliente, un equipo real ni un producto entregado. Se convirtió a WebP
sin cambiar su composición: 1536 × 1024 px, 168.908 bytes; Next Image sirve variantes
adaptadas al tamaño de pantalla. Todos los ejemplos de interfaz llevan «Datos ficticios».

## Validación

- `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint` y `pnpm build`: correctos
  con Node 24 y pnpm 9.15.4. Build final: Servicios 6,93 kB; First Load JS 159 kB.
  Estas cifras de compilación no son mediciones de Core Web Vitals.
- Inicio, Servicios, Soluciones, Nosotros y Contacto responden HTTP 200 en local.
- Servicios revisado a 320 × 740, 390 × 844, 768 × 1024 y 1280 × 900: sin
  desbordamientos del documento ni de las seis escenas. Se ajustó el apilado en tablet.
- Seis alcances abiertos y cerrados con Enter; sus tres apartados quedan disponibles.
- Primer Tab y Enter llevan a `main#contenido`; CTA de servicio llega a `/contacto#canales`.
- Seis enlaces desde el pie de Contacto llegan al artículo correcto, a unos 96 px del
  borde superior frente a una cabecera móvil de 65 px.
- Cambio de trazo observado al avanzar por la primera escena; la opción de movimiento
  reducido se revisó en código, sin emular la preferencia del sistema.
- Imagen cargada en escritorio y móvil. El JSON conserva lecturas iniciales durante
  la carga responsive y la lectura posterior con la imagen ya disponible.

Evidencia: [pruebas](qa/servicios-2026-11-12/pruebas.json),
[entrada de escritorio](qa/servicios-2026-11-12/hero-desktop.png),
[entrada móvil](qa/servicios-2026-11-12/hero-mobile.png),
[página completa](qa/servicios-2026-11-12/pagina-desktop.png),
[Power Platform](qa/servicios-2026-11-12/power-desktop.png),
[analítica](qa/servicios-2026-11-12/analitica-desktop.png) y
[modernización](qa/servicios-2026-11-12/modernizacion-desktop.png).
La captura completa muestra las escenas fuera del encuadre en su estado de entrada;
las capturas por sección muestran su estado durante el recorrido.

No se ejecutaron Lighthouse, lector de pantalla ni pruebas en navegadores o dispositivos
físicos adicionales. La revisión no constituye una certificación de accesibilidad.

## Estado

INT-03 e INT-08 abordados para Servicios. Publicado el 12 de noviembre de 2026 junto
a Soluciones y la base compartida, desde `bac632f`. Detalles y verificación en
[DEPLOYMENT.md](DEPLOYMENT.md). Nosotros y Contacto quedan como siguientes fases.
No se hizo merge a `main`.
