# Diagnóstico de páginas interiores

Fecha: 11 de noviembre de 2026, Bogotá. Sitio revisado: https://ceroyuno.com.co/.
Versión de aplicación publicada: `be44291a6082f90c529b90676d16dedd86e55d45`.
Alcance: Servicios, Soluciones, Nosotros, Contacto y los elementos compartidos que
conectan esas páginas con Inicio. Este documento registra el diagnóstico y la
propuesta de trabajo sobre esa versión publicada.

Seguimiento: la [primera implementación de la base compartida](BASE_COMPARTIDA_2026-11-11.md)
resuelve INT-01, INT-02, INT-04, INT-05 e INT-11 en la rama de trabajo. El diagnóstico
de abajo conserva las observaciones originales; la implementación se entrega como
vista previa y todavía no se ha promovido a producción.

Segunda fase: [rediseño de Servicios](SERVICIOS_2026-11-12.md), con base clara,
ejemplos visuales diferenciados y alcances accesibles. Atiende INT-03 e INT-08
para esa página; el resto del diagnóstico continúa como referencia pendiente.

Tercera fase: [rediseño de Soluciones](SOLUCIONES_2026-11-12.md), con seis escenas
diferenciadas, base clara y URLs compartibles. Atiende INT-03 e INT-09 para esa
página y la parte de selección compartible de INT-10. Nosotros y Contacto quedan
como siguientes fases de contenido y composición.

## Conclusión

Las páginas interiores funcionan, pero conservan una etapa visual anterior al
Inicio aprobado. El salto de marca, el predominio del verde y la repetición de
paneles hacen que la experiencia pierda continuidad. El contenido de Servicios
y Soluciones tiene una base útil; Nosotros necesita información más concreta y
Contacto debe explicar mejor el siguiente paso que promete el botón «Diagnóstico».

Se confirmó un enlace interno con destino inexistente y varias diferencias de
navegación accesible respecto a Inicio. No se detectaron páginas caídas ni
desbordamientos horizontales en los tamaños revisados. Esto es una revisión
funcional y editorial acotada, no una certificación de accesibilidad o rendimiento.

La metodología aprobada debe trasladarse como una forma de explicar software con
claridad, fotografía y movimiento ligado al relato. No exige convertir cada página
en un recorrido largo: Contacto debe seguir siendo directo y Nosotros debe priorizar
información real sobre la empresa.

## Qué se revisó y qué funciona

| Prueba | Resultado observado | Evidencia |
| --- | --- | --- |
| HTTP de Inicio y cuatro páginas interiores | Las cinco responden 200 | [HTTP y enlaces](qa/secciones-2026-11-11/http-enlaces.json) |
| Títulos, descripción y canonical | Presentes; títulos propios y canonical del dominio principal | [Inspección DOM](qa/secciones-2026-11-11/dom-y-pruebas.json) |
| Encabezado principal | Un H1 por página interior | Inspección DOM |
| Escritorio 1280 × 900 | Sin desbordamiento horizontal | DOM y capturas |
| Móvil 390 × 844 y 320 × 740 | Sin desbordamiento horizontal en las cuatro páginas | DOM y capturas |
| Servicios | Primer servicio abierto inicialmente; los otros cinco abren y cierran el anterior | `serviceTests` en inspección DOM |
| Soluciones | Los seis selectores muestran únicamente su escenario correspondiente | `solutionTests` en inspección DOM |
| Teclado en Soluciones | Flecha derecha pasa del primer escenario al segundo y cambia el panel visible | Prueba en navegador integrado |
| Menú móvil interior | Abre y cierra con su botón; Escape no lo cierra | `menuAfterEscape: true` y código de Header |
| Correo, teléfono y mapa | Hrefs coherentes con `src/config/site.ts`, también en el pie | Inspección DOM; no se enviaron mensajes ni se hicieron llamadas |
| Movimiento reducido | Hay reglas globales, `useReducedMotion` en Servicios y CSS condicionado en Soluciones | Revisión de código; sin emulación de la preferencia |

El análisis de anclas cubre enlaces a fragmentos de las cinco rutas conocidas. No
es un rastreo de todos los sitios externos. Los tamaños HTML del JSON son bytes
del cuerpo recibido, no peso transferido total ni mediciones de Core Web Vitals.

## Hallazgos priorizados

**P1:** resolver en la próxima fase por impacto en continuidad, acceso o siguiente
paso comercial. **P2:** mejora posterior o complementaria. No se identificó un P0
en las comprobaciones realizadas. «Confirmado» describe comportamiento/código;
«evaluación» describe juicio de diseño o contenido, sin atribuirle métricas de usuarios.

| ID | Prioridad / tipo | Hallazgo y efecto | Acción y criterio de aceptación |
| --- | --- | --- | --- |
| INT-01 | P1 · confirmado | «Ver recorridos del portafolio» en Soluciones apunta a `/#proceso`, que no existe en Inicio. | Usar `/#portafolio` o un destino real equivalente. Al activarlo debe quedar visible el portafolio, con el encabezado sin tapar el destino. |
| INT-02 | P1 · evaluación | Inicio usa el logotipo tipográfico `01_`, cabecera clara y «Hablemos»; interiores usan logo en caja, mayúsculas, cabecera oscura y «Diagnóstico». Se perciben como dos versiones del sitio. | Compartir estructura de marca, navegación, espaciado y comportamiento. Permitir temas claro/oscuro sin cambiar la identidad del logo ni la intención del CTA. |
| INT-03 | P1 · evaluación | El verde domina títulos, botones, bordes, estados activos y diagramas de Servicios y Soluciones. Las cuatro páginas tienen cero imágenes dentro del contenido principal. | Definir base carbón/grafito y superficies neutras; verde como acento de marca. Usar fotografía o pantallas cuando expliquen el contenido, no como decoración obligatoria. Revisar juntos Inicio y las cuatro páginas. |
| INT-04 | P1 · confirmado | Las páginas interiores carecen del enlace «Saltar al contenido» que sí tiene Inicio. | Añadir enlace visible al enfocar y destino estable en `main`. Primer Tab permite saltar la navegación repetida y continuar desde el contenido. |
| INT-05 | P2 · confirmado | La navegación interior no indica la página actual. El menú móvil no tiene `aria-controls` ni cierre con Escape. | Añadir `aria-current="page"`, asociar el botón con su navegación y cerrar con Escape devolviendo el foco al disparador. Probar teclado en ambas cabeceras. |
| INT-06 | P1 · evaluación | Nosotros explica filosofía y tres principios, pero no quién responde por el trabajo, cómo se colabora ni qué evidencia respalda el enfoque. Tampoco tiene un CTA propio dentro de `main`. | Construir una página de confianza con información verificada, método concreto y cierre hacia contacto. No rellenar con perfiles, trayectoria, clientes o métricas inventados. |
| INT-07 | P1 · evaluación | «Diagnóstico» y «Solicitar diagnóstico» llevan a tres canales de contacto sin explicar alcance, proceso ni entregable del diagnóstico. | Elegir entre «Hablemos» para una primera conversación o definir el diagnóstico con datos confirmados. El destino debe explicar qué enviar y qué ocurrirá después, sin prometer plazos o gratuidad no acordados. |
| INT-08 | P2 · evaluación | Los seis servicios comparten un ejemplo de tres nodos y la misma estructura de panel. Los detalles técnicos son útiles, pero la representación es muy repetitiva. | Conservar el contenido de encaje/entregable y variar la evidencia visual por familia. La lectura rápida debe permitir entender qué se construye sin abrir todos los servicios. |
| INT-09 | P2 · evaluación | Soluciones combina un flujo genérico de tres pasos con seis ejemplos que se presentan como la misma tabla. Repite temas del Inicio sin ofrecer todavía una lectura más concreta del uso. | Diferenciar por situaciones y resultados observables. Incorporar una escena, pantalla o documento relevante por familia, con selección opcional y alternativa textual. |
| INT-10 | P2 · confirmado / mejora | Todos los CTA comerciales pierden el servicio o escenario de origen al llevar al mismo `#canales`. Los escenarios seleccionados tampoco tienen una URL que conserve la elección. | Conservar contexto mediante una URL o texto de asunto editable, sin introducir backend. Poder compartir un escenario y retomar su selección; el visitante siempre puede cambiar el contexto. |
| INT-11 | P2 · confirmado / mejora | Los servicios del pie interior son texto plano, aunque aparecen junto a una columna de enlaces. El pie y su mensaje difieren de Inicio. | Unificar el pie y enlazar los servicios a anclas existentes. Mantener consistentes los datos de contacto de `siteConfig`. |
| INT-12 | P2 · evaluación | Nosotros acumula padding superior en `PageHero` y presenta cuatro tarjetas de texto. En móvil tarda en introducir contenido concreto después del titular. Contacto da igual peso visual a correo, teléfono y mapa. | Compactar el comienzo de Nosotros y usar una composición editorial. En Contacto, priorizar el canal acordado para iniciar conversación y dejar ubicación como información secundaria. |

### Localización en el código

Referencias fijadas a la versión de aplicación auditada, antes de la implementación.

- INT-01: [enlace de Soluciones](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/app/soluciones/page.tsx#L60).
- INT-02, INT-04, INT-05: [cabecera interior](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/layout/header.tsx),
  [cabecera de Inicio](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/home/home-chrome.tsx) y los `main` de las rutas.
- INT-03: [tokens actuales](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/tailwind.config.ts), [CSS global](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/app/globals.css),
  [paleta de Inicio](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/lib/home.css) y clases `text-matrix` / `bg-matrix` de los exploradores.
- INT-06, INT-12: [Nosotros](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/app/nosotros/page.tsx),
  [contenido de empresa](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/content/company.ts), [PageHero](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/layout/page-hero.tsx).
- INT-07, INT-10: [destino comercial](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/config/site.ts#L21),
  [Contacto](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/app/contacto/page.tsx), [copy de contacto](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/content/site.ts).
- INT-08: [explorador de Servicios](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/services/service-explorer.tsx),
  [contenido](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/content/services.ts).
- INT-09, INT-10: [explorador de Soluciones](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/solutions/solution-explorer.tsx),
  [flujo del hero](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/solutions/solution-journey.tsx), [contenido](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/content/solutions.ts).
- INT-11: [pie interior](https://github.com/Blaister9/cero-y-uno-web/blob/be44291a6082f90c529b90676d16dedd86e55d45/src/components/layout/footer.tsx#L53).

## Dirección por página

### Servicios: explicar qué podemos construir

Conservar las seis capacidades y la distinción entre problema, entrega y resultado
buscado. El acordeón funciona y es útil para consultar detalles; no necesita convertirse
en un juego ni ser reemplazado solo por una preferencia estética.

Propuesta de estructura:

1. Titular breve, contexto y una imagen o composición que muestre trabajo real.
2. Índice claro de capacidades, con una frase de encaje visible por servicio.
3. Una muestra relevante: automatización con documento, integración con un intercambio,
   analítica con una visualización legible. Evitar seis copias del mismo diagrama.
4. Alcance y entregables concretos; requisitos del cliente cuando estén confirmados.
5. Enlace a un recorrido relacionado y contacto conservando el servicio de interés.

Paleta sugerida: carbón, gris cálido y marfil; acento contenido según la evidencia.
El movimiento debe revelar una relación o un cambio, nunca impedir la consulta del alcance.

### Soluciones: reconocer el problema y ver el uso

Conservar el lenguaje por situaciones y los enlaces a servicios relacionados. La
selección nativa de escenarios funciona con teclado y debe preservarse si se rediseña.
La diferencia con Servicios debe ser explícita: aquí se elige por lo que se atasca;
allí se consulta la capacidad técnica para resolverlo.

Propuesta: entrada por necesidad → situación inicial → ejemplo concreto → cambio
observable → qué incluiría → servicio relacionado → conversación contextual.
Organizar los seis escenarios en familias para evitar saturación. Mantenerlos como
ejemplos ilustrativos, sin convertirlos en casos de éxito. Reutilizar recursos aprobados
cuando encajen, pero evitar duplicar todo el scrollytelling del Inicio.

Paleta sugerida: grafito, blanco humo y azul grisáceo con variaciones puntuales.
Corregir INT-01 antes de ampliar la página.

### Nosotros: dar razones para confiar

La página actual es una declaración de principios. La siguiente versión debe mostrar
quién está detrás, qué decisiones toma y cómo trabaja con una empresa cliente.

Propuesta: presentación concreta → personas y responsabilidades verificadas → forma
de trabajo con entregables por etapa → evidencia permitida → invitación a conversar.
Si no hay material de equipo aprobado, trabajar con tipografía, documentos y procesos;
no usar retratos de IA como si fueran miembros reales de la empresa.

Datos necesarios antes de redactar la versión definitiva: personas/roles que se pueden
publicar, historia verificable, modalidad de colaboración, soporte ofrecido y material
visual autorizado. Los proyectos deben mantener su clasificación actual: proyecto,
prototipo o ejemplo. No convertir el ejemplo Blockchain en una implementación de cliente.

Paleta sugerida: carbón, marfil y tonos naturales de la fotografía real disponible.
Animación discreta; la información y las personas deben llevar el peso de la página.

### Contacto: hacer claro el siguiente paso

Los tres canales actuales están configurados como enlaces válidos y no simulan un formulario.
No hace falta añadir un backend para mejorar esta página.

Propuesta: invitación concreta → canal principal → breve guía de lo que conviene contar
(proceso, herramientas, bloqueo y resultado buscado) → qué sucede después → teléfono
y ubicación como alternativas. Mantener el correo visible y copiable aunque se use
`mailto:`, porque su apertura depende de la configuración del dispositivo.

Antes de prometer un diagnóstico, confirmar su alcance y condiciones. Antes de añadir
WhatsApp, agenda, formulario, horarios o plazo de respuesta, confirmar disponibilidad
y operación real. El diagnóstico del sitio no acredita que el buzón reciba mensajes
ni que el teléfono sea atendido; esas pruebas necesitan un flujo autorizado separado.

## Secuencia de implementación recomendada

| Etapa | Resultado revisable | Dependencias |
| --- | --- | --- |
| 1. Base compartida | Marca, cabecera/pie coherentes, ancla corregida, salto al contenido y estados de navegación | Mantener Inicio como referencia aprobada |
| 2. Servicios | Una capacidad completa como patrón, seguida de las otras cinco con variación justificada | Acordar alcance y evidencia visual |
| 3. Soluciones | Una situación completa, navegación por escenarios y vínculo al servicio correspondiente | Taxonomía de Servicios y enlaces estables |
| 4. Nosotros | Relato editorial sustentado en datos y material reales | Información verificable de empresa/equipo |
| 5. Contacto | Siguiente paso claro y continuidad desde cada página | Definición de diagnóstico y canal principal |
| 6. Validación conjunta | Recorrido Inicio → capacidad/escenario → contacto sin pérdida de contexto | Versiones revisadas de las cuatro páginas |

Cerrar primero los errores y ayudas compartidas evita repetir el trabajo en cada
página. La implementación puede empezar por Servicios, mientras se reúne la
información de Nosotros y las condiciones del diagnóstico.

## Criterios de cierre de la siguiente fase

- Las cinco páginas se reconocen como una misma marca; cada interior conserva una
  función y composición propia. El verde funciona como acento.
- Todos los enlaces internos, anclas y escenarios compartibles tienen destino válido.
- El visitante puede entender oferta y siguiente paso sin reproducir una animación
  ni completar una interacción obligatoria.
- Tab, Shift+Tab, Enter, Space, flechas en radios y Escape funcionan según el control;
  foco visible, navegación actual y salto al contenido se comprueban en cada ruta.
- Revisar 320, 390, 768 y 1280 px, zoom del navegador, textos largos y movimiento reducido.
- Mantener etiquetas de ejemplo/prototipo, metadatos propios y contenido editable.
- Ejecutar instalación congelada, typecheck, lint y build antes de cerrar cambios de
  aplicación. Medir rendimiento antes/después al incorporar fotografías o animación.
- Aprobar la vista previa y publicar solo la versión revisada, conforme al flujo actual.

## Evidencia visual

| Página | Escritorio 1280 × 900 | Móvil 390 × 844 |
| --- | --- | --- |
| Servicios | [Captura completa](qa/secciones-2026-11-11/servicios-desktop.png) | [Captura completa](qa/secciones-2026-11-11/servicios-mobile.png) |
| Soluciones | [Captura completa](qa/secciones-2026-11-11/soluciones-desktop.png) | [Captura completa](qa/secciones-2026-11-11/soluciones-mobile.png) |
| Nosotros | [Captura completa](qa/secciones-2026-11-11/nosotros-desktop.png) | [Captura completa](qa/secciones-2026-11-11/nosotros-mobile.png) |
| Contacto | [Captura completa](qa/secciones-2026-11-11/contacto-desktop.png) | [Captura completa](qa/secciones-2026-11-11/contacto-mobile.png) |

Las capturas completas conservan el contenido por debajo del primer encuadre.
Los JSON guardan mediciones y resultados, no credenciales ni datos de visitantes.

## Límites de esta revisión

No se ejecutó Lighthouse, axe, lector de pantalla ni emulación de movimiento reducido.
No se midieron LCP, INP, CLS, tasa de conversión o uso real. No se probaron Safari,
Firefox ni dispositivos físicos. Los estados de los exploradores se comprobaron en
el navegador integrado; los deep links de Servicios se inspeccionaron en el código
y sus destinos existen, pero no se ensayó cada llegada externa por hash.

El contraste no se certificó con una auditoría exhaustiva; el próximo rediseño debe
medir cada combinación, incluyendo texto pequeño, foco y estados activos. El texto
extraído del DOM concatena las dos partes del H1 de Servicios y Soluciones; conviene
validar su lectura con tecnología asistiva antes de tratarlo como un defecto audible.

Este cambio añade documentación y evidencia. Las pruebas de aplicación del despliegue
base constan en `DEPLOYMENT.md`; no se repitió una compilación al no cambiar el producto.
