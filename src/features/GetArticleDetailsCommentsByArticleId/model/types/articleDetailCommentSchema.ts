import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';

// normalize data with entity adapter redux
export interface articleDetailCommentsSchema extends EntityState<IComment> {
    isLoading?:boolean;
    error?:string;
}
