import { StyleSheet, Text } from 'react-native';

import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import ScreenContainer from '../components/ScreenContainer';
import { useTheme } from '../contexts/ThemeContext';
import { profile } from '../data/profile';
import { fonts } from '../theme/fonts';

const profilePhoto = require('../assets/images/perfil.png');

export default function AboutScreen({ navigation }) {
  const { colors } = useTheme();

  // Na web a tela pode ser aberta direto pelo link /sobre, sem a Home no histórico.
  function handleBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.replace('Home');
    }
  }

  return (
    <ScreenContainer>
      <Header onBack={handleBack} />
      <ProfileImage source={profilePhoto} />

      <Text style={[styles.title, { color: colors.text }]}>Sobre mim</Text>
      {profile.about.map((paragraph) => (
        <Text key={paragraph} style={[styles.paragraph, { color: colors.text }]}>
          {paragraph}
        </Text>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.title,
    fontSize: 22,
    marginBottom: 20,
  },
  paragraph: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 26,
    marginBottom: 24,
  },
});
