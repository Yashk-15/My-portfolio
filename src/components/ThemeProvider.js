'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'light', toggle: () => {} });

export function ThemeProvider({ children }) {
  // Default to 'light' for SSR; the inline <script> in layout.js applies
  // the correct data-theme attribute before the first paint so there is no flash.
  const [theme, setTheme] = useState('light');

  // Sync React state with whatever the inline script already set on <html>
  useEffect(() => {
    const applied = document.documentElement.getAttribute('data-theme');
    if (applied) setTheme(applied);
  }, []);

  // Keep <html> data-theme and localStorage in sync whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // Always render children — no mounting gate that blocks FCP/LCP
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
