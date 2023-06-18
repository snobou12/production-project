import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('should return counter value', () => {
        // as только в схемах лучше, ts getCounter ругается что получает DeepPartial
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        // Чтобы можно было обьявить только кусочек хранилища,а не все
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
