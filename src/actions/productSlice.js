import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    category: '',
    id: '',
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        console: (state) => console.log(productSlice.action, state),
    },
});

export const { filter } = productSlice.actions;

export default productSlice.reducer;
