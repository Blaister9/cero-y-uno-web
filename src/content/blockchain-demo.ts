import { createHash } from "node:crypto";

const original = "Entrega prevista: martes.";
const changed = "Entrega prevista: jueves.";

export const blockchainDemo = {
  caption: "Documento y cadena de ejemplo · Huellas SHA-256 abreviadas",
  original,
  changed,
  originalHash: createHash("sha256").update(original, "utf8").digest("hex"),
  changedHash: createHash("sha256").update(changed, "utf8").digest("hex")
};

export type BlockchainDemo = typeof blockchainDemo;
