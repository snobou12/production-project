// Типы можно экспортировать извне(исключение такое)
import type { StateSchema } from './config/StateSchema';

export { default as StoreProvider } from './ui/StoreProvider';
export { createReduxStore } from './config/store';

export {
    StateSchema,
};
