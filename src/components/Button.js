import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';
import { fonts } from '../theme/fonts';
import { NATIVE_DRIVER } from '../utils/animation';

export default function Button({ title, onPress, variant = 'primary', icon }) {
  const { colors } = useTheme();
  const scale = useRef(new Animated.Value(1)).current;

  const isOutline = variant === 'outline';
  const textColor = isOutline ? colors.text : colors.onPrimary;

  function animateTo(value) {
    Animated.spring(scale, {
      toValue: value,
      speed: 40,
      bounciness: 8,
      useNativeDriver: NATIVE_DRIVER,
    }).start();
  }

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={[
          styles.button,
          isOutline
            ? [styles.outline, { borderColor: colors.border }]
            : { backgroundColor: colors.primary },
        ]}
        onPress={onPress}
        onPressIn={() => animateTo(0.96)}
        onPressOut={() => animateTo(1)}
        accessibilityRole="button"
      >
        {icon && (
          <Ionicons name={icon} size={24} color={isOutline ? colors.accent : textColor} />
        )}
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    minHeight: 56,
    borderRadius: 12,
    paddingHorizontal: 24,
  },
  outline: {
    borderWidth: 1.5,
    borderRadius: 8,
  },
  title: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
  },
});
