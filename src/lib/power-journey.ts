// Every frame is derived from scroll position. No clocks, playback or user decisions.
export function powerRange(progress: number, start: number, end: number) {
  const value = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return value * value * (3 - 2 * value);
}

export function getPowerFrame(progress: number) {
  const departure = powerRange(progress, 0.16, 0.44);
  const report = powerRange(progress, 0.7, 0.94);
  const press = powerRange(progress, 0.49, 0.58);
  const lift = powerRange(progress, 0.61, 0.7);
  const transfer = powerRange(progress, 0.8, 0.96);
  const remaining = 1 - transfer;
  return {
    camera: departure * 76 + report * 44,
    mobileCamera: departure * 115 + report * 90,
    departure,
    report,
    paper: powerRange(progress, 0.17, 0.25),
    ink: powerRange(progress, 0.575, 0.61),
    stamp: powerRange(progress, 0.45, 0.51) * (1 - lift),
    stampY: -76 * (1 - press) - 110 * lift,
    stampScale: 1.16 - press * 0.16 + lift * 0.12,
    transfer,
    entryX:
      remaining ** 3 * 150 +
      3 * remaining ** 2 * transfer * 260 +
      3 * remaining * transfer ** 2 * 260 +
      transfer ** 3 * 330,
    entryY:
      remaining ** 3 * 35 +
      3 * remaining ** 2 * transfer * 35 +
      3 * remaining * transfer ** 2 * 110 +
      transfer ** 3 * 110,
    recorded: progress >= 0.88,
    approved: progress >= 0.59,
    fields: [0, 1, 2].map((field) =>
      powerRange(progress, 0.015 + field * 0.042, 0.065 + field * 0.042),
    ),
  };
}
