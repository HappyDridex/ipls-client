export function rgbToHex(value) {
  const matches = value.match(/(0?\.?\d{1,3})%?\b/g);

  if (matches && matches.length >= 3) {
    const [red, green, blue] = matches.map(Number);
    return '#' + (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1);
  }

  return null;
}
