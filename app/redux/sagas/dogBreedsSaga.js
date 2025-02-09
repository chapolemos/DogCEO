import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_DOG_BREEDS,
  fetchDogBreedsSuccess,
  fetchDogBreedsError,
} from '../actions/dogBreedActions';
import { getAllBreeds } from '@/services/axiosClient';

/*Saga feita pra substituit o uso de um hook customizado pra fetching das raças pelo cliente do Axios 
pra separar a função do arquivo de serviço e permitir tratamento de erros, entre outros. */

function* fetchDogBreedsSaga() {
  try {
    const breedsData = yield call(getAllBreeds);
    const breedOptions = [];
    /*Um forEach pra construir a lista a ser enviada pro dropdown com 
            condicional pra verificar se há subraça e construir a label dinamicamente.*/
    Object.keys(breedsData).forEach((breed) => {
      if (breedsData[breed].length > 0) {
        breedsData[breed].forEach((subBreed) => {
          breedOptions.push({
            label: `${breed.charAt(0).toUpperCase() + breed.slice(1)} (${subBreed.charAt(0).toUpperCase() + subBreed.slice(1)})`,
            value: breed,
            subBreed: subBreed,
          });
        });
      } else {
        breedOptions.push({
          label: breed.charAt(0).toUpperCase() + breed.slice(1),
          value: breed,
          subBreed: null,
        });
      }
    });

    yield put(fetchDogBreedsSuccess(breedOptions));
  } catch (error) {
    //@TODO: Tratamento de erros mais eficaz. Usar toast?
    console.error("Erro buscando raças:", error);
    yield put(fetchDogBreedsError('Erro buscando raças de cachorro.'));
  }
}

export function* watchFetchDogBreeds() {
  yield takeLatest(FETCH_DOG_BREEDS, fetchDogBreedsSaga);
}

