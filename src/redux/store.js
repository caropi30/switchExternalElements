import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../actions/counterSlice';
import categorySlice from '../actions/categorySlice';
import productsByCategorySlice from '../actions/productsByCategorySlice';

export const store = configureStore({
    reducer: {
        category: categorySlice,
        counter: counterReducer,
        productsByCategory: productsByCategorySlice,
    },
});
