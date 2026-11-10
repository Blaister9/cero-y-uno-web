export const serviceCase = {
  eyebrow: "Cómo trabajamos",
  title: "¿Dónde quedó mi consulta?",
  description:
    "Una persona escribe desde el portal. Al otro lado, alguien tiene que leer el mensaje, responder y dejar un registro. Así probamos ese recorrido en un prototipo de atención en tiempo real.",
  example: {
    caption: "Recreación de una consulta en la demo",
    topic: "Seguimiento de trámite",
    visitor: "Hola, ¿dónde puedo consultar el estado de mi trámite?",
    agent: "Con el número de radicado puedes consultar el estado. Te indico dónde hacerlo."
  },
  chapters: [
    {
      title: "El chat estaba en el portal",
      body:
        "La gente ya podía escribir desde la página. El historial quedaba en la plataforma del proveedor. La organización quería tenerlo en un sistema propio y poder revisar qué había pasado con cada consulta."
    },
    {
      title: "Alguien tiene que ver el mensaje",
      body:
        "Hicimos dos pantallas para la misma conversación. La persona escribe en el chat del portal. El agente ve llegar la consulta a su cola y puede distinguir las que esperan respuesta de las que ya está atendiendo."
    },
    {
      title: "La respuesta aparece en el chat",
      body:
        "El agente abre la consulta y responde. Probamos que el mensaje apareciera en el portal sin recargar la página y que el historial se pudiera recuperar. Al cerrar, el chat muestra un aviso y deja de aceptar mensajes.",
      detail: "SignalR conecta las dos pantallas. PostgreSQL guarda los mensajes y el estado de la conversación.",
      showExample: true
    },
    {
      title: "La conversación ya terminó. ¿Y ahora?",
      body:
        "Después de probar el intercambio, nos ocupamos de la espera y del cierre. En la siguiente demo el agente ya veía el tema de la consulta. La persona podía saber si el chat se estaba reconectando, valorar la atención y descargar su conversación."
    }
  ]
};
