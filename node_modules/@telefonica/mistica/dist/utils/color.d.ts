export declare const fromHexToRgb: (hexColor: string) => [number, number, number];
/**
 * @param color hex color or css variable with rgb components (skinVars.rawColors)
 * @param alpha the alpha value to apply
 * @returns The same color with the alpha channel applied
 */
export declare const applyAlpha: (color: string, alpha: number) => string;
