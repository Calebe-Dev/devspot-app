import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from './src/contexts/ThemeContext';
import AppRoutes from './src/navigation/AppRoutes';
import { fontAssets } from './src/theme/fonts';

export default function App() {
  const [fontsLoaded] = useFonts(fontAssets);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
