import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('should return false', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });

    test('should work with empty', () => {
        const state:DeepPartial<StateSchema> = {

        };
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
