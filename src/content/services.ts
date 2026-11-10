export const servicesPage = {
  eyebrow: "Servicios",
  title: "Software para el trabajo de todos los días",
  description:
    "Desde una aplicación interna hasta la conexión entre dos sistemas. Revisa qué podemos construir y cuándo tiene sentido hacerlo.",
  items: [
    {
      id: "software-a-medida",
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
