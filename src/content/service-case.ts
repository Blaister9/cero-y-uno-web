export const serviceCase = {
  eyebrow: "Cómo trabajamos · Caso de prototipo",
  title: "Del primer mensaje al cierre",
  description:
    "Construimos un prototipo de atención en tiempo real para una organización. El reto era integrar el chat a su portal y poder seguir cada conversación desde que llegaba hasta que se cerraba.",
  example: {
    caption: "Ejemplo ilustrativo de la conversación",
    messages: [
      { speaker: "Visitante", text: "Hola, necesito orientación sobre un trámite." },
      { speaker: "Agente", text: "Hola. Puedo orientarte sobre los pasos para iniciarlo." }
    ]
  },
  chapters: [
    {
      stage: "El problema",
      title: "El historial quedaba fuera de la operación",
      body:
        "La atención comenzaba en un chat de terceros. La organización necesitaba consultar el historial y reconstruir cuándo entraba una conversación, cuándo se respondía y cómo se cerraba desde un sistema bajo su control.",
      scene: {
        title: "El punto de partida",
        rows: [
          { label: "Entrada", value: "Chat de terceros" },
          { label: "Historial", value: "Almacenamiento externo" },
          { label: "Seguimiento", value: "Dependía del canal externo" }
        ]
      }
    },
    {
      stage: "La decisión",
      title: "Dos interfaces, una conversación",
      body:
        "Separamos el chat embebible de la consola interna. Así podíamos integrarlo al portal existente y darle al agente una cola con estados para saber qué consultas esperaban respuesta, cuáles estaban activas y cuáles habían cerrado.",
      scene: {
        title: "El flujo diseñado",
        rows: [
          { label: "Visitante", value: "Chat integrado al portal" },
          { label: "Agente", value: "Cola y consola interna" },
          { label: "Conexión", value: "Eventos en tiempo real" }
        ]
      }
    },
    {
      stage: "La construcción",
      title: "El mensaje llega y la respuesta vuelve",
      body:
        "Conectamos el widget y la consola con SignalR y guardamos el historial en PostgreSQL. Una consulta aparece en la cola, el agente responde y el visitante recibe el mensaje sin recargar. Al cerrar, el chat muestra el aviso y bloquea nuevos envíos. Las pruebas de integración cubrieron el intercambio, el cierre y la recuperación del historial.",
      showExample: true,
      scene: {
        title: "Una conversación en marcha",
        rows: [
          { label: "En espera", value: "La consulta entra en la cola" },
          { label: "En atención", value: "El agente envía la respuesta" },
          { label: "Cerrada", value: "El chat avisa y conserva el historial" }
        ]
      }
    },
    {
      stage: "La evolución",
      title: "Más contexto al entrar y al cerrar",
      body:
        "La primera demo validó el intercambio de mensajes. La siguiente revisión se centró en qué necesitaba saber cada persona durante la atención. Agregamos el motivo de consulta en la cola, avisos de espera y reconexión, y la opción de valorar la atención o descargar la transcripción al cierre.",
      scene: {
        title: "Lo que incorporó la demo",
        rows: [
          { label: "Inicio", value: "Motivo visible en la cola" },
          { label: "Durante", value: "Estados de espera y reconexión" },
          { label: "Cierre", value: "Encuesta y transcripción" }
        ]
      }
    }
  ]
};
