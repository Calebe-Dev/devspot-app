import { StyleSheet, Switch, Text, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { fonts } from '../theme/fonts';

export default function ToggleRow({ label, value, onValueChange }) {
  const { colors } = useTheme();

  return (
    <View style={styles.row}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.primary, true: colors.switchTrackOn }}
        ios_backgroundColor={colors.primary}
        thumbColor="#FFFFFF"
        activeThumbColor="#FFFFFF"
        accessibilityLabel={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 15,
  },
});
