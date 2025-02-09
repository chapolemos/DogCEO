import { combineReducers } from 'redux';
import { dogBreedsReducer } from './dogBreedsReducer';
import { dogImageReducer } from './dogImageReducer';

export const rootReducer = combineReducers({
  dogBreeds: dogBreedsReducer,
  dogImage: dogImageReducer,
});


