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

type ProjectStory = {
  id: string;
  label: string;
  kind: "Proyecto" | "Ejemplo";
  title: string;
  description: string;
  chapters: StoryChapter[];
  example?: typeof serviceCase.example;
  financialDemo?: FinancialDemo;
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
    description: "Un ejemplo de cómo combinar aplicaciones, flujos, datos y reportes cuando un equipo lleva sus solicitudes por correo.",
    chapters: [
      { title: "La solicitud queda en un solo lugar", body: "Una persona registra lo que necesita en una app de Power Apps. La solicitud queda guardada en Dataverse con sus datos y su estado.", detail: "Si también participan proveedores, Power Pages puede ofrecerles un portal de entrada." },
      { title: "La aprobación llega a quien corresponde", body: "Power Automate envía la solicitud a la persona que debe decidir. Al responder, el flujo actualiza el estado en el mismo registro." },
      { title: "El equipo puede ver qué falta", body: "Un tablero en Power BI muestra qué solicitudes siguen pendientes y cuáles ya se resolvieron. El equipo puede consultar el estado desde la aplicación.", detail: "Copilot Studio podría añadir un asistente para orientar a quien no sabe cómo radicar una solicitud." }
    ],
    workflow: [
      { title: "Power Apps + Dataverse", detail: "Solicitud registrada" },
      { title: "Power Automate", detail: "Aprobación y cambio de estado" },
      { title: "Power BI", detail: "Vista de pendientes y resueltas" }
    ]
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
