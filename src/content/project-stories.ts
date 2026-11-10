import { serviceCase } from "./service-case";

export type StoryChapter = {
  title: string;
  body: string;
  detail?: string;
  showExample?: boolean;
};

export type FinancialDemo = {
  caption: string;
  fields: { label: string; value: string }[];
};

export type PurchaseDemo = {
  caption: string;
  reference: string;
  item: string;
  quantity: string;
  team: string;
  pending: number;
  approved: number;
};

export type IntegrationDemo = {
  caption: string;
  order: string;
  item: string;
  sku: string;
  quantity: number;
  stock: number;
  reservationKey: string;
  reservation: string;
};

type ProjectStory = {
  id: string;
  label: string;
  kind: "Proyecto" | "Ejemplo";
  title: string;
  description: string;
  chapters: StoryChapter[];
  example?: typeof serviceCase.example;
  financialDemo?: FinancialDemo;
  integrationDemo?: IntegrationDemo;
  purchaseDemo?: PurchaseDemo;
};

export const projectStories: ProjectStory[] = [
  { ...serviceCase, id: "atencion", label: "Atención en tiempo real", kind: "Proyecto" },
  {
    id: "rpa",
    label: "Automatización financiera",
    kind: "Proyecto",
    title: "Del documento al registro contable",
    description: "Para una empresa en Chile programamos un bot que ejecutaba la causación y otras tareas financieras. Aquí seguimos un documento ficticio para ver en qué parte del trabajo intervenía el bot.",
    chapters: [
      { title: "Hay un documento por registrar", body: "El documento tiene la información de la compra. El registro contable sigue vacío. Pasar esos datos de un lado al otro era una de las tareas que la empresa quería automatizar." },
      { title: "El bot lee el documento", body: "Sigue la línea que recorre el documento. En esta recreación, el bot toma tres datos en orden: la referencia, el concepto y el importe." },
      { title: "Cada dato llega a su campo", body: "La referencia viaja primero. Luego pasan el concepto y el importe. A medida que llegan, puedes comparar lo que decía el documento con lo que quedó en el registro." },
      { title: "Así queda la causación", body: "Los tres campos ya están completos y aparece la confirmación. La causación era uno de los pasos del proceso financiero que quedó a cargo del bot.", showExample: true }
    ],
    financialDemo: {
      caption: "Recreación del flujo con datos ficticios",
      fields: [
        { label: "Referencia", value: "DEMO-014" },
        { label: "Concepto", value: "Compra de insumos" },
        { label: "Importe", value: "150.000 CLP" }
      ]
    }
  },
  {
    id: "power-platform",
    label: "Power Platform",
    kind: "Ejemplo",
    title: "Una solicitud de compra, de principio a fin",
    description: "Un equipo necesita reponer material de oficina. Sigamos una solicitud ficticia para ver cómo se registra, quién la aprueba y qué aparece en el informe después.",
    chapters: [
      { title: "La compra empieza en una app", body: "El equipo de Operaciones indica qué necesita y en qué cantidad. Al enviar el formulario de Power Apps, Dataverse guarda la solicitud con una referencia.", detail: "Si también participan proveedores, Power Pages puede ofrecerles un portal de entrada." },
      { title: "La solicitud llega a quien decide", body: "Power Automate lleva la solicitud a la bandeja de la persona responsable de compras. Allí puede ver qué pidió el equipo y cuánto necesita." },
      { title: "La decisión queda en la misma solicitud", body: "La persona responsable aprueba la compra. El flujo guarda la decisión en Dataverse y quien hizo la solicitud puede consultar el nuevo estado desde la app." },
      { title: "El informe recoge el cambio", body: "Al actualizar el informe de Power BI, la solicitud pasa de pendientes a aprobadas. El equipo puede ver cuáles siguen por resolver.", detail: "Copilot Studio podría añadir un asistente para orientar a quien necesita radicar una solicitud.", showExample: true }
    ],
    purchaseDemo: {
      caption: "Ejemplo de una solicitud con datos ficticios",
      reference: "COMPRA-007",
      item: "Material de oficina",
      quantity: "12 cajas",
      team: "Operaciones",
      pending: 3,
      approved: 5
    }
  },
  {
    id: "blockchain",
    label: "Blockchain",
    kind: "Ejemplo",
    title: "¿Es el mismo documento que se registró?",
    description: "Dos personas comparten un acuerdo de entrega. Más adelante, quien recibe una copia quiere comprobar si conserva el mismo contenido. La prueba empieza con una huella del archivo.",
    chapters: [
      { title: "El acuerdo deja una huella", body: "El texto dice que la entrega está prevista para el martes. Calculamos su huella SHA-256, una secuencia que luego sirve para comprobar si el contenido cambió." },
      { title: "La huella queda en la cadena", body: "El registro compartido guarda la huella del acuerdo. El archivo se conserva aparte. Así, quien reciba una copia tendrá una referencia con la que compararla." },
      { title: "La copia conserva el martes", body: "Quien recibe el documento calcula la huella de su copia. Coincide con la registrada, lo que da evidencia de que conserva el mismo contenido." },
      { title: "Alguien cambia martes por jueves", body: "Al calcular la huella de la versión modificada, aparece un valor distinto. La huella guardada sigue siendo la misma y la comparación detecta el cambio.", detail: "La prueba comprueba integridad. Para verificar quién firmó el acuerdo hace falta una prueba de autoría.", showExample: true }
    ]
  },
  {
    id: "integraciones",
    label: "Integraciones y APIs",
    kind: "Ejemplo",
    title: "El pedido entró. ¿Quedó reservado?",
    description: "Alguien compra dos lámparas en la tienda. Quedan ocho en inventario. Sigamos el pedido para ver cómo se apartan las dos unidades y qué pasa cuando la confirmación se pierde en el camino.",
    chapters: [
      { title: "La tienda avisa que hubo una compra", body: "Al confirmar el pedido, la tienda envía un aviso automático, llamado webhook. En él van la referencia del pedido, el código de la lámpara y las dos unidades." },
      { title: "La integración pide apartar las lámparas", body: "La integración toma esos datos y los envía a la API de inventario como una solicitud de reserva. Le asigna una clave que guardará por si necesita volver a enviarla." },
      { title: "El inventario reserva. La respuesta se pierde", body: "Quedan seis lámparas disponibles y dos apartadas. Como la confirmación nunca llega, la integración deja la reserva por confirmar y registra que se agotó el tiempo de espera." },
      { title: "El segundo intento recupera la confirmación", body: "La integración usa la misma clave para el reintento. La API reconoce la solicitud y devuelve la referencia de la reserva que ya existe. Así se confirma que las dos lámparas siguen apartadas para ese pedido.", showExample: true }
    ],
    integrationDemo: {
      caption: "Ejemplo con un pedido y existencias ficticias",
      order: "PED-042",
      item: "Lámpara de escritorio",
      sku: "LUM-12",
      quantity: 2,
      stock: 8,
      reservationKey: "reserva-PED-042",
      reservation: "RES-042"
    }
  }
];
