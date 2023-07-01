import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema{
    counter:CounterSchema;
    user: UserSchema;

    // Асинхронные редюсеры
    loginForm?:LoginSchema;
    profile?:ProfileSchema;
    articleDetails?:ArticleDetailsSchema
}

// для код сплиттинга редакс

export type StateSchemaKey = keyof StateSchema // counter,user,loginForm..

export interface ReducerManager{
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key:StateSchemaKey, reducer:Reducer) => void;
    remove: (key:StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance,
}

export interface ThunkConfig<T>{
    rejectValue:T;
    extra:ThunkExtraArg,
    state: StateSchema
}
