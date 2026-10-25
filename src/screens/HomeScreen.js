import { Linking, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import ScreenContainer from '../components/ScreenContainer';
import ToggleRow from '../components/ToggleRow';
import { useTheme } from '../contexts/ThemeContext';
import { profile, socialLinks } from '../data/profile';
import { fonts } from '../theme/fonts';
import { showAlert } from '../utils/alert';

export default function HomeScreen({ navigation }) {
  const { isDark, colors, toggleTheme } = useTheme();

  function handleToggle() {
    toggleTheme();
    showAlert('Switch pressionado');
  }

  async function openLink(url) {
    try {
      await Linking.openURL(url);
    } catch {
      showAlert('Não foi possível abrir o link.');
    }
  }

  return (
    <ScreenContainer>
      <Header />
      <ProfileImage source={profile.photo} />

      <Text style={[styles.headline, { color: colors.text }]}>
        {profile.headline}{' '}
        <Text style={{ color: colors.accent }}>{profile.headlineHighlight}</Text>
      </Text>
      <Text style={[styles.intro, { color: colors.text }]}>{profile.intro}</Text>

      <View style={styles.buttons}>
        <Button title="Sobre mim" onPress={() => navigation.navigate('About')} />
        <Button title="Entre em contato!" onPress={() => showAlert('Entre em contato')} />
      </View>

      <Text style={[styles.sectionTitle, { color: colors.text }]}>Acesse minhas redes:</Text>

      <View style={styles.buttons}>
        <ToggleRow label="Alterar visualização" value={!isDark} onValueChange={handleToggle} />
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            title={link.name}
            icon={link.icon}
            variant="outline"
            onPress={() => openLink(link.url)}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headline: {
    fontFamily: fonts.title,
    fontSize: 22,
    lineHeight: 34,
    marginBottom: 20,
  },
  intro: {
    fontFamily: fonts.regular,
    fontSize: 15,
    lineHeight: 26,
    marginBottom: 28,
  },
  buttons: {
    gap: 16,
  },
  sectionTitle: {
    fontFamily: fonts.title,
    fontSize: 17,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
});
