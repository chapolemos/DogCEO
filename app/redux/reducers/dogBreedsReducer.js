import {
  FETCH_DOG_BREEDS,
  FETCH_DOG_BREEDS_SUCCESS,
  FETCH_DOG_BREEDS_ERROR,
} from '../actions/dogBreedActions';

const initialState = {
  dogBreeds: [],
  loading: false,
  error: null,
};

export const dogBreedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_BREEDS:
      return { ...state, loading: true, error: null };
    case FETCH_DOG_BREEDS_SUCCESS:
      return { ...state, loading: false, dogBreeds: action.payload };
    case FETCH_DOG_BREEDS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
