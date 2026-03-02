"use client";

import { Moon, Palette, Sun, Type } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  applyPlebTheme,
  availableFonts,
  plebThemeUiConfig,
  completeThemes,
  defaultThemeName,
  getCompleteTheme,
  type ThemeName,
} from "@/lib/pleb-theme-config";

const STORAGE_KEYS = {
  theme: "complete-theme",
  mode: "landing-theme-mode",
  font: "font-override",
} as const;

function getInitialDarkMode(): boolean {
  const { darkMode } = plebThemeUiConfig.defaults;
  if (darkMode !== null) {
    return darkMode;
  }

  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function LandingThemeControls() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => getInitialDarkMode());
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(
    plebThemeUiConfig.defaults.theme ?? defaultThemeName,
  );
  const [fontOverride, setFontOverride] = useState<string | null>(
    plebThemeUiConfig.defaults.font,
  );

  const themes = useMemo(
    () => [...completeThemes].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );

  useEffect(() => {
    const { ui, defaults } = plebThemeUiConfig;

    if (ui.showThemeSelector) {
      const storedTheme = localStorage.getItem(STORAGE_KEYS.theme) as ThemeName | null;
      if (storedTheme && getCompleteTheme(storedTheme)) {
        setCurrentTheme(storedTheme);
      } else {
        setCurrentTheme(defaults.theme ?? defaultThemeName);
      }
    } else {
      setCurrentTheme(defaults.theme ?? defaultThemeName);
    }

    if (ui.showFontToggle) {
      const storedFont = localStorage.getItem(STORAGE_KEYS.font);
      const hasStoredFont = storedFont && availableFonts.some((font) => font.value === storedFont);
      setFontOverride(hasStoredFont ? storedFont : defaults.font);
    } else {
      setFontOverride(defaults.font);
    }

    if (ui.showThemeToggle) {
      const storedMode = localStorage.getItem(STORAGE_KEYS.mode);
      if (storedMode === "dark") {
        setIsDark(true);
      } else if (storedMode === "light") {
        setIsDark(false);
      } else {
        setIsDark(getInitialDarkMode());
      }
    } else {
      setIsDark(defaults.darkMode ?? getInitialDarkMode());
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const selectedTheme =
      getCompleteTheme(currentTheme) ??
      getCompleteTheme(defaultThemeName) ??
      completeThemes[0];

    const configuredFont = plebThemeUiConfig.defaults.font;
    const resolvedFontOverride = plebThemeUiConfig.ui.showFontToggle
      ? fontOverride
      : configuredFont;

    document.documentElement.classList.toggle("dark", isDark);
    applyPlebTheme(selectedTheme, isDark, resolvedFontOverride);

    if (plebThemeUiConfig.ui.showThemeSelector) {
      localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
    }

    if (plebThemeUiConfig.ui.showFontToggle) {
      if (fontOverride) {
        localStorage.setItem(STORAGE_KEYS.font, fontOverride);
      } else {
        localStorage.removeItem(STORAGE_KEYS.font);
      }
    }

    if (plebThemeUiConfig.ui.showThemeToggle) {
      localStorage.setItem(STORAGE_KEYS.mode, isDark ? "dark" : "light");
    }
  }, [currentTheme, fontOverride, isDark, mounted]);

  if (
    !plebThemeUiConfig.ui.showThemeSelector &&
    !plebThemeUiConfig.ui.showFontToggle &&
    !plebThemeUiConfig.ui.showThemeToggle
  ) {
    return null;
  }

  return (
    <div className="hidden items-center gap-2 md:flex">
      {plebThemeUiConfig.ui.showThemeSelector ? (
        <div className="relative">
          <Palette className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <select
            value={currentTheme}
            onChange={(event) => setCurrentTheme(event.target.value as ThemeName)}
            aria-label="Select theme"
            className="h-9 rounded-lg border border-border bg-card py-0 pr-8 pl-7 text-xs text-foreground outline-none transition-colors hover:bg-accent/40 focus:ring-2 focus:ring-ring"
          >
            {themes.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {plebThemeUiConfig.ui.showFontToggle ? (
        <div className="relative">
          <Type className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <select
            value={fontOverride ?? ""}
            onChange={(event) => setFontOverride(event.target.value || null)}
            aria-label="Select font"
            className="h-9 rounded-lg border border-border bg-card py-0 pr-8 pl-7 text-xs text-foreground outline-none transition-colors hover:bg-accent/40 focus:ring-2 focus:ring-ring"
          >
            <option value="">Theme Default Font</option>
            {availableFonts.map((font) => (
              <option key={font.value} value={font.value}>
                {font.name}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {plebThemeUiConfig.ui.showThemeToggle ? (
        <button
          type="button"
          onClick={() => setIsDark((value) => !value)}
          aria-label="Toggle dark mode"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      ) : null}
    </div>
  );
}
