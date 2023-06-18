import { counterReducer } from './model/slice/CounterSlice';
import type { CounterSchema } from './model/types/counterSchema';

export { default as Counter } from './ui/Counter';
export {
    counterReducer,
    CounterSchema,
};
