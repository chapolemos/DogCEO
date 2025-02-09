import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DogBreedDropdown } from '@/components/DogBreedDropdown';

export default function HomeScreen() {
  const [selectedBreed, setSelectedBreed] = useState(null);

  {/* Objeto de raças temporario pra testar a UI */ }

  const dogBreeds = [
    { label: 'Bulldog', value: 'bulldog' },
    { label: 'Poodle', value: 'poodle' },
    { label: 'Labrador', value: 'labrador' },
    { label: 'Beagle', value: 'beagle' },
    { label: 'German Shepherd', value: 'german_shepherd' },
  ];

  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      {/* Componente de Menu dropdown com autocomplete das raças */}
      <DogBreedDropdown options={dogBreeds} onSelect={handleSelectBreed} />

      {/* Exibição da raça selecionada pra teste */}
      {selectedBreed && (
        <ThemedView style={styles.selectedBreedContainer}>
          <ThemedText type="subtitle">Raça selecionada:</ThemedText>
          <ThemedText>{selectedBreed.label}</ThemedText>
        </ThemedView>
      )}


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  selectedBreedContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
});
