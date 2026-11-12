// The scene is a pure projection of scroll; the registered fingerprint never changes.
export function integrityRange(progress: number, start: number, end: number) {
  const t = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return t * t * (3 - 2 * t);
}

export function getIntegrityFrame(progress: number) {
  return {
    read: integrityRange(progress, 0.025, 0.2),
    register: integrityRange(progress, 0.22, 0.44),
    connect: integrityRange(progress, 0.3, 0.45),
    compare: integrityRange(progress, 0.49, 0.64),
    match:
      integrityRange(progress, 0.61, 0.7) *
      (1 - integrityRange(progress, 0.755, 0.79)),
    changed: progress >= 0.8,
    verdict: integrityRange(progress, 0.86, 0.95),
    word:
      progress < 0.8
        ? 1 - integrityRange(progress, 0.76, 0.8)
        : integrityRange(progress, 0.8, 0.85),
  };
}
