// Типы можно экспортировать извне(исключение такое)
import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';

export { default as StoreProvider } from './ui/StoreProvider';
export { createReduxStore } from './config/store';

export {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
};
