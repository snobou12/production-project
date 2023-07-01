import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// происходит 3 dispatch, 1 - loginByUsername, 2 - thunkApi.dispatch, 3 - return response.data, если сработал catch, то 2 раза dispatch(для тестов строка)
// что получаем с сервера /что принимаем как аргумент в фанк/ thunk config
export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<IUser>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            // лучше создать enum из вариантов ошибок, а уже в компоненте отрисовать нужный с переводом
            return rejectWithValue('error');
        }
    },
);
