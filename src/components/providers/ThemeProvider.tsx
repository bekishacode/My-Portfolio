"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = 'light' | 'dark' | 'salesforce' | 'midnight' | 'sunset';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  availableThemes: ThemeMode[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const handleSetTheme = (newTheme: ThemeMode) => {
    // Remove all theme classes
    document.documentElement.classList.remove('light', 'dark', 'salesforce', 'midnight', 'sunset');
    // Add new theme class
    document.documentElement.classList.add(newTheme);
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const availableThemes: ThemeMode[] = ['light', 'dark', 'salesforce', 'midnight', 'sunset'];

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}