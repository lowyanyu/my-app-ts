import { createContext } from 'react';

export const ThemeContext = createContext<{[index: string]: any}>({
  dark: false
});