import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails';
import { fetchCommentsByArticleId } from 'features/GetArticleDetailsCommentsByArticleId/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
import { addCommentFormActions } from '../../slice/addCommentFormSlice';

export const sendComment = createAsyncThunk<IComment, void, ThunkConfig<string>>(
    'addCommentForm/sendComment',
    async (_, thunkApi) => {
        const {
            extra, rejectWithValue, dispatch, getState,
        } = thunkApi;
        // можно изолировать на будущее, и текст просто аргументом принимать(чтобы можно было юзать не только для article, но и для любых других продуктов)
        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const articleId = getArticleDetailsData(getState())?.id;

        if (!userData || !text || !articleId) {
            return rejectWithValue('error');
        }
        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }
            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(articleId));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
