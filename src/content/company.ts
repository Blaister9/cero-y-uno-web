export const companyPage = {
  eyebrow: "Nosotros",
  signature: "Cero y Uno / Personas y criterio",
  title: "El criterio detrás",
  titleAccent: "del código.",
  description:
    "Somos Cero y Uno. Desarrollamos software a medida, automatización e inteligencia aplicada para procesos complejos.",
  introduction:
    "Entre una idea y un sistema que funciona hay decisiones de proceso, arquitectura y ejecución. Este es el equipo y el enfoque con el que las abordamos.",
  teamAction: "Conoce al equipo",
  approachAction: "Nuestra forma de trabajar",
  team: {
    eyebrow: "01 / Las personas",
    title: "Nuestro equipo desarrollador",
    description:
      "Dos perfiles que reúnen arquitectura, desarrollo e integración para llevar el software a la operación.",
    navigationLabel: "Perfiles del equipo desarrollador",
    members: [
      {
        id: "weso",
        name: "Weso",
        focus: "Arquitectura y software a medida",
        role: "Arquitectura de soluciones y desarrollo de software a medida.",
        expertise: [
          "Inteligencia artificial aplicada, diseño y evaluación de modelos de machine learning, asistentes con IA generativa, analítica de datos y automatización de procesos.",
          "Infraestructura en nube y local, seguridad desde el diseño y puesta en producción.",
        ],
        image: {
          src: "/images/team/weso-v2.webp",
          alt: "Retrato conceptual de Weso: hombre negro de espaldas, con degradado bajo y rizos cortos, iluminado con un acento verde.",
        },
      },
      {
        id: "santensor",
        name: "Santensor",
        focus: "Desarrollo fullstack e integración de sistemas",
        role: "Desarrollo fullstack, diseño de APIs e integración de sistemas mediante webhooks y servicios externos.",
        expertise: [
          "Modelado de datos, automatización de flujos y modernización de aplicaciones.",
          "Integración de modelos de IA en productos, pruebas automatizadas, despliegue continuo y observabilidad.",
        ],
        image: {
          src: "/images/team/santensor-v2.webp",
          alt: "Retrato conceptual de Santensor: hombre negro de espaldas, con trenzas pegadas al cuero cabelludo, sobre un fondo oscuro con luz verde.",
        },
      },
    ],
  },
  approach: {
    eyebrow: "02 / Nuestro enfoque",
    title: "De la idea al sistema.",
    description:
      "Tres principios que conectan lo que necesita una operación con lo que construimos.",
    navigationLabel: "Principios de trabajo",
    cards: [
      {
        id: "entender",
        label: "Entender",
        principle: "Entendimiento operativo",
        title: "Primero, entender el trabajo.",
        description:
          "Antes de escribir código, entendemos usuarios, reglas, información, restricciones y puntos de fricción.",
        diagram: ["Personas", "Reglas", "Información"],
        diagramResult: "La operación",
        diagramCaption: "Personas, reglas e información como punto de partida.",
      },
      {
        id: "disenar",
        label: "Diseñar",
        principle: "Arquitectura suficiente",
        title: "Una estructura con sentido.",
        description:
          "Diseñamos soluciones mantenibles, preparadas para crecer y ajustadas al momento real del negocio.",
        diagram: ["Aplicación", "Datos", "Conexiones"],
        diagramResult: "Un sistema",
        diagramCaption: "Aplicación, datos y conexiones dentro de una misma estructura.",
      },
      {
        id: "construir",
        label: "Construir",
        principle: "Ejecución responsable",
        title: "Construir para que se use.",
        description:
          "Construimos con foco en software funcional, adopción operativa y mejora continua.",
        diagram: ["Construcción", "Uso", "Mejora"],
        diagramResult: "En la operación",
        diagramCaption: "Construcción, uso y mejora como partes del mismo trabajo.",
      },
    ],
  },
  closing: {
    eyebrow: "El siguiente paso",
    title: "Hablemos de lo que necesitas construir.",
    description:
      "Cuéntanos qué proceso quieres mejorar, qué herramientas usa tu equipo y dónde está el bloqueo.",
    action: "Hablemos de tu proyecto",
    workAction: "Ver nuestro trabajo en acción",
  },
};
