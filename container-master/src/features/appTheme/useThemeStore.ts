import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { ThemeTypes } from './themeConsts.ts';

const { Dark, Light } = ThemeTypes;

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
}

export const useThemeStore = create(
  devtools(
    persist<ThemeState>(
      (set) => ({
        theme: Light,
        toggleTheme: () =>
          set((state: ThemeState) => ({
            theme: state.theme === Light ? Dark : Light,
          })),
      }),
      {
        name: 'theme',
      }
    )
  )
);
