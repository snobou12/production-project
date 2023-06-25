import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { useDispatch } from 'react-redux';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?:StateSchema, navigate?:(to:To, options?:NavigateOptions)=>void) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        // Выпилили редюсер для модалки, так как он появлятеся только при маунте ui компонента(модалка же)
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // axios
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

type AppStore = ReturnType<typeof createReduxStore>;
type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
