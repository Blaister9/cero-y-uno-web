export type CapabilityCard = {
  id: string;
  category: string;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    position: string;
  };
};

// Change the image, crop, copy or destination here without editing the gallery.
export const capabilitiesContent = {
  eyebrow: "02 / LO QUE PODEMOS CONSTRUIR",
  title: "Cada operación tiene su propia lógica.",
  allServices: { label: "Ver todos los servicios", href: "/servicios" },
  previousLabel: "Ver capacidades anteriores",
  nextLabel: "Ver capacidades siguientes",
  navigationHint: "Desliza para explorar",
  pointerHint: "Acerca el cursor a los extremos",
  keyboardHint:
    "Usa las flechas izquierda y derecha para explorar; Inicio y Fin llevan a los extremos.",
  items: [
    {
      id: "software-a-medida",
      category: "DESARROLLO",
      title: "Software a medida",
      description: "Aplicaciones que se ajustan a tu operación.",
      href: "/servicios#software-a-medida",
      image: {
        src: "/images/capabilities/software-a-medida-v1.webp",
        alt: "Módulos de vidrio, cerámica y metal que encajan en una pieza.",
        position: "50% 50%",
      },
    },
    {
      id: "automatizacion",
      category: "PROCESOS",
      title: "Automatización de procesos",
      description: "Flujos que avanzan sin repetir tareas.",
      href: "/servicios#automatizacion",
      image: {
        src: "/images/capabilities/automatizacion-v1.webp",
        alt: "Un mecanismo de ruedas y brazos transmite el movimiento en secuencia.",
        position: "50% 50%",
      },
    },
    {
      id: "integraciones-y-apis",
      category: "CONEXIONES",
      title: "Integraciones y APIs",
      description: "El dato correcto, en el sistema correcto.",
      href: "/servicios#integraciones-y-apis",
      image: {
        src: "/images/capabilities/integraciones-y-apis-v1.webp",
        alt: "Conductos transparentes y verdes unidos por un conector metálico.",
        position: "50% 50%",
      },
    },
    {
      id: "power-platform",
      category: "TRABAJO INTERNO",
      title: "Power Platform",
      description: "Apps, flujos y tableros para tu equipo.",
      href: "/servicios#power-platform",
      image: {
        src: "/images/capabilities/power-platform-v1.webp",
        alt: "Fichas de trabajo organizadas en tres estaciones conectadas.",
        position: "50% 50%",
      },
    },
    {
      id: "analitica-e-ia",
      category: "DATOS",
      title: "Analítica e inteligencia aplicada",
      description: "Datos conectados para ver y decidir.",
      href: "/servicios#analitica-e-ia",
      image: {
        src: "/images/capabilities/analitica-e-ia-v1.webp",
        alt: "Barras de vidrio de distintas alturas forman un patrón de datos.",
        position: "50% 50%",
      },
    },
    {
      id: "modernizacion",
      category: "EVOLUCIÓN",
      title: "Modernización de sistemas",
      description: "Evolucionar lo que funciona mientras sigue en uso.",
      href: "/servicios#modernizacion",
      image: {
        src: "/images/capabilities/modernizacion-v1.webp",
        alt: "Una placa de circuitos anterior enlazada con una sección nueva.",
        position: "50% 50%",
      },
    },
  ] satisfies CapabilityCard[],
};
