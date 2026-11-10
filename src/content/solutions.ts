export const solutionsPage = {
  eyebrow: "Soluciones",
  title: "Que el trabajo",
  titleAccent: "siga su curso.",
  description: "Una solicitud que no avanza. Un dato que se copia tres veces. Un reporte que llega tarde. El software tiene que ayudar justo ahí.",
  exploreLabel: "Encuentra tu escenario",
  heroExample: {
    label: "Un flujo posible",
    title: "De pendiente a resuelto.",
    steps: [
      { title: "Alguien lo necesita", detail: "La solicitud queda registrada." },
      { title: "Alguien decide", detail: "El responsable tiene el contexto." },
      { title: "El trabajo continúa", detail: "La respuesta llega al siguiente paso." }
    ]
  },
  explorer: {
    eyebrow: "Del problema al sistema",
    title: "¿Dónde se frena tu equipo?",
    description: "Selecciona una situación para ver qué podríamos construir y cómo se usaría.",
    choiceLabel: "Situación de tu equipo",
    exampleLabel: "Ejemplo ilustrativo",
    beforeLabel: "El atasco",
    afterLabel: "Qué cambia",
    includesLabel: "Qué tendría la solución",
    serviceLabel: "Ver servicio relacionado"
  },
  scenarios: [
    {
      id: "plataformas-internas",
      choice: "Todo está repartido",
      category: "Plataformas internas",
      title: "El trabajo y su contexto, en el mismo lugar.",
      problem: "Para resolver una solicitud hay que buscar el archivo, preguntar quién la tiene y reconstruir la conversación.",
      outcome: "Cada persona puede consultar qué está pendiente, quién responde y qué se decidió, desde una plataforma del equipo.",
      includes: ["Permisos por rol", "Bandejas de trabajo", "Historial de decisiones"],
      serviceHref: "/servicios#software-a-medida",
      preview: {
        title: "Bandeja del equipo",
        subtitle: "Solicitud de acceso",
        rows: [
          { label: "Qué se necesita", value: "Acceso al reporte de compras" },
          { label: "Quién lo revisa", value: "Responsable de compras" },
          { label: "En qué va", value: "En revisión" }
        ],
        result: "El contexto acompaña a la solicitud."
      }
    },
    {
      id: "portales-corporativos",
      choice: "Todo llega por correo",
      category: "Portales corporativos",
      title: "Un punto de entrada. Una respuesta que se puede seguir.",
      problem: "Clientes, proveedores o aliados envían documentos por varios canales y vuelven a preguntar si llegaron completos.",
      outcome: "Un portal guía la entrega, muestra los documentos que faltan y permite consultar el estado sin reconstruir una cadena de correos.",
      includes: ["Acceso por perfil", "Entrega de documentos", "Consulta de estado"],
      serviceHref: "/servicios#software-a-medida",
      preview: {
        title: "Portal de proveedores",
        subtitle: "Registro de proveedor",
        rows: [
          { label: "Datos de la empresa", value: "Recibidos" },
          { label: "Certificación bancaria", value: "Por adjuntar" },
          { label: "Siguiente paso", value: "Completar documentación" }
        ],
        result: "El proveedor sabe qué falta para avanzar."
      }
    },
    {
      id: "automatizacion-operativa",
      choice: "Hay que perseguir aprobaciones",
      category: "Automatización operativa",
      title: "La solicitud avanza sin perseguirla por chat.",
      problem: "Cada aprobación exige un recordatorio manual. Si alguien se ausenta, el proceso se queda esperando sin un responsable claro.",
      outcome: "El flujo asigna la revisión, avisa a quien corresponde y registra la decisión. Las excepciones tienen una ruta definida.",
      includes: ["Reglas de aprobación", "Avisos y escalamiento", "Registro de cada paso"],
      serviceHref: "/servicios#automatizacion",
      preview: {
        title: "Flujo de aprobación",
        subtitle: "Solicitud de compra",
        rows: [
          { label: "Solicitud", value: "Registrada por el equipo" },
          { label: "Revisión", value: "Asignada al responsable" },
          { label: "Si vence el plazo", value: "Avisar al suplente" }
        ],
        result: "Una ruta prevista, incluso cuando alguien falta."
      }
    },
    {
      id: "integracion-de-sistemas",
      choice: "El dato se copia otra vez",
      category: "Integración de sistemas",
      title: "El dato llega una vez. Los sistemas se entienden.",
      problem: "Una venta se registra en la tienda y alguien debe pasarla al inventario. Un error al copiar deja dos versiones de la misma operación.",
      outcome: "Conectamos los sistemas para compartir el cambio, confirmar que llegó y tratar los reintentos sin duplicar la operación.",
      includes: ["Conexión entre APIs", "Validación de datos", "Reintentos controlados"],
      serviceHref: "/servicios#integraciones-y-apis",
      preview: {
        title: "Tienda ↔ inventario",
        subtitle: "Un pedido, dos sistemas",
        rows: [
          { label: "La tienda", value: "Registra el pedido" },
          { label: "El inventario", value: "Reserva las unidades" },
          { label: "La confirmación", value: "Regresa al pedido" }
        ],
        result: "Si el aviso se repite, la reserva no se duplica."
      }
    },
    {
      id: "tableros-gerenciales",
      choice: "El reporte siempre llega tarde",
      category: "Tableros gerenciales",
      title: "Ver qué pasa, sin armar otro archivo.",
      problem: "La reunión empieza con archivos de distintas fechas. Antes de decidir, el equipo tiene que ponerse de acuerdo sobre cuál dato usar.",
      outcome: "Un tablero reúne las fuentes acordadas, muestra su fecha de actualización y permite ir del indicador al detalle que lo explica.",
      includes: ["Fuentes conectadas", "Indicadores acordados", "Detalle y filtros"],
      serviceHref: "/servicios#analitica-e-ia",
      preview: {
        title: "Vista de operación",
        subtitle: "Qué necesita atención",
        rows: [
          { label: "Origen", value: "Sistema de solicitudes" },
          { label: "Vista", value: "Pendientes por responsable" },
          { label: "Detalle", value: "Solicitud y fecha de vencimiento" }
        ],
        result: "Cada indicador conserva el camino hasta su fuente."
      }
    },
    {
      id: "ia-aplicada",
      choice: "Buscar la respuesta toma horas",
      category: "IA aplicada",
      title: "Encontrar la respuesta. Poder revisar de dónde salió.",
      problem: "El equipo consulta documentos largos para responder preguntas que se repiten, y necesita comprobar la información antes de usarla.",
      outcome: "Un asistente puede consultar las fuentes autorizadas y preparar una respuesta con referencias. La revisión y las decisiones quedan en manos del equipo.",
      includes: ["Fuentes autorizadas", "Referencias consultables", "Revisión humana"],
      serviceHref: "/servicios#analitica-e-ia",
      preview: {
        title: "Asistente documental",
        subtitle: "¿Qué requiere esta solicitud?",
        rows: [
          { label: "Consulta", value: "Buscar en el procedimiento" },
          { label: "Borrador", value: "Requisitos y referencias" },
          { label: "Validación", value: "Una persona revisa la respuesta" }
        ],
        result: "Si no hay sustento, se pide más contexto."
      }
    }
  ],
  closing: {
    eyebrow: "Tu operación tiene sus propias reglas",
    title: "Muéstranos dónde se queda el trabajo.",
    description: "Puede ser una pantalla, un archivo o un proceso que hoy depende de demasiados mensajes. Con eso podemos empezar la conversación.",
    action: "Hablemos de tu caso",
    secondaryAction: "Ver recorridos del portafolio"
  }
};
