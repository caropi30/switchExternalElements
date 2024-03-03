import { createSlice } from '@reduxjs/toolkit';
import data from '../constants/data';

export const categorySlice = createSlice({
    name: 'category',
    initialState: data,
    reducers: {
        setCategory: (state) => state.filter((item) => (!item.combo === true ? item : item.combo)),
    },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
