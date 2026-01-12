import { ColorPaletteGenerator } from '@martinlaxenaire/color-palette-generator';

// генератор випадкових палітр
const paletteFromColor = new ColorPaletteGenerator({});

export const getRandomPalette = (count = 3) =>
  paletteFromColor.getRandomPalette({ length: count }).map((el) => el.hex);

export const getPalette = (colorHex, count = 6) =>
  new ColorPaletteGenerator({ baseColor: colorHex })
    .getDistributedPalette({ includeBaseColor: true, length: count, sortByBrightness: true })
    .map((el) => el.hex);
