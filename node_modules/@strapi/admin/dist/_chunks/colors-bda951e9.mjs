import { lightTheme } from "@strapi/design-system";
import { S as STAGE_COLORS } from "./constants-8092eeb5.mjs";
function getStageColorByHex(hex) {
  if (!hex) {
    return null;
  }
  const themeColors = Object.entries(
    lightTheme.colors
  ).filter(([, value]) => value.toUpperCase() === hex.toUpperCase());
  const themeColorName = themeColors.reduce((acc, [name]) => {
    if (STAGE_COLORS?.[name]) {
      acc = name;
    }
    return acc;
  }, null);
  if (!themeColorName) {
    return null;
  }
  return {
    themeColorName,
    name: STAGE_COLORS[themeColorName]
  };
}
function getAvailableStageColors() {
  return Object.entries(STAGE_COLORS).map(([themeColorName, name]) => ({
    hex: lightTheme.colors[themeColorName].toUpperCase(),
    name
  }));
}
export {
  getAvailableStageColors as a,
  getStageColorByHex as g
};
//# sourceMappingURL=colors-bda951e9.mjs.map
