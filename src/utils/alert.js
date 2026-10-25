import { Alert, Platform } from 'react-native';

// O Alert do React Native não funciona na versão web, então usamos o alert do navegador.
export function showAlert(message) {
  if (Platform.OS === 'web') {
    window.alert(message);
    return;
  }

  Alert.alert(message);
}
