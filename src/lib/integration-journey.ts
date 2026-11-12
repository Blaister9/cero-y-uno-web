function range(progress: number, start: number, end: number) {
  const value = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return value * value * (3 - 2 * value);
}

export function getIntegrationFrame(progress: number) {
  const retry = progress >= 0.75;
  const returning = progress >= 0.5 && progress < 0.75;
  const confirmed = progress >= 0.985;
  const response = progress >= 0.89;
  const route = response
    ? 1 - range(progress, 0.89, 0.985)
    : retry
      ? range(progress, 0.755, 0.875)
      : returning
        ? 1 - range(progress, 0.51, 0.63) * 0.48
        : range(progress, 0.14, 0.4);
  return {
    light: range(progress, 0.015, 0.12),
    reveal: range(progress, 0.06, 0.2),
    route,
    signal: returning
      ? 1 - range(progress, 0.64, 0.69)
      : range(progress, 0.12, 0.15) * (1 - range(progress, 0.985, 1)),
    reserveFirst: range(progress, 0.4, 0.46),
    reserveSecond: range(progress, 0.41, 0.48),
    // Reserve once; neither the lost response nor its retry changes this count.
    reserved: progress >= 0.48,
    warning: range(progress, 0.615, 0.67) * (1 - range(progress, 0.75, 0.78)),
    receipt: range(progress, 0.985, 1),
    retry,
    response: returning || response,
    confirmed,
  };
}

type Point = readonly [number, number];
export const integrationRoutes = {
  desktop: [
    [285, 330],
    [405, 330],
    [365, 160],
    [500, 160],
    [635, 160],
    [595, 330],
    [715, 330],
  ],
  mobile: [
    [700, 135],
    [1010, 135],
    [960, 230],
    [830, 270],
    [770, 290],
    [740, 315],
    [650, 340],
  ],
} as const satisfies Record<string, readonly Point[]>;

export function routePath(points: readonly Point[]) {
  return `M${points[0]} C${points[1]} ${points[2]} ${points[3]} C${points[4]} ${points[5]} ${points[6]}`;
}

export function pointOnRoute(progress: number, points: readonly Point[]) {
  const start = progress <= 0.5 ? 0 : 3;
  const t = progress <= 0.5 ? progress * 2 : (progress - 0.5) * 2;
  const a = 1 - t;
  return [0, 1].map(
    (axis) =>
      a ** 3 * points[start][axis] +
      3 * a ** 2 * t * points[start + 1][axis] +
      3 * a * t ** 2 * points[start + 2][axis] +
      t ** 3 * points[start + 3][axis],
  );
}
