import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DogBreedDropdown } from '@/components/DogBreedDropdown';
import { DogImageView } from '@/components/DogImageView';
import { useFetchDogBreeds } from '@/hooks/useFetchDogBreeds';
import { useFetchDogImage } from '@/hooks/useFetchDogImage';
export default function HomeScreen() {
  const { dogBreeds, loading: dogBreedsloading, error: dogBreedsError, fetchBreeds } = useFetchDogBreeds();
  const { dogImage, loading: dogImageLoading, error: dogImageError, fetchDogImage } = useFetchDogImage();
  const [selectedBreed, setSelectedBreed] = useState(null);

  // UseEffect com array de dependencias vazio pra executar o fetch de raças apenas uma vez quando o componente é montado.
  useEffect(() => {
    fetchBreeds();
  }, []);

  //Handler pra seleção de raças e fetch de imagens a partir do Axios
  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
  };

  //Handler pra usar o hook de fetch de imagens de cachorro.
  const handleFetchDogImage = () => {
    if (selectedBreed) {
      fetchDogImage(selectedBreed.value, selectedBreed.subBreed);
    }
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

      {/* Componente de Menu dropdown com autocomplete das raças
       e texto de aviso pra caso as raças ainda estejam carregando.*/}
      {dogBreedsloading ? (
        <ThemedText>Carregando raças...</ThemedText>
      ) : dogBreedsError ? (
        <ThemedText>Erro ao carregar raças: {dogBreedsError}</ThemedText>
      ) : (
        <DogBreedDropdown options={dogBreeds} onSelect={handleSelectBreed} />
      )}

      {/* Botão pra disparar o handler de fetch */}
      <View style={styles.buttonContainer}>
        <Button 
          title={dogImageLoading ? "Carregando imagem..." : "Mostrar Imagem"} 
          onPress={handleFetchDogImage} 
          disabled={dogImageLoading || !selectedBreed}
        />
      </View>

      {/* Exibição da imagem do cachorro 
      e mensagem de carregamento/erro*/}
      {dogImageLoading && <ThemedText>Carregando imagem...</ThemedText>}
      {dogImageError && <ThemedText>Erro ao carregar imagem: {dogImageError}</ThemedText>}
      {dogImage && (
        <DogImageView
          title={selectedBreed ? selectedBreed.label : null}
          imageUrl={dogImage}
        />
      )}
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
  buttonContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
});
