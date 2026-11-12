export const matrixRain = {
  rowHeight: 19,
  frameInterval: 50,
  digits: "010011010100101",
  mobileSpacing: 16,
  desktopSpacing: 12,
  patternWidth: 84,
  patternHeight: 268,
  // Match the denser rain when motion is reduced or JavaScript is unavailable.
  stillStreams: [
    { x: 8, y: 12, bits: "0100110" },
    { x: 20, y: 101, bits: "101101" },
    { x: 32, y: 39, bits: "00101010" },
    { x: 44, y: 147, bits: "01001" },
    { x: 56, y: 23, bits: "10110011" },
    { x: 68, y: 111, bits: "0010101" },
    { x: 80, y: 65, bits: "010110" },
  ],
} as const;
