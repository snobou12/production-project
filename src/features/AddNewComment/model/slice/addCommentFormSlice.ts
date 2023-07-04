import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState:AddCommentFormSchema = {
    isLoading: false,
    error: undefined,
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText(state, action:PayloadAction<string>) {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
