import { serviceCase } from "./service-case";

export type StoryChapter = {
  title: string;
  body: string;
  detail?: string;
  showExample?: boolean;
};

export type WorkflowBeat = { title: string; detail: string };

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

type ProjectStory = {
  id: string;
  label: string;
  kind: "Proyecto" | "Ejemplo";
  title: string;
  description: string;
  chapters: StoryChapter[];
  example?: typeof serviceCase.example;
  financialDemo?: FinancialDemo;
  purchaseDemo?: PurchaseDemo;
  workflow?: WorkflowBeat[];
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
    description: "Un ejemplo para dos partes que necesitan comprobar la integridad de un archivo más adelante.",
    chapters: [
      { title: "El archivo tiene una huella", body: "Se calcula un hash del archivo. La huella se registra en una cadena compartida y el documento se conserva aparte." },
      { title: "La otra parte recibe una copia", body: "Quien recibe el documento calcula su hash con el mismo método y consulta la huella registrada." },
      { title: "Las dos huellas se comparan", body: "Si coinciden, la copia coincide con el archivo registrado. Esa comprobación sirve para revisar integridad. La identidad y la validez del contenido requieren sus propias verificaciones." }
    ],
    workflow: [
      { title: "Documento", detail: "Calcular su huella digital" },
      { title: "Cadena compartida", detail: "Registrar la huella" },
      { title: "Verificación", detail: "Comparar ambas huellas" }
    ]
  },
  {
    id: "integraciones",
    label: "Integraciones y APIs",
    kind: "Ejemplo",
    title: "Un pedido que llega al inventario",
    description: "Un ejemplo para un equipo que recibe pedidos en un sistema y vuelve a digitarlos en otro.",
    chapters: [
      { title: "La tienda confirma el pedido", body: "Cuando se confirma el pedido, la tienda envía un aviso a la integración con el identificador y los artículos." },
      { title: "Inventario recibe la solicitud", body: "La integración consulta la API de inventario y registra la respuesta. El identificador permite reconocer el mismo pedido si el aviso llega otra vez." },
      { title: "El equipo ve qué ocurrió", body: "Si la comunicación falla, la integración deja el pedido pendiente y registra el error para revisarlo o reintentar el envío." }
    ],
    workflow: [
      { title: "Tienda", detail: "Pedido confirmado" },
      { title: "Integración", detail: "Envía el pedido a la API" },
      { title: "Inventario", detail: "Devuelve el resultado" }
    ]
  }
];
