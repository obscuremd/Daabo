import { configureStore } from '@reduxjs/toolkit';
import DeviceReducer from './DeviceReducer';

export const store = configureStore({
  reducer: {
    device: DeviceReducer, // Add your device reducer to the store
    // Add other reducers if needed
  },
});
