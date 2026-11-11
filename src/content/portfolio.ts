export type PortfolioId =
  | "rpa"
  | "atencion"
  | "power-platform"
  | "blockchain"
  | "integraciones";
export type PortfolioCard = {
  id: PortfolioId;
  kind: "Proyecto" | "Prototipo" | "Ejemplo";
  label: string;
  summary: string;
  image: { src: string; alt: string; position?: string };
};

// Editorial AI images illustrate the subject; they do not show clients or staff.
export const portfolioContent = {
  eyebrow: "01 / TRABAJO EN ACCIÓN",
  title: "El software, por dentro.",
  description: "Del problema al software funcionando.",
  examplesLabel: "Otros ejemplos",
  exploreLabel: "Ver recorrido",
  activeLabel: "En exploración",
  imageNote: "Imágenes conceptuales generadas con IA.",
  items: [
    {
      id: "rpa",
      kind: "Proyecto",
      label: "Automatización financiera",
      summary: "Del documento al registro.",
      image: {
        src: "/images/portfolio/automatizacion-financiera-v2.webp",
        alt: "Un profesional negro introduce un documento en un escáner sobre una mesa iluminada.",
        position: "50% 50%",
      },
    },
    {
      id: "atencion",
      kind: "Prototipo",
      label: "Atención en tiempo real",
      summary: "De la consulta a la respuesta.",
      image: {
        src: "/images/portfolio/atencion-en-tiempo-real-v2.webp",
        alt: "Una mujer negra con cabello natural y auriculares atiende una conversación junto a su computador.",
        position: "45% 44%",
      },
    },
    {
      id: "power-platform",
      kind: "Ejemplo",
      label: "Power Platform",
      summary: "De la solicitud a la aprobación.",
      image: {
        src: "/images/portfolio/power-platform-v2.webp",
        alt: "Una profesional negra organiza documentos entre tres bandejas de vidrio.",
        position: "50% 50%",
      },
    },
    {
      id: "blockchain",
      kind: "Ejemplo",
      label: "Blockchain",
      summary: "Del archivo a su verificación.",
      image: {
        src: "/images/portfolio/blockchain-v2.webp",
        alt: "Manos de piel negra comprueban un sello documental que deja huella al abrirse.",
        position: "50% 48%",
      },
    },
    {
      id: "integraciones",
      kind: "Ejemplo",
      label: "Integraciones y APIs",
      summary: "Del pedido a la reserva.",
      image: {
        src: "/images/portfolio/integraciones-y-apis-v2.webp",
        alt: "Un profesional negro conecta un cable de red a un panel de conexiones.",
        position: "55% 50%",
      },
    },
  ] satisfies PortfolioCard[],
  financialSteps: [
    {
      title: "Hay un documento por registrar.",
      body: "La información está en el documento. Al otro lado, el registro contable sigue vacío. Este es el punto de partida.",
      detail: "Un origen. Tres datos. Un registro por completar.",
    },
    {
      title: "El bot identifica la información.",
      body: "Primero la referencia, después el concepto y finalmente el importe. El bot reconoce los datos que necesita para continuar.",
      detail: "Cada campo se identifica en el documento.",
    },
    {
      title: "Cada dato llega a su campo.",
      body: "La referencia, el concepto y el importe completan su destino, uno por uno. Puedes seguir el recorrido y comparar ambos lados.",
      detail: "La misma información, sin volver a digitarla.",
    },
    {
      title: "El registro queda completo.",
      body: "Los tres campos están registrados y la confirmación cierra este paso. Esta recreación muestra una parte del proceso financiero programado.",
      detail: "Un paso concreto dentro de una operación más amplia.",
    },
  ],
};
