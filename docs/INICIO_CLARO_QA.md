# Inicio claro · propuesta revisable

11 de noviembre de 2026. Rama `feature/inicio-claro`, creada desde `origin/dev` en `c16a3fa`.
La publicación de esta propuesta fue autorizada por el titular el 11 de noviembre
de 2026. Las revisiones anteriores documentan su preparación local.

**Entrega actual en GitHub:** `feature/portfolio-imagenes-v3` reemplaza las cinco
portadas. El titular realizará el despliegue después; esta entrega no se promueve a
producción.

**Publicación anterior verificada:** https://ceroyuno.com.co/, commit `6f8b6aa`, deployment
`EvfzirgUMvLnLgvdgPpqG6UkQUhY`. Vercel confirmó Production / Ready después de la
verificación de identidad del titular. Las cinco rutas responden 200; imágenes y
selector de los cinco relatos comprobados en el dominio público. Capturas de
producción: [1440 px](qa/inicio-claro/produccion-1440.jpg) y
[390 px](qa/inicio-claro/produccion-390.jpg).

## Revisión 6 · cinco portadas distintas, entrega para despliegue posterior

Se rehacen por completo las cinco imágenes del portafolio tras la observación del
titular sobre la repetición de rostros, peinados, vestuario y escenarios. Los cuatro
protagonistas humanos se diferencian por edad, rasgos, cabello, ropa, entorno y
actividad. Blockchain usa una metáfora de objetos para variar también la composición.

La relación con cada experiencia se concreta en documentos financieros, conversación,
aprobación de una solicitud en tableta, cadena de registros e intercambio entre pedido
e inventario. Las imágenes siguen siendo conceptuales y generadas con IA; no se
presentan como clientes, equipo real o capturas de Microsoft.

- Cinco archivos nuevos `public/images/portfolio/*-v3.webp`, 1280 × 720 px,
  462.644 bytes en total. Las versiones anteriores se conservan con sus nombres.
- `src/content/portfolio.ts` referencia únicamente v3 y actualiza sus textos
  alternativos y encuadres. No se modifica la lógica de los cinco relatos.
- Prompts y procedencia completos: `docs/assets/portfolio-images-v3.json`.

Pruebas realizadas:

| Comprobación | Resultado |
| --- | --- |
| Instalación con lockfile congelado, tipos, lint y build | Correctos |
| Carga de las cinco imágenes | Correcta; el DOM referencia las cinco rutas v3 |
| Composición 1440 px y recorte 390 px | Revisados en el navegador integrado |
| 320, 390, 768 y 1440 px | Sin desbordamiento horizontal de página ni tarjetas |
| Los cinco accesos y “Ver resultado” | Seleccionan su relato y muestran la etapa 04; scroll-linked activo en escritorio |

Capturas: [1440 px](qa/inicio-claro/portafolio-v3-1440.jpg) y
[390 px](qa/inicio-claro/portafolio-v3-390.jpg).

Se sube la rama completa a GitHub para el despliegue posterior del titular. No hay
merge a `main` ni promoción a producción. Las validaciones de movimiento reducido y
teléfono físico pendientes de revisiones anteriores no se presentan como realizadas.

## Revisión 5 · cinco relatos por scroll y representación negra

- Las cinco experiencias usan la escena sticky y progreso reversible con scroll
  nativo en escritorio. Se retiró la excepción que limitaba este comportamiento al
  recorrido financiero. Los otros cuatro relatos cambian su escena en cada capítulo.
- Se conservan las etapas seleccionables para móvil, tableta, pantallas de poca altura
  y movimiento reducido; todos los textos permanecen disponibles.
- Las cinco fotografías del portafolio pasan a la serie v2, con protagonistas negros
  y una mujer negra en Atención en tiempo real, según la petición del titular.
  Son imágenes conceptuales generadas con `image_gen`, no clientes ni personal real.
- Archivos: `public/images/portfolio/*-v2.webp`, 1280 × 720 px, 499.480 bytes en total.
  Prompts y procedencia: `docs/assets/portfolio-images-v2.json`.

Validación realizada en el navegador integrado:

| Prueba | Resultado |
| --- | --- |
| Scroll real en Atención, Power Platform, Blockchain e Integraciones | 01 → 02 → 03 → 04; al subir vuelve a 02 y revierte el estado de la escena |
| Escena en los cuatro relatos | Sticky a 104 px; permanece dentro de la pantalla de 1440 × 1000 |
| Financiero con scroll real | Tres campos completos al final; cero al volver al inicio |
| 320, 390 y 768 px | Sin desbordamiento; sticky y scroll-linked desactivados |
| 1440 × 700 | Versión de etapas con escena estática, por altura disponible |
| Cuatro relatos añadidos en móvil | Cuatro capítulos visibles y botón de resultado funcional |
| Imágenes v2 | Las cinco cargan; encuadres revisados en escritorio y 390 px |
| Código | Instalación congelada, typecheck, lint y build correctos |

Capturas: [1440 px](qa/inicio-claro/portafolio-v2-1440.jpg),
[390 px](qa/inicio-claro/portafolio-v2-390.jpg) y
[atención al finalizar el scroll](qa/inicio-claro/atencion-scroll-1440.jpg).
Continúan pendientes la emulación visual real de movimiento reducido y la prueba
en teléfono físico; no se presentan como realizadas.

Esta revisión sustituye la excepción de relatos por botones de las revisiones previas.
No se ha hecho merge a `main`; la publicación se realiza desde la versión revisada
mediante la promoción de su deployment en Vercel.

## Revisión 4 · portafolio con fotografía editorial

Se rediseñan los accesos de **Trabajo en acción** con dos portadas principales
grandes y tres portadas secundarias para los ejemplos. La introducción queda en
“Del problema al software funcionando.” Se conservan los cinco recorridos, sus datos
y las clasificaciones Proyecto, Prototipo y Ejemplo.

- Cinco imágenes generadas con la herramienta integrada `image_gen`, con aspecto
  fotográfico: escaneo documental, atención humana, bandejas de aprobación, sello de
  integridad y conexión de red. No se presentan como clientes ni personal de la empresa.
  La sección incluye una nota breve sobre su generación con IA.
- Sin texto ni interfaces superpuestas dentro de las fotografías. Título, clasificación
  y flecha quedan fuera; las dos principales conservan su frase de apoyo.
- Portadas 16:9 en escritorio; principales 4:3 en móvil y todas 4:3 en tableta.
  En móvil se apilan sin reducir la versión de escritorio.
- Archivos locales: `public/images/portfolio/`, cinco WebP de 1280 × 720 px,
  **402.752 bytes** en total. `next/image` reserva la proporción, carga de forma diferida
  y entrega un tamaño adaptado. No hay dependencias nuevas.
- Contenido, imágenes y encuadres editables en `src/content/portfolio.ts`.
  Prompts completos y procedencia: `docs/assets/portfolio-images-v1.json`.
- Cada portada selecciona su recorrido, usa scroll nativo y lleva el foco al título
  de la experiencia. Con movimiento reducido el desplazamiento es inmediato.

Comprobaciones realizadas en el navegador integrado, con producción local:

| Prueba | Resultado |
| --- | --- |
| 1440, 768, 390 y 320 px | Sin desbordamiento horizontal de página ni contenido de las tarjetas |
| Carga de fotografías | Las cinco cargan; en 390 px se observó `currentSrc` optimizado a 384 px |
| Cinco accesos | Cambian título, clasificación y experiencia; foco en `home-project-title` |
| Teclado | Enter abre el recorrido; Tab avanza; contorno brand de 2 px y separación de 3 px |
| Atención, Power Platform, Blockchain e Integraciones | “Ver resultado” muestra sus estados finales y conserva las aclaraciones de prototipo/ejemplo |
| Financiero en escritorio | Modo ligado al scroll activo; resultado llena tres campos, etapa 1 vuelve a cero |
| Financiero en móvil | Sticky y scrub desactivados; etapas seleccionables completas y reversibles |
| Ancla del hero | “Explorar nuestro trabajo” llega al inicio de la sección bajo la cabecera |
| Instalación y comprobaciones de código | Lockfile congelado, typecheck, lint y build correctos |

Capturas: [1440 px](qa/inicio-claro/portafolio-1440.jpg) y
[390 px](qa/inicio-claro/portafolio-390.jpg).
La guía de mantenimiento está en [IMAGENES_Y_TARJETAS.md](IMAGENES_Y_TARJETAS.md).

Pendiente: emulación visual real de `prefers-reduced-motion`, no disponible en esta
sesión de IAB; su implementación se revisó en el código. No se declara prueba en
teléfono físico ni auditoría completa con lector de pantalla.

Desviaciones respecto al documento inicial: los accesos de portafolio ahora tienen
portadas fotográficas a petición del usuario y una introducción más breve. Se mantienen
las demostraciones y su orden inicial. El hero ampliado y la galería de capacidades
aceptados en las revisiones anteriores se conservan. No se publica ni modifica otra ruta
en esta revisión.

## Revisión 3 · tarjetas con imágenes y movimiento por extremos

Esta revisión sustituye las seis filas de capacidades por una galería editorial.
El hero ampliado de la revisión 2 y el resto de Inicio se conservan.

- Seis imágenes generadas con `image_gen`, cada una con una metáfora del servicio:
  encaje a medida, secuencia automática, conexiones, trabajo interno, datos y evolución
  de sistemas. No se presentan como fotografías de clientes ni capturas de productos.
- Archivos finales locales: `public/images/capabilities/`, seis WebP de 960 × 1200 px,
  679.774 bytes en total. `next/image` entrega tamaños adaptados y carga diferida.
- Tres tarjetas visibles en escritorio, dos en tableta y una con la siguiente asomando
  en móvil. Título, categoría, frase breve y fotografía reemplazan la lista de texto.
- **Sin barra de desplazamiento inferior**, a petición del usuario durante la revisión.
  Con ratón, el cursor en los extremos mueve las tarjetas; la velocidad crece hacia el
  borde. Se detiene al volver al centro, salir de la galería, usar el teclado, cambiar de
  ventana o llegar al extremo. No hay avance automático por tiempo.
- En móvil sigue disponible el desplazamiento horizontal nativo. Se conservan flechas
  de 48 px, contador, Inicio/Fin y navegación por teclado. Con movimiento reducido no
  se activa el desplazamiento continuo por cursor.
- Imagen, encuadre, texto alternativo, título, descripción, orden y enlace se editan en
  **`src/content/capabilities.ts`**. No hay una dependencia adicional de carrusel ni un
  backend de gestión.

La guía para sustituir imágenes está en
[`IMAGENES_Y_TARJETAS.md`](IMAGENES_Y_TARJETAS.md). Los prompts completos y la
procedencia están en [`assets/capability-images-v1.json`](assets/capability-images-v1.json).

Comprobaciones en el navegador integrado:

| Prueba | Resultado |
| --- | --- |
| Las seis imágenes | Cargan correctamente; `currentSrc` selecciona el tamaño optimizado, observado a 640 px en escritorio |
| Siguiente y contador | De `1–3 / 6` a `2–4 / 6` |
| Inicio / Fin | Acceden a los extremos; al final indica `4–6 / 6` y desactiva Siguiente |
| Barra inferior | `scrollbar-width: none`; también se oculta en WebKit |
| Cursor en el borde derecho | Movimiento continuo hasta el extremo, observado de 0 a 1289 px |
| Cursor en el borde izquierdo | Retrocede, observado de 1289 a 1245 px |
| Cursor en el centro | Se detiene en 1242 px y permanece en 1242 en la observación siguiente, sin forzar un salto de tarjeta |
| Desplazamiento horizontal en 390 px | De `1 / 6` a `2 / 6`, con 301 px de desplazamiento nativo |
| 320, 390, 768 y 1440 px | Sin desbordamiento horizontal de la página |
| Foco y controles | Contorno brand de 2 px; botones de 48 px; las seis tarjetas permanecen como enlaces en el DOM |
| Enlaces de servicios | Las seis anclas existen; la tarjeta de Software a medida navega a `/servicios#software-a-medida` y encuentra su sección |

Capturas de la revisión actual:
[escritorio](qa/inicio-claro/capacidades-1440.jpg),
[móvil](qa/inicio-claro/capacidades-390.jpg) y
[tarjetas 4–6](qa/inicio-claro/capacidades-final-1440.jpg).
Instalación con lockfile congelado, `typecheck`, `lint` y `build` completados sin
errores. La lectura de consola conserva mensajes de precarga RSC del periodo de
recompilación con el servidor local detenido; se comprobó la navegación real con el
servidor de producción local activo.

La preferencia de movimiento reducido está contemplada en el código y CSS, pero la
emulación visual real sigue pendiente por las capacidades de IAB. El ancho móvil se
probó dentro del navegador integrado; no se declara una prueba en un teléfono físico.

Las secciones siguientes se conservan como registro de las propuestas previas.

## Revisión 2 · banner Matrix a todo el ancho

Esta revisión incorpora el ajuste pedido después de revisar la primera preview.
**Sustituye las decisiones de hero y ventana Matrix descritas en la propuesta inicial
que se conserva más abajo.** El portafolio, capacidades, cierre y navegación mantienen
la propuesta aceptada.

- El hero ahora es un banner verde bosque a todo el ancho. A 1440 × 1000 ocupa
  aproximadamente 1425 × 920 px, descontando la barra vertical del navegador.
- La lluvia existente ocupa todo ese fondo. Se retiran el rótulo “El origen de lo
  que sigue”, el “01” estático central y el texto inferior de la ventana anterior.
- El titular mantiene Manrope 88/44 px. Dentro del banner usa texto claro, acento mint
  y botón mint con texto oscuro. Una capa oscura protege el contraste del área de
  lectura; en tableta y móvil cubre toda la anchura del texto.
- Al bajar, solo la lluvia se desvanece y se desenfoca de forma reversible. La
  superficie detrás del texto permanece estable. Hay una transición al fondo claro
  en el borde inferior del banner; no se captura la rueda ni se fuerza el scroll.
- La progresión vive en `src/lib/use-hero-rain.ts`, con listener pasivo y una
  actualización por frame. No vuelve a escribir estilos cuando el progreso no cambia.
- Se conserva la pausa accesible y la suspensión del canvas fuera de pantalla. Con
  movimiento reducido se mantiene el fondo SVG estático y se desactiva el efecto de
  desvanecimiento ligado al scroll.

Validación de esta revisión en el navegador integrado:

| Prueba | Resultado |
| --- | --- |
| Instalación con lockfile congelado, typecheck, lint y build | Correctos; sin nuevas dependencias |
| Banner completo a 1440 × 1000 | Lluvia y banner comparten ancho y alto; ya no hay una ventana lateral |
| Scroll nativo de 380 px | Opacidad aproximada 0.582 y desenfoque de 1.67 px |
| Regreso al inicio | Opacidad 1 y sin desenfoque |
| Pausa | Dos capturas completas consecutivas, sin redimensionar ni recortar, resultan idénticas |
| 390 × 844 | Banner de 780 px de alto; sin desbordamiento; pausa de 48 px separada del texto |
| Movimiento reducido | Lógica y estilos revisados; sigue pendiente emulación visual real de la preferencia |

Capturas actuales: [escritorio](qa/inicio-claro/banner-amplio-1440.jpg),
[móvil](qa/inicio-claro/banner-amplio-390.jpg) y
[durante el scroll](qa/inicio-claro/banner-scroll-1440.jpg).
Las capturas con nombre `inicio-*` corresponden a la primera propuesta y se conservan
como referencia de esa revisión.

## Propuesta inicial · resultado y alcance

Inicio presenta el hero claro, la lluvia original dentro de una ventana verde bosque,
el recorrido financiero como primer acceso, los otros cuatro recorridos, capacidades
en filas y cierre y pie claros. No se han añadido clientes, resultados comerciales,
testimonios, backend, autenticación ni bases de datos.

El contenido comercial nuevo se edita en `src/content/home.ts`; los relatos y datos
existentes siguen en `src/content/project-stories.ts` y `service-case.ts`.
`src/app/page.tsx` solo compone las secciones. El comportamiento de scroll está en
`src/lib/use-story-progress.ts`, y los estilos de Inicio en `src/lib/home.css`.

Se retiraron las secciones y escenas antiguas de Inicio que dejaron de tener consumidores.
Las cinco experiencias se conservan en la nueva presentación; se mantienen los cuatro
capítulos y datos de los ejemplos secundarios. Atención se rotula como **Prototipo**.

### Efectos en componentes compartidos

- Cabecera y pie seleccionan la variante clara únicamente en `/`, mediante `usePathname`.
  El pie pasa a ser un componente cliente para resolver esa selección.
- Los estilos claros se limitan a `.home-page`, `.home-header` y `.home-footer`.
  No se cambiaron los tokens oscuros de Tailwind que usan las demás rutas.
- `BinaryCanvas` incorpora propiedades opcionales `paused` y `background` y conserva
  su fondo por defecto. Retiene sus números, fuente, cabezas claras, verde `#68DA8F`,
  paso de 19 px, intervalo de 50 ms y velocidades de 55–150 px/s.
- El CSS compartido importa la hoja acotada de Inicio y elimina reglas del selector
  de portafolio retirado. No se han editado las páginas de Servicios, Soluciones,
  Nosotros o Contacto.

## Comparación con la especificación

| Elemento | Implementación |
| --- | --- |
| page / surface | `#F7F8F4` / `#FFFFFF` |
| ink / muted | `#172B24` / `#52645B` |
| brand / brand-hover | `#19533B` / `#123D2B` |
| matrix / mint | `#68DA8F` / `#A8EDBE` |
| soft / line / stage | `#E9F1E7` / `#DDE5DB` / `#103629` |
| Tipografía principal | Manrope variable local, ya presente en el proyecto |
| Tipografía secundaria | IBM Plex Mono 400 local, distribución Google Fonts y licencia OFL incluida |
| H1 a 1440 / 390 | 88 / 44 px; peso 500, línea 1.04, tracking −0.05em |
| H2 a 1440 / 390 | 60 / 36 px; peso 500, línea 1.08, tracking −0.04em |
| Título de caso | 40 / 30 px; peso 500, línea 1.18, tracking −0.035em |
| Introducción / cuerpo | 20 / 17 px y 17 / 16 px, respectivamente |
| Etiquetas mono | Escala fluida de 12 a 11 px |
| Ancho máximo / márgenes | 1280 px; 80 px de margen a 1440, 32 en tableta y 22 en móvil |
| Hero | Proporción 7:5, separación de 48 px; texto antes de la escena en móvil |
| Ventana Matrix | Cerca de 507 × 540 px en IAB a 1440; altura de 276 px en móvil |
| Cabecera | 80 / 64 px, sólida, clara y fija |
| Botones | Altura mínima de 48 px; CTA con radio de 6 px |
| Radios | Matrix 16 px; demostraciones 12 px; superficies con borde de 1 px |
| Foco | Contorno brand de 2 px con separación de 3 px; mint dentro de Matrix |
| Financiero | Cuatro tramos de 60svh; scroll nativo, interpolación reversible y navegación 01–04 |
| Sticky | Contenedor a 104 px; ventana financiera observada de unos 493 px de altura |
| Alternativa de lectura | Hasta 900 px, altura menor de 760 px o movimiento reducido: etapas seleccionables y cuatro textos completos |
| Capacidades | Seis servicios y sus seis destinos previos en Servicios; dos columnas y una en móvil |
| Cierre | soft, padding 72 / 48 px, texto y CTA solicitados; pie claro con canales de configuración |

### Desviaciones y decisiones explícitas

1. **Espaciado entre superficies:** la separación de 112 px se reparte entre el final
   del hero (64) y el principio de proyectos (48). Entre proyectos y capacidades se
   reparte 56 + 56. En móvil se usan 32 + 32 = 64. Esto sustituye el padding inferior
   aislado de 112/64 px del hero propuesto y evita sumar dos separaciones completas.
2. **Anchos medidos:** IAB reserva 15 px para su barra vertical. Por ello el contenedor
   medido a 1440 es 1265 px y la escena móvil a 390 es 331 × 276 px. Con barras
   superpuestas, las mismas reglas ofrecen los 1280 y 346 px previstos. No hay
   desplazamiento horizontal a 320, 390, 768 ni 1440 px.
3. **Escena y controles:** el límite de 560 px se aplica a la ventana de demostración;
   navegación, estado y ayuda quedan fuera. El conjunto financiero ocupa unos 621 px
   a 1440 × 1000, y cabe entre el top de 104 px y el borde inferior. También se revisó
   el límite de 901 × 760. A 1440 × 700 se desactiva sticky.
4. **Ejemplos adicionales:** Atención, Power Platform, Blockchain e Integraciones
   usan cuatro etapas seleccionables incluso en escritorio. El scrub se concentra
   en Automatización financiera, como recorrido protagonista. Los cuatro relatos
   siguen siendo legibles y los datos conservan su condición de recreación o ejemplo.
5. **Datos en móvil:** los valores financieros usan 13 px en vez de reducirlos a una
   etiqueta mono de 11 px. El acceso breve “Hablemos” de cabecera usa 12 px en móvil;
   los CTA principales mantienen 14 px.
6. **Fuentes:** Manrope reutiliza la copia local existente; IBM Plex Mono se sirve
   desde `public/fonts` para no depender de peticiones a Google durante la visita.
   No se han añadido dependencias npm.

## Pruebas realizadas

Validación visual y funcional en el navegador integrado de Codex, sobre la compilación
de producción local. Las capturas se guardan en `docs/qa/inicio-claro/`.

| Prueba | Resultado |
| --- | --- |
| `pnpm install --frozen-lockfile` | Correcto usando pnpm 9.15.4, la versión fijada por el proyecto |
| `pnpm typecheck` | Correcto |
| `pnpm lint` | Correcto |
| `pnpm build` | Correcto; todas las rutas estáticas generadas |
| HTTP de Inicio, Servicios, Soluciones, Nosotros y Contacto | 200 |
| Anclas de los seis servicios | Las seis existen en el HTML de Servicios |
| 1440 × 1000 | Hero en dos zonas, H1 88 px, H2 60 px, Matrix aislada y fondo claro |
| 390 × 844 | H1 44 px, H2 36 px, mono 11 px, CTA apilados, documento y registro apilados |
| 320 × 740 y 768 × 1024 | Sin desbordamiento horizontal; escena sin sticky; menú disponible |
| 901 × 760 y 1440 × 700 | Se revisó el ajuste de la escena y el fallback de poca altura |
| Pausa Matrix | Cambia el nombre y `aria-pressed`; dos capturas del fotograma pausado resultan idénticas |
| Ancla del hero | “Explorar nuestro trabajo” lleva a `#portafolio` |
| Scrub financiero | Se observó un campo completo y otro en traslado; volver a 01 deja cero campos registrados |
| Resultado financiero | “Ver resultado” completa tres campos y muestra “Registro completo” |
| Teclado | Enter activa el resultado; foco de 2 px y offset de 3 px |
| Menú móvil | Abre, muestra las cinco rutas y cierra con Escape devolviendo el foco al disparador |
| Salto al contenido | Shift+Tab alcanza el enlace; Enter lleva el foco a `#contenido` |
| Otros cuatro recorridos | Accesibles; Atención rotulada como prototipo y los tres secundarios como ejemplos; estados finales comprobados |
| Contacto desde Inicio | Navega a `/contacto`; se comprobó que recupera su cabecera y fondo oscuro previos |
| Consola de la preview de producción | Sin errores registrados en la lectura realizada |

La instalación global de pnpm era 11.25.0 y rechazó el lockfile por el tratamiento
distinto de `overrides`. Se ejecutó la versión fijada con `npx --yes pnpm@9.15.4`;
el lockfile y `package.json` no cambiaron.

## Pendientes y límites de verificación

- **Movimiento reducido, prueba visual real:** el navegador integrado no expone
  emulación de `prefers-reduced-motion`. Se revisaron la consulta de medios, el
  fallback SVG, la cancelación de RAF y el layout estático en CSS, pero no se declara
  una prueba visual de esa preferencia. No se cambiaron preferencias del sistema.
- **Pausa fuera de pantalla:** se conserva el `IntersectionObserver` y la cancelación
  por visibilidad del documento. Se verificó el código; no se midió el consumo de CPU
  con la escena fuera de pantalla.
- Revisión en dispositivos físicos, Safari, Firefox y con lector de pantalla. El foco,
  semántica y navegación básica sí se comprobaron en IAB; eso no equivale a una auditoría
  completa de accesibilidad.
- Aprobación visual del usuario y cualquier publicación posterior, fuera del alcance
  de esta entrega local.

## Capturas

| Vista | Archivo |
| --- | --- |
| Hero de escritorio | [1440 px](qa/inicio-claro/inicio-1440.jpg) |
| Hero móvil | [390 px](qa/inicio-claro/inicio-390.jpg) |
| Página completa | [1440 px](qa/inicio-claro/inicio-completo-1440.jpg) · [390 px](qa/inicio-claro/inicio-completo-390.jpg) |
| Otros anchos | [320 px](qa/inicio-claro/inicio-320.jpg) · [768 px](qa/inicio-claro/inicio-768.jpg) |
| Transferencia y resultado | [Traslado](qa/inicio-claro/transferencia-1440.jpg) · [Registro completo](qa/inicio-claro/registro-completo-1440.jpg) |
| Demostración móvil | [390 px](qa/inicio-claro/demostracion-390.jpg) · [320 px](qa/inicio-claro/demostracion-320.jpg) |
| Cierre y pie | [1440 px](qa/inicio-claro/cierre-1440.jpg) |

## Revisar localmente

Con Node 24 y desde la raíz del repositorio:

```powershell
npx --yes pnpm@9.15.4 dev --hostname 127.0.0.1 --port 3000
```

Abrir `http://127.0.0.1:3000` en el navegador integrado. Para reproducir la preview de
producción: `npx --yes pnpm@9.15.4 build` y después `npx --yes pnpm@9.15.4 start --hostname 127.0.0.1 --port 3000`.

No ejecutar `dev` y `build` simultáneamente sobre la misma carpeta `.next`.
