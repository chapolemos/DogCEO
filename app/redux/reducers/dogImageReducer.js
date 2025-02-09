import {
  FETCH_DOG_IMAGE,
  FETCH_DOG_IMAGE_SUCCESS,
  FETCH_DOG_IMAGE_ERROR,
} from '../actions/dogBreedActions';

const initialState = {
  dogImage: null,
  loading: false,
  error: null,
};

export const dogImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_IMAGE:
      return { ...state, loading: true, error: null };
    case FETCH_DOG_IMAGE_SUCCESS:
      return { ...state, loading: false, dogImage: action.payload };
    case FETCH_DOG_IMAGE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

