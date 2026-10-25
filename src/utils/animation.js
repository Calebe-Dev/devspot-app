import { Platform } from 'react-native';

// O driver nativo de animações não existe na versão web.
export const NATIVE_DRIVER = Platform.OS !== 'web';
