import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import itemsReducer from './ItemsSlice';

export const Store = configureStore({
    reducer: {
        items: itemsReducer
    }
})