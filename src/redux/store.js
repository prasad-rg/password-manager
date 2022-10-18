import {configureStore} from '@reduxjs/toolkit';
import passManagerReducer from './passManager';

export default configureStore({
  reducer: {
    passManager: passManagerReducer,
  },
});
