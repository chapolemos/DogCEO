import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogBreeds, fetchDogImage } from '../redux/actions/dogBreedActions'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DogBreedDropdown } from '@/components/DogBreedDropdown';
import { DogImageView } from '@/components/DogImageView';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { dogBreeds, loading: dogBreedsLoading, error: dogBreedsError } = useSelector((state) => state.dogBreeds);
  const { dogImage, loading: dogImageLoading, error: dogImageError } = useSelector((state) => state.dogImage);

  const [selectedBreed, setSelectedBreed] = useState(null);
  // UseEffect com array de dependencias vazio pra executar o fetch de raças apenas uma vez quando o componente é montado.
  useEffect(() => {
    dispatch(fetchDogBreeds());
  }, []);

  //Handler pra seleção de raças no dropdown preenchido a partir do dispatch acima
  const handleSelectBreed = (breed) => {
    setSelectedBreed(breed);
  };

  //Handler pra usar o hook de fetch de imagens de cachorro chamando o dispatch do Redux.
  const handleFetchDogImage = () => {
    if (selectedBreed) {
      dispatch(fetchDogImage(selectedBreed));
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
      {dogBreedsLoading ? (
        <ThemedText>Carregando raças...</ThemedText>
      ) : dogBreedsLoading ? (
        <ThemedText>Erro ao carregar raças: {error}</ThemedText>
      ) : (
        <DogBreedDropdown options={dogBreeds} onSelect={handleSelectBreed} />
      )}

      {/* Botão pra disparar o handler de fetch */}
      <View style={styles.buttonContainer}>
        <Button
          title={dogImageLoading ? 'Carregando imagem...' : 'Mostrar Imagem'}
          onPress={handleFetchDogImage}
          disabled={dogImageLoading || !selectedBreed}
        />
      </View>

      {/* Exibição da imagem do cachorro 
      e mensagem de carregamento/erro*/}
      {/*@TODO: Adicionar um spinner/throbber de loading aqui com o texto carregando imagem*/}

      {dogImageLoading && <ThemedText style={{ alignSelf: 'center' }}>Carregando imagem...</ThemedText>}
      {dogImageError && <ThemedText style={{ alignSelf: 'center' }}>Erro ao carregar imagem: {dogImageError}</ThemedText>}
      {(dogImage && !dogImageLoading) && (
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
