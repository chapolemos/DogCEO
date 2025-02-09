import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_DOG_IMAGE,
  fetchDogImageSuccess,
  fetchDogImageError,
} from '../actions/dogBreedActions';
import { getBreedImage, getSubBreedImage } from '@/services/axiosClient';

function* fetchDogImageSaga(action) {
  try {
    let imageUrl;
    const breed = action.payload;

    if (breed.subBreed) {
      imageUrl = yield call(getSubBreedImage, breed.value, breed.subBreed);
    } else {
      imageUrl = yield call(getBreedImage, breed.value);
    }

    yield put(fetchDogImageSuccess(imageUrl));
  } catch (error) {
    //@TODO: Tratamento de erros mais eficaz. Usar toast?
    console.error("Erro buscando raças:", error);
    yield put(fetchDogImageError('Erro buscando uma imagem de cachorro.'));
  }
}

export function* watchFetchDogImage() {
  yield takeLatest(FETCH_DOG_IMAGE, fetchDogImageSaga);
}

