export const servicesPage = {
  eyebrow: "Servicios",
  title: "Software para",
  titleAccent: "el trabajo real.",
  disciplines: "Diseño · Desarrollo · Integración",
  exploreLabel: "Explorar servicios",
  description:
    "Una aplicación propia. Un proceso que avanza. Dos sistemas que por fin se entienden. Encuentra dónde podemos ayudarte.",
  explorer: {
    eyebrow: "Qué podemos construir",
    title: "Elige por dónde empezar.",
    description: "Abre un servicio para ver cuándo encaja, qué construimos y cómo podría funcionar.",
    problemLabel: "Tiene sentido si…",
    deliveryLabel: "Qué construimos",
    outcomeLabel: "Lo que buscamos",
    exampleLabel: "Un ejemplo de uso",
    contactLabel: "Hablemos de tu proyecto"
  },
  closing: {
    eyebrow: "El siguiente paso",
    title: "Cuéntanos qué necesita funcionar mejor.",
    description: "Puede ser una idea, una tarea que toma demasiado tiempo o un sistema que ya se quedó corto.",
    action: "Solicitar diagnóstico"
  },
  items: [
    {
      id: "software-a-medida",
      shortTitle: "Software a medida",
      example: {
        title: "De una solicitud a una respuesta",
        steps: [
          { label: "Solicitud", detail: "Un formulario propio" },
          { label: "Revisión", detail: "Reglas y responsables" },
          { label: "Seguimiento", detail: "Todo en el mismo lugar" }
        ]
      },
      icon: "code",
      summary: "Una aplicación que sigue las reglas y los pasos con los que ya trabaja tu equipo.",
      title: "Desarrollo de software a medida",
      problem:
        "La operación depende de herramientas genéricas, hojas sueltas o procesos que no representan cómo trabaja realmente el equipo.",
      delivery:
        "Diseñamos y construimos plataformas web, sistemas internos y productos digitales ajustados al flujo operativo.",
      outcome:
        "Un sistema propio, claro y mantenible que centraliza tareas, reglas e información crítica."
    },
    {
      id: "automatizacion",
      shortTitle: "Automatización",
      example: {
        title: "Una aprobación que sigue su curso",
        steps: [
          { label: "Registro", detail: "Llega una solicitud" },
          { label: "Aprobación", detail: "Se avisa al responsable" },
          { label: "Respuesta", detail: "Se registra la decisión" }
        ]
      },
      icon: "workflow",
      summary: "Aprobaciones, alertas y registros que avanzan sin repetir el mismo paso a mano.",
      title: "Automatización de procesos",
      problem:
        "El equipo invierte tiempo en tareas repetitivas, aprobaciones manuales y seguimiento disperso.",
      delivery:
        "Implementamos flujos automatizados, reglas, alertas y trazabilidad para reducir fricción operativa.",
      outcome:
        "Procesos más consistentes, menos dependencia de tareas manuales y mejor control del trabajo diario."
    },
    {
      id: "integraciones-y-apis",
      shortTitle: "Integraciones y APIs",
      example: {
        title: "El pedido llega donde tiene que llegar",
        steps: [
          { label: "Tienda", detail: "Recibe un pedido" },
          { label: "Conexión", detail: "Valida y envía los datos" },
          { label: "Inventario", detail: "Reserva las unidades" }
        ]
      },
      icon: "plug",
      summary: "Que un pedido, un cambio o un dato llegue al otro sistema sin volver a digitarlo.",
      title: "Integraciones y APIs",
      problem:
        "Los sistemas no conversan entre sí y la información se replica manualmente entre herramientas.",
      delivery:
        "Conectamos plataformas, servicios, datos y APIs para que el flujo de información sea más confiable.",
      outcome:
        "Menos duplicidad, mayor continuidad operativa y datos disponibles donde el negocio los necesita."
    },
    {
      id: "power-platform",
      shortTitle: "Power Platform",
      example: {
        title: "Una solicitud dentro de Microsoft 365",
        steps: [
          { label: "Power Apps", detail: "El equipo registra" },
          { label: "Power Automate", detail: "El flujo coordina" },
          { label: "Power BI", detail: "El tablero da visibilidad" }
        ]
      },
      icon: "building",
      summary: "Aplicaciones internas, aprobaciones y tableros con las herramientas que ya usa tu empresa.",
      title: "Power Platform y soluciones empresariales",
      problem:
        "El negocio necesita resolver flujos internos con velocidad sin perder gobierno, trazabilidad ni claridad.",
      delivery:
        "Construimos aplicaciones, automatizaciones y tableros empresariales sobre Power Platform cuando encaja con el contexto.",
      outcome:
        "Soluciones internas más rápidas de adoptar y preparadas para evolucionar con el equipo."
    },
    {
      id: "analitica-e-ia",
      shortTitle: "Analítica e IA aplicada",
      example: {
        title: "De datos dispersos a una lectura clara",
        steps: [
          { label: "Fuentes", detail: "Reúnen la información" },
          { label: "Análisis", detail: "Ordena y relaciona" },
          { label: "Consulta", detail: "Un tablero o un asistente" }
        ]
      },
      icon: "brain",
      summary: "Tableros y asistentes para consultar lo que pasa en la operación y decidir con esos datos.",
      title: "Analítica, tableros e inteligencia aplicada",
      problem:
        "La información existe, pero está dispersa o no se convierte en decisiones accionables.",
      delivery:
        "Creamos tableros, capas analíticas y capacidades de inteligencia aplicada conectadas al proceso.",
      outcome:
        "Lectura gerencial más clara, mejor seguimiento y datos listos para orientar decisiones."
    },
    {
      id: "modernizacion",
      shortTitle: "Modernización",
      example: {
        title: "Mejorar una pieza antes de seguir",
        steps: [
          { label: "Sistema actual", detail: "Revisamos sus límites" },
          { label: "Cambio acotado", detail: "Actualizamos una parte" },
          { label: "Validación", detail: "Comprobamos el flujo" }
        ]
      },
      icon: "layers",
      summary: "Actualizar las partes que fallan o frenan el trabajo mientras el sistema sigue en uso.",
      title: "Modernización de sistemas existentes",
      problem:
        "Las herramientas actuales sostienen parte de la operación, pero son frágiles, difíciles de mantener o limitan el crecimiento.",
      delivery:
        "Evaluamos arquitectura, experiencia, integraciones y datos para modernizar sin interrumpir innecesariamente la operación.",
      outcome:
        "Sistemas más ordenados, sostenibles y preparados para próximos ciclos de mejora."
    }
  ]
} as const;
