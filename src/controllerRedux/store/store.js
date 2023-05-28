import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/reducers';

/* У цьому коді створюється Redux-стор за допомогою функції configureStore з бібліотеки Redux Toolkit. configureStore отримує 
об'єкт конфігурації, який включає зведений редуктор (rootReducer) і, за необхідністю, додаткові параметри для налаштування стору. */

const store = configureStore({
  reducer: rootReducer,
});

export default store;