import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { NATIVE_DRIVER } from '../utils/animation';

export default function FadeInView({ children, style, duration = 600 }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: NATIVE_DRIVER,
    }).start();
  }, [progress, duration]);

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [24, 0],
  });

  return (
    <Animated.View style={[style, { opacity: progress, transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}
