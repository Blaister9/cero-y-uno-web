# Banner Matrix y header

Cambios en `feature/header-matrix-polish`, con la versión publicada de Nosotros como punto de partida.

- Columnas Matrix cada 12 px en escritorio y 16 px en móvil; se conserva el brillo, la velocidad y el límite de 20 fps. El patrón estático también aumenta su densidad.
- Pausa con un único icono en la esquina inferior derecha del banner, a 24 px del borde inferior. Área interactiva de 44 × 44 px, etiqueta accesible, tooltip y foco visible.
- Header de 80 a 64 px interiores en escritorio y de 64 a 56 px en móvil al superar 48 px de scroll. La marca conserva sus proporciones. Al volver arriba recupera su tamaño.
- Ajuste posterior a la revisión: en escritorio el header se recoge a una barra flotante centrada de 480 px, con marca, contacto e icono de menú. La navegación completa se despliega desde ese icono y reaparece horizontalmente al volver arriba. Transición de ancho de 280 ms; el comportamiento móvil se conserva.
- Acabado de vidrio con reflejos diagonales, borde iluminado y saturación del fondo. En escritorio con ratón, la barra completa baja al 28 % de opacidad y el relleno al 10 % en reposo; se desvanece en 480 ms. Recupera la opacidad completa en 160 ms con el cursor. Con foco de teclado o menú abierto mantiene fondo sólido, incluso si el cursor sale de la barra. Los dispositivos táctiles y `prefers-reduced-transparency` conservan opacidad completa.
- Iconos Lucide de panel lateral para abrir y cerrar la navegación móvil. Se mantienen Escape, el retorno del foco y el cierre al navegar.
- Sin dependencias nuevas. Las transiciones respetan la regla global de movimiento reducido.

## Validación

`pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint` y `pnpm build` completados con pnpm 9.15.4. La compilación se ejecutó en una copia fuera de OneDrive; los 116 archivos de `src` y `public` coinciden por SHA-256 con el repositorio.

Revisión inicial a 1280, 390 y 320 px, y revisión del header flotante a 1152, 901, 390 y 320 px: sin desbordamiento horizontal, header compacto, menú y teclado funcionales. Los enlaces ocultos del menú horizontal se omiten al usar Tab. Escape desde un enlace desplegado cierra el panel y devuelve el foco al botón. La captura del banner permanece idéntica mientras está pausado; la reanudación restaura el control a su estado inicial.

Evidencia en `docs/qa/header-matrix-2026-11-12/`; la revisión posterior queda en `verificacion-flotante.json` y `desktop-floating*.png`. El registro inicial de consola incluye un aviso previo de Next.js en desarrollo sobre `data-scroll-behavior`; no se registraron errores.

Diseño de vidrio comprobado sobre las fotografías del portafolio: reposo al 28 %, hover al 100 %, menú abierto con cursor fuera, foco de teclado y regreso al reposo. Móvil a 390 px conserva fondo y opacidad completos. Sin errores de navegador. Instalación congelada, tipos, lint y build nuevamente correctos. Evidencia actual en `verificacion-liquid-glass.json` y `desktop-liquid-glass-*.png`; los archivos de transparencia anteriores documentan la versión previa.

Publicado en [ceroyuno.com.co](https://ceroyuno.com.co/) desde el commit `21c26c69e3c53d8b8a361a39972dbaab33f6780d`, deployment de producción `3YmCyiEW6juuz5b4wnF1mNrQcjcy`.

GitHub CI `43312930779` y Vercel completados correctamente. En el dominio público se verificaron el header al 28 %, la apertura del menú, el foco de teclado, la navegación a Nosotros y el comportamiento móvil, sin desbordamientos ni errores del sitio. Las cinco páginas, robots, sitemap y Open Graph responden 200. El CSS publicado coincide con el revisado al normalizar los saltos de línea de Windows y Linux; el patrón Matrix usa el nuevo ancho de 84 px.

Evidencia de publicación: `produccion-http.json`, `produccion-assets.json`, `produccion-navegador.json` y `produccion-*.png` en la misma carpeta de QA. La vista previa local sigue disponible en `http://127.0.0.1:3114/`.
