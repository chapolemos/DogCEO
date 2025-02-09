/* Arquivo de ações do redux pra manter as calls de dispatch
mais limpas e organizadas.*/

export const FETCH_DOG_BREEDS = 'FETCH_DOG_BREEDS';
export const FETCH_DOG_BREEDS_SUCCESS = 'FETCH_DOG_BREEDS_SUCCESS';
export const FETCH_DOG_BREEDS_ERROR = 'FETCH_DOG_BREEDS_ERROR';
export const FETCH_DOG_IMAGE = 'FETCH_DOG_IMAGE';
export const FETCH_DOG_IMAGE_SUCCESS = 'FETCH_DOG_IMAGE_SUCCESS';
export const FETCH_DOG_IMAGE_ERROR = 'FETCH_DOG_IMAGE_ERROR';

export const fetchDogBreeds = () => ({ type: FETCH_DOG_BREEDS });
export const fetchDogBreedsSuccess = (breeds) => ({
  type: FETCH_DOG_BREEDS_SUCCESS,
  payload: breeds,
});
export const fetchDogBreedsError = (error) => ({
  type: FETCH_DOG_BREEDS_ERROR,
  payload: error,
});

export const fetchDogImage = (breed) => ({ type: FETCH_DOG_IMAGE, payload: breed });
export const fetchDogImageSuccess = (image) => ({
  type: FETCH_DOG_IMAGE_SUCCESS,
  payload: image,
});
export const fetchDogImageError = (error) => ({
  type: FETCH_DOG_IMAGE_ERROR,
  payload: error,
});
