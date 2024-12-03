// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer';

const store = configureStore({
  reducer: counterReducer,  // Your reducer is passed here
});

export default store;
