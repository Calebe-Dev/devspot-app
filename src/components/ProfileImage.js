import { Image, StyleSheet, View } from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

const FRAME_OFFSET = 12;

export default function ProfileImage({ source }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.frame, { borderColor: colors.border }]} />
      <View style={styles.imageWrapper}>
        <Image
          source={source}
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel="Foto de perfil"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
    paddingTop: FRAME_OFFSET,
    paddingRight: FRAME_OFFSET,
    marginBottom: 32,
  },
  frame: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: FRAME_OFFSET,
    left: FRAME_OFFSET,
    borderWidth: 2,
    borderRadius: 16,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
