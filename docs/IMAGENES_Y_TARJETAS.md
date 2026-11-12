# Imágenes y tarjetas de Inicio

## Portadas de Trabajo en acción

Se configuran en **`src/content/portfolio.ts`**: título, descripción de sección,
orden, clasificación, nombre y frase de cada acceso. Conservar las clasificaciones
Proyecto, Prototipo y Ejemplo de acuerdo con la procedencia real.

Las cinco portadas de esta rama (serie v3) son **imágenes generadas con `image_gen`**,
con aspecto fotográfico. Reemplazan las cinco portadas de la serie v2 para diferenciar
personas, edades, peinados, vestuario, entornos, encuadres y color.
Son escenas conceptuales; no representan clientes, personal de Cero y Uno ni capturas
de productos de Microsoft. Se conserva el protagonismo de personas negras solicitado
por el titular. Los recorridos completos
conservan sus datos y estados en `src/content/project-stories.ts` y
`src/content/blockchain-demo.ts`.

Para sustituir una portada, guardar una imagen nueva en
`public/images/portfolio/` y cambiar `image` en su entrada en `portfolio.ts`:

```ts
image: {
  src: "/images/portfolio/automatizacion-financiera-v3.webp",
  alt: "Descripción del contenido de la fotografía o captura nueva.",
  position: "50% 50%",
},
```

El encuadre es 16:9 en escritorio y 4:3 en las portadas principales de
móvil/tableta. Conservar los elementos importantes en la zona central y comprobar
ambos recortes. Usar capturas con datos ficticios o con permiso explícito de uso.
El botón conserva su nombre accesible; su portada es decorativa. Las imágenes
finales son cinco WebP de 1280 × 720 px, 462.644 bytes en total, con carga diferida
y tamaños adaptados mediante `next/image`. Los prompts completos y la procedencia
están en [`assets/portfolio-images-v3.json`](assets/portfolio-images-v3.json).

| Experiencia | Composición de la serie v3 |
| --- | --- |
| Automatización financiera | Profesional mayor con gafas y barba cana; documentos y escáner en oficina azul grisácea |
| Atención en tiempo real | Mujer joven con cabello corto rubio, jersey azul y auriculares; fondo terracota |
| Power Platform | Responsable con locs recogidos y gafas; revisión de una solicitud en tableta, entorno de operaciones |
| Blockchain | Metáfora de una cadena física de registros con huellas distintas; un bloque altera la alineación |
| Integraciones y APIs | Profesional joven con trenzas; un pedido se registra con lector y tableta en inventario |

La serie v3 se entrega en GitHub para su despliegue posterior por el titular.
No se promueve a producción en esta entrega. Las series anteriores quedan conservadas
con sus nombres versionados; la configuración de esta rama referencia solo v3.

Componentes: `src/components/home/project-cover.tsx`,
`src/components/home/home-portfolio.tsx` y `src/lib/project-covers.css`.
Seleccionar una portada abre su recorrido, desplaza con scroll nativo y sitúa el
foco en su título. Con movimiento reducido el desplazamiento es inmediato.

## Tarjetas de capacidades

## Dónde hacer los cambios

La sección de Inicio se configura en **`src/content/capabilities.ts`**.
Cada entrada reúne título, frase breve, categoría, enlace, imagen, texto alternativo
y encuadre. El orden del archivo es el orden de la galería.

Los archivos utilizados por la web están en **`public/images/capabilities/`**.
La galería está en `src/components/home/capability-gallery.tsx`; no hace falta editar
ese componente para cambiar imágenes o contenidos.

### Sustituir una imagen

1. Guardar la nueva imagen en `public/images/capabilities/`, con un nombre nuevo y
   descriptivo, por ejemplo `software-a-medida-v2.webp`.
2. Cambiar `image.src` en la entrada correspondiente. La ruta pública empieza en
   `/images/`, sin escribir `public`.
3. Actualizar `image.alt` para describir lo que muestra la nueva imagen.
4. Ajustar `image.position` si el sujeto necesita otro encuadre. `50% 50%` centra;
   `50% 35%` conserva más de la zona superior. Este valor no modifica el archivo original.
5. Revisar la sección en escritorio y móvil. Conservar el destino de Servicios salvo
   que también se quiera cambiar explícitamente el servicio de destino.

```ts
image: {
  src: "/images/capabilities/software-a-medida-v2.webp",
  alt: "Descripción breve de la nueva imagen.",
  position: "50% 35%",
},
```

Se recomienda una imagen vertical **4:5**, de al menos **960 × 1200 px**.
Esta serie se entrega en WebP, con archivos de aproximadamente 74–143 KB. El componente
usa `next/image`, tamaños adaptables y carga diferida; reserva la proporción antes de
cargar para evitar saltos de composición. También se pueden usar JPG o PNG cambiando
la extensión de la ruta.

### Cambiar textos, enlaces o el número de tarjetas

Modificar `title`, `description`, `category` y `href` en el mismo archivo. Mantener
el título identificable como servicio y la descripción en una frase breve. El contador
y los controles se adaptan al número de elementos; no existe un límite fijo de seis
en el componente. No cambiar `id` al sustituir únicamente la imagen.

## Dirección visual y procedencia de la primera serie

Imágenes **generadas con la herramienta integrada `image_gen`**, con aspecto de
fotografía editorial. Son representaciones conceptuales de los servicios, no fotografías
de clientes, del equipo o de productos de Microsoft. Se generó cada pieza por separado,
con la misma dirección de materiales, luz natural, piedra cálida y verdes de marca.

| Servicio | Relación de la imagen con lo que ofrecemos | Archivo |
| --- | --- | --- |
| Software a medida | Piezas distintas que encajan con precisión: un sistema ajustado a una operación | `software-a-medida-v1.webp` |
| Automatización de procesos | Un mecanismo transmite el movimiento en secuencia: tareas que avanzan coordinadas | `automatizacion-v1.webp` |
| Integraciones y APIs | Conductos distintos unidos por un conector: intercambio entre sistemas | `integraciones-y-apis-v1.webp` |
| Power Platform | Formularios y estaciones conectadas: apps, aprobaciones y tableros internos | `power-platform-v1.webp` |
| Analítica e inteligencia aplicada | Valores físicos ordenados en barras: información que permite identificar patrones | `analitica-e-ia-v1.webp` |
| Modernización de sistemas | Una sección anterior enlazada a una nueva: continuidad mientras el sistema evoluciona | `modernizacion-v1.webp` |

Los **prompts completos**, la herramienta utilizada y los nombres de origen quedan en
[`assets/capability-images-v1.json`](assets/capability-images-v1.json). Las versiones
optimizadas de los seis archivos están dentro del repositorio. Los originales generados
se conservaron en su ubicación de generación; la web no depende de esa ubicación.

Si se incorporan fotografías de banco, documentar junto a la imagen la URL de origen
y la licencia correspondiente. Por ejemplo, Unsplash publica sus condiciones en su
[licencia oficial](https://unsplash.com/license). Esta primera serie no se presenta
como contenido CC0 ni se etiqueta “sin copyright”.

## Interacción y mantenimiento

- Tres tarjetas visibles en escritorio, dos en tableta y una con la siguiente
  asomando en móvil.
- En escritorio, acercar el cursor a cualquiera de los extremos mueve la galería.
  Cuanto más cerca del borde, mayor velocidad; se detiene al volver al centro, salir,
  usar el teclado o cambiar de ventana. No hay avance programado por tiempo.
- La barra de desplazamiento inferior queda oculta. En móvil se conserva el gesto
  nativo y CSS Scroll Snap; con movimiento reducido se usan gesto, flechas y teclado.
- Flechas de 48 px, contador de elementos visibles y acceso a todos los servicios.
- Con foco en la lista: izquierda/derecha recorren tarjetas; Inicio/Fin llevan a los
  extremos. Tab sigue recorriendo los seis enlaces, sin atraparlo dentro de la galería.
- El movimiento reducido elimina zoom y transiciones y usa desplazamientos inmediatos.
- Sin una dependencia nueva de carrusel ni un backend de gestión de imágenes.

Las decisiones de interacción se apoyan en la guía de
[carruseles de W3C WAI](https://www.w3.org/WAI/tutorials/carousels/) y en
[CSS Scroll Snap de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_snap).

Para comprobar cambios desde la raíz del proyecto, usando la versión de pnpm fijada:

```powershell
npx --yes pnpm@9.15.4 typecheck
npx --yes pnpm@9.15.4 lint
npx --yes pnpm@9.15.4 build
```

Revisar también el encuadre, el foco, los dos extremos de la galería, los enlaces y
el ancho de 320 px. No basta con que compile si una imagen falta o quedó mal encuadrada.
