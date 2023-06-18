import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    const state:DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test('', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
