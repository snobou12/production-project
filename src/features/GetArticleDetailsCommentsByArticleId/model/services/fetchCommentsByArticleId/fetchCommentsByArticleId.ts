import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | undefined, ThunkConfig<string>>(
    'articlesDetails/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        if (!articleId) {
            return rejectWithValue('error');
        }
        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    // + получить сущность юзера, который оставил комментарий
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
