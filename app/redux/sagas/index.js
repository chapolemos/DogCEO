import { all } from 'redux-saga/effects';
import { watchFetchDogBreeds } from './dogBreedsSaga'
import { watchFetchDogImage } from './dogImagesSaga'

/*Saga raíz do projeto.*/

export function* rootSaga() {
    yield all([watchFetchDogBreeds(), watchFetchDogImage()]);
}
