import { createSlice } from '@reduxjs/toolkit';
import data from '../constants/data';

export const categorySlice = createSlice({
    name: 'productsByCategory',
    initialState: data,
    reducers: {
        setProductsByCategory: (state, category) =>
            state.filter((item) => (item.category === category ? item.category : null)),
    },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
