import { serviceCase } from "./service-case";

export type StoryChapter = {
  title: string;
  body: string;
  detail?: string;
  showExample?: boolean;
};

export type WorkflowBeat = { title: string; detail: string };

type ProjectStory = {
  id: string;
  label: string;
  kind: "Proyecto" | "Ejemplo";
  title: string;
  description: string;
  chapters: StoryChapter[];
  example?: typeof serviceCase.example;
  workflow?: WorkflowBeat[];
};

export const projectStories: ProjectStory[] = [
  { ...serviceCase, id: "atencion", label: "Atención en tiempo real", kind: "Proyecto" },
  {
    id: "rpa",
    label: "Automatización financiera",
    kind: "Proyecto",
    title: "Del trabajo manual a la causación automatizada",
    description: "Para una empresa en Chile programamos un bot RPA que ejecutaba la causación y otras tareas del proceso financiero. El diagrama muestra esa parte del proyecto.",
    chapters: [
      { title: "Una tarea del proceso financiero", body: "La causación era uno de los pasos que la empresa quería automatizar." },
      { title: "El bot toma la secuencia", body: "Programamos el orden de las acciones para que el bot ejecutara la tarea de principio a fin." },
      { title: "El registro queda hecho", body: "La causación quedó a cargo del bot, junto con otras tareas del proceso financiero." }
    ],
    workflow: [
      { title: "Causación", detail: "Tarea del proceso financiero" },
      { title: "Bot RPA", detail: "Ejecuta la secuencia programada" },
      { title: "Registro", detail: "La causación queda registrada" }
    ]
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
