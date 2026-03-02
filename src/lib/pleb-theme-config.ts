import {
  availableFonts,
  type CompleteTheme,
  completeThemes,
  defaultThemeName,
  getCompleteTheme,
  type FontConfig,
  type ThemeName,
} from "../../llm/projects/pleb.school/src/lib/theme-config";
import rawThemeConfig from "../../llm/projects/pleb.school/config/theme.json";

export { completeThemes, defaultThemeName, getCompleteTheme };
export { availableFonts };
export type { FontConfig, ThemeName };

interface ThemeUIConfig {
  ui: {
    showThemeSelector: boolean;
    showFontToggle: boolean;
    showThemeToggle: boolean;
  };
  defaults: {
    theme: ThemeName | null;
    font: string | null;
    darkMode: boolean | null;
  };
}

export const plebThemeUiConfig = rawThemeConfig as ThemeUIConfig;

/**
 * Landing-specific theme application:
 * - Uses the same theme data as pleb.school
 * - Always loads configured Google fonts for visual parity in production
 */
export function applyPlebTheme(
  theme: CompleteTheme,
  isDark = false,
  fontOverride?: string | null,
) {
  const root = document.documentElement;
  const colors = isDark ? theme.darkColors : theme.lightColors;

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  root.style.setProperty("--radius", theme.borderRadius);

  const fontConfig = fontOverride
    ? availableFonts.find((font) => font.value === fontOverride)
    : null;

  const fontFamily = fontConfig?.fontFamily || theme.fontFamily;
  const fontWeight = fontConfig?.fontWeight || theme.fontWeight;
  const googleFontUrl = fontConfig?.googleFontUrl || theme.googleFontUrl;

  root.style.setProperty("--font-family", fontFamily);
  root.style.setProperty("--font-weight", fontWeight);

  document.body.style.fontFamily = fontFamily;
  document.body.style.fontWeight = fontWeight;

  if (googleFontUrl) {
    loadGoogleFont(googleFontUrl);
  }
}

function loadGoogleFont(url: string) {
  ensurePreconnect("https://fonts.googleapis.com");
  ensurePreconnect("https://fonts.gstatic.com", true);

  const existingLink = document.querySelector(`link[href="${url}"]`);
  if (existingLink) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

function ensurePreconnect(href: string, crossOrigin = false) {
  const existing = document.querySelector(`link[rel="preconnect"][href="${href}"]`);
  if (existing) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = href;
  if (crossOrigin) {
    link.crossOrigin = "anonymous";
  }
  document.head.appendChild(link);
}
