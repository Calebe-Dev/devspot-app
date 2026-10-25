import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { fonts } from '../theme/fonts';

export default function Header({ onBack }) {
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      {onBack && (
        <Pressable
          style={styles.backButton}
          onPress={onBack}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <Ionicons name="chevron-back" size={26} color={colors.text} />
        </Pressable>
      )}

      <Text style={[styles.logo, { color: colors.text }]}>DEV.SPOT</Text>
      <MaterialCommunityIcons
        name="star-four-points-outline"
        size={32}
        color={colors.accent}
        style={styles.star}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  logo: {
    fontFamily: fonts.title,
    fontSize: 20,
  },
  star: {
    marginLeft: 6,
    marginTop: 14,
  },
});
