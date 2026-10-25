import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../contexts/ThemeContext';
import { credits } from '../data/profile';
import { fonts } from '../theme/fonts';

export default function Footer() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: colors.primary, paddingBottom: 16 + insets.bottom },
      ]}
    >
      {credits.map((line) => (
        <Text key={line} style={[styles.text, { color: colors.onPrimary }]}>
          {line}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
});
