"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themeIcons: Record<string, string> = {
  light: "☀️",
  dark: "🌙",
  salesforce: "☁️",
  midnight: "🌌",
  sunset: "🌅"
};

const themeNames: Record<string, string> = {
  light: "Light",
  dark: "Dark",
  salesforce: "Salesforce",
  midnight: "Midnight",
  sunset: "Sunset"
};

export default function ThemeSwitcher() {
  const { theme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Switch theme"
      >
        <span className="text-xl">{themeIcons[theme]}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 py-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50"
          >
            {availableThemes.map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => {
                  setTheme(themeOption);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors flex items-center gap-3 ${
                  theme === themeOption ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                <span className="text-xl">{themeIcons[themeOption]}</span>
                <span>{themeNames[themeOption]}</span>
                {theme === themeOption && (
                  <motion.span
                    layoutId="checkmark"
                    className="ml-auto text-primary"
                  >
                    ✓
                  </motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}