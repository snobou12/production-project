import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';

export type ReducersList={
    [name in StateSchemaKey]?:Reducer;
}

type ReducersListEntry=[StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers:ReducersList;
    children:ReactNode;
    removeAfterUnmount?:boolean;
}
const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        reducers, removeAfterUnmount, children,
    } = props;
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        // Добавляем редюсер, вместе с маунтом компонента(асинхронная подгрузка для редюсеры(юзать можно для модалок и там где редюсеры не нужны, пока ui не отобразиться))
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@Destroy ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

export default DynamicModuleLoader;
