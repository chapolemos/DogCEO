import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DogBreedDropdown } from '@/components/DogBreedDropdown';
import { DogImageView } from '@/components/DogImageView';
import { useFetchDogBreeds } from '@/hooks/useFetchDogBreeds';
import { getBreedImage, getSubBreedImage } from '@/services/axiosClient';

export default function HomeScreen() {
  const { dogBreeds, loading: dogBreedsloading, error, fetchBreeds } = useFetchDogBreeds();
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [dogImage, setDogImage] = useState(null);

  // UseEffect com array de dependencias vazio pra executar o fetch de raças apenas uma vez quando o componente é montado.
  useEffect(() => {
    fetchBreeds();
  }, []);

  //Handler pra seleção de raças e fetch de imagens a partir do Axios
  const handleSelectBreed = async (breed) => {
    setSelectedBreed(breed);
    try {
      let imageUrl;
      //Condicional pra verificar se a raça vinda da DogCEO tem uma sub-raça pra montar o URL da requisição
      if (breed.subBreed) {
        imageUrl = await getSubBreedImage(breed.value, breed.subBreed);
      } else {
        imageUrl = await getBreedImage(breed.value);
      }
      setDogImage(imageUrl);
    } catch (error) {
      console.error('Error fetching dog image:', error);
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
      ) : error ? (
        <ThemedText>Erro ao carregar raças: {error}</ThemedText>
      ) : (
        <DogBreedDropdown options={dogBreeds} onSelect={handleSelectBreed} />
      )}

      {/* Exibição da raça selecionada pra teste */}
      {selectedBreed && (
        <ThemedView style={styles.selectedBreedContainer}>
          <ThemedText type="subtitle">Raça selecionada:</ThemedText>
          <ThemedText>{selectedBreed.label}</ThemedText>
        </ThemedView>
      )}

      {/* Exibição da imagem do cachorro */}
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
});
