import { useThemeState } from '@features/appTheme/useThemeState.ts';
import { useThemeStore } from '@features/appTheme/useThemeStore.ts';

export default function ThemeChanger() {
  const changeTheme = useThemeStore((state) => state.toggleTheme);
  useThemeState();

  return (
    <button
      onClick={changeTheme}
      type='button'
      className='rounded bg-black p-4 font-semibold text-white dark:bg-white dark:text-black'>
      Toggle Theme
    </button>
  );
}
