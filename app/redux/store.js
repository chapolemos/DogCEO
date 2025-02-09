import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer }  from './reducers';
import { rootSaga }  from './sagas';

/*Arquivo de inicialiação da store do Redux.*/

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),  
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
