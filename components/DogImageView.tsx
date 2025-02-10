import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export const DogImageView = ({ imageUrl, title }) => {
  return (
    <ThemedView style={styles.imageContainer}>
      {/* Visualizador de imagem dos cachorros */}
      {/* <ThemedText type="subtitle">{title}</ThemedText> */}
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
    </ThemedView>
  );
};

//Container flexível pra design responsivo
const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    zIndex: -1,
  },
  image: {
    width: '100%',
    height: undefined,
    maxWidth: 800,
    maxHeight: 600,
    aspectRatio: 16 / 12,
    resizeMode: 'cover',
  },
});

