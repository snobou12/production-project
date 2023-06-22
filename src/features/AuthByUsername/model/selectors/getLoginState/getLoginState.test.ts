import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return data', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: false,
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
            isLoading: false,
        });
    });

    test('should work with empty', () => {
        const state:DeepPartial<StateSchema> = {

        };
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
