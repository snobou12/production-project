import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { IUser, UserSchema } from '../types/user';

const initialState:UserSchema = {
    authData: undefined,
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },

        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
