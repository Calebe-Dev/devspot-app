import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppRoutes from './src/navigation/AppRoutes';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppRoutes />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
