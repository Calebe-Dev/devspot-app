import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '../contexts/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

// Caminhos usados na versão web (ex.: /sobre abre a tela "Sobre mim").
const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: '',
      About: 'sobre',
    },
  },
};

export default function AppRoutes() {
  const { isDark, colors } = useTheme();
  const baseTheme = isDark ? DarkTheme : DefaultTheme;

  const navigationTheme = {
    ...baseTheme,
    colors: { ...baseTheme.colors, background: colors.background },
  };

  return (
    <NavigationContainer
      theme={navigationTheme}
      linking={linking}
      documentTitle={{ formatter: () => 'DEV.SPOT' }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}
