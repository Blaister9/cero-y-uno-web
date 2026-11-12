export const solutionVisuals = {
  record: {
    id: "SOL / 024",
    owner: "Compras",
    attached: "Reporte adjunto",
    discussion: "Conversación vinculada",
    status: "En revisión",
  },
  portal: {
    heading: "Tu documentación",
    received: "Datos recibidos",
    missing: "Falta un documento",
    file: "Certificación bancaria.pdf",
    next: "Adjuntar certificación para continuar",
    note: "Vista del proveedor · Registro de ejemplo",
  },
  approval: {
    request: "Solicitud registrada",
    owner: "Responsable de compras",
    unavailable: "Fuera de plazo",
    substitute: "Suplente asignado",
    result: "La revisión continúa",
    caption: "Ruta de excepción prevista",
  },
  integration: {
    id: "PEDIDO / 024",
    order: "Tienda",
    inventory: "Inventario",
    events: [
      ["01", "Pedido recibido", "Reservar 1 unidad"],
      ["02", "Aviso repetido", "Reserva existente"],
    ],
    confirmation: "Una sola reserva",
    result: "RES-024",
    note: "Mismo identificador, misma operación.",
  },
  report: {
    title: "Pendientes por responsable",
    updated: "Actualizado: 09:00 · Ejemplo",
    source: "Fuente: sistema de solicitudes",
    columns: ["Equipo", "En plazo", "Por revisar"],
    rows: [
      ["Compras", "8", "3"],
      ["Operaciones", "12", "2"],
      ["Soporte", "6", "1"],
    ],
    detail: "Detalle / SOL-024",
    record: "Compras · Revisión de acceso",
    date: "Vencimiento: hoy · Ejemplo",
  },
  assistant: {
    question: "¿Qué documentos requiere el registro?",
    answer:
      "Datos de la empresa y certificación bancaria. La revisión corresponde al área de Compras.",
    citation: "Procedimiento de registro · § 2",
    title: "Fuente consultada",
    document: "Procedimiento de registro",
    excerpt:
      "2. Documentación: datos de la empresa y certificación bancaria. Compras verifica la información antes de habilitar el acceso.",
    review: "Borrador para revisión humana",
    note: "Documento y respuesta de ejemplo.",
  },
} as const;
