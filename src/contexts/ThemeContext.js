import { createContext, useContext, useState } from 'react';

import { themes } from '../theme/themes';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    colors: isDark ? themes.dark : themes.light,
    toggleTheme: () => setIsDark((current) => !current),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
