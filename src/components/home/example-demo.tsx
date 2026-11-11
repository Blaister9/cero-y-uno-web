import { ArrowRight, Check, MessageSquare, Monitor } from "lucide-react";

import type { BlockchainDemo } from "@/content/blockchain-demo";
import { projectStories } from "@/content/project-stories";

export function ExampleDemo({
  id,
  stage,
  blockchain,
}: {
  id: string;
  stage: number;
  blockchain: BlockchainDemo;
}) {
  const story = projectStories.find((item) => item.id === id)!;
  let content;
  if (story.example) {
    const { example } = story;
    content = (
      <div className="home-example-columns">
        <div className="home-example-panel">
          <h4>
            <MessageSquare size={18} aria-hidden="true" />
            Chat del portal
          </h4>
          <p className="home-chat-message">
            <span>Visitante</span>
            {example.visitor}
          </p>
          {stage >= 2 && (
            <p className="home-chat-message home-chat-answer">
              <span>Agente</span>
              {example.agent}
            </p>
          )}
          {stage >= 3 && (
            <p className="home-example-status">
              <Check size={16} />
              Conversación cerrada · transcripción disponible
            </p>
          )}
        </div>
        <div className="home-example-panel">
          <h4>
            <Monitor size={18} aria-hidden="true" />
            Consola del agente
          </h4>
          {stage >= 1 ? (
            <>
              <p className="home-chat-message">
                <span>{example.topic}</span>
                {stage >= 3
                  ? "Cerrada"
                  : stage >= 2
                    ? "En atención · respuesta enviada"
                    : "Consulta en espera"}
              </p>
              <p>La misma conversación en las dos pantallas.</p>
            </>
          ) : (
            <p>El historial permanece en la plataforma del proveedor.</p>
          )}
        </div>
      </div>
    );
  } else if (story.purchaseDemo) {
    const demo = story.purchaseDemo;
    content = (
      <div className="home-example-panel">
        <p className="home-mono">
          {demo.reference} / {demo.team}
        </p>
        <h4>{demo.item}</h4>
        <p>{demo.quantity}</p>
        <div className="home-flow-stages">
          {["Power Apps", "Power Automate", "Dataverse", "Power BI"].map(
            (label, index) => (
              <span data-active={stage >= index} key={label}>
                {stage > index && <Check size={14} />}
                {label}
                {index < 3 && <ArrowRight size={14} aria-hidden="true" />}
              </span>
            ),
          )}
        </div>
        <p className="home-example-status">
          {
            [
              "Solicitud registrada",
              "Pendiente de aprobación",
              "Compra aprobada",
              "Informe actualizado: una solicitud pasa de pendiente a aprobada",
            ][stage]
          }
        </p>
      </div>
    );
  } else if (story.integrationDemo) {
    const demo = story.integrationDemo;
    content = (
      <div className="home-example-panel">
        <p className="home-mono">
          {demo.order} / {demo.sku}
        </p>
        <h4>{demo.item}</h4>
        <p>{demo.quantity} unidades solicitadas</p>
        <div className="home-flow-stages">
          <span data-active>Tienda</span>
          <ArrowRight size={18} />
          <span data-active={stage >= 1}>Integración</span>
          <ArrowRight size={18} />
          <span data-active={stage >= 2}>Inventario</span>
        </div>
        <dl className="home-example-data">
          <div>
            <dt>Disponibles</dt>
            <dd>{stage >= 2 ? demo.stock - demo.quantity : demo.stock}</dd>
          </div>
          <div>
            <dt>Clave de reserva</dt>
            <dd>{stage >= 1 ? demo.reservationKey : "—"}</dd>
          </div>
        </dl>
        <p className="home-example-status">
          {
            [
              "Webhook recibido",
              "Reserva solicitada a la API",
              "Reserva realizada · confirmación perdida",
              `Reintento con la misma clave · ${demo.reservation} confirmada`,
            ][stage]
          }
        </p>
      </div>
    );
  } else {
    content = (
      <div className="home-example-panel">
        <p className="home-mono">VERIFICACIÓN DE INTEGRIDAD</p>
        <h4>{stage === 3 ? blockchain.changed : blockchain.original}</h4>
        <dl className="home-example-data">
          <div>
            <dt>Huella del documento</dt>
            <dd>
              {(stage === 3
                ? blockchain.changedHash
                : blockchain.originalHash
              ).slice(0, 24)}
              …
            </dd>
          </div>
          <div>
            <dt>Huella registrada</dt>
            <dd>
              {stage >= 1
                ? `${blockchain.originalHash.slice(0, 24)}…`
                : "Sin registrar"}
            </dd>
          </div>
        </dl>
        <p className="home-example-status">
          {
            [
              "Se calcula la huella SHA-256",
              "Huella guardada en la cadena de ejemplo",
              "Las huellas coinciden: mismo contenido",
              "Las huellas difieren: el documento cambió",
            ][stage]
          }
        </p>
        <p>
          Esta prueba comprueba integridad. La autoría requiere una prueba
          adicional.
        </p>
      </div>
    );
  }
  return (
    <figure className="home-example-demo">
      <figcaption className="home-demo-bar">
        <span>{story.label}</span>
        <span className="home-mono">
          {id === "atencion" ? "PROTOTIPO" : "EJEMPLO"}
        </span>
      </figcaption>
      <div className="home-example-workspace">{content}</div>
      <p className="home-demo-footnote home-mono">
        {id === "atencion"
          ? "RECREACIÓN DE UN PROTOTIPO"
          : "EJEMPLO CON DATOS FICTICIOS"}
      </p>
    </figure>
  );
}
