import { useEffect } from 'react';

import { ThemeTypes } from './themeConsts.js';
import { useThemeStore } from './useThemeStore.js';

export const useThemeState = () => {
  const theme = useThemeStore((state: { theme: string }) => state.theme);

  useEffect(() => {
    const { Dark, Light } = ThemeTypes;
    const root = window.document.documentElement;
    root.classList.remove(theme === Dark ? Light : Dark);
    root.classList.add(theme);
  }, [theme]);
};
