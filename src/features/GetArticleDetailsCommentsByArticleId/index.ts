export type { articleDetailCommentsSchema } from './model/types/articleDetailCommentSchema';

export { articleDetailsCommentsActions, articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';

export { getArticleCommentsIsLoading, getArticleCommentsError } from './model/selectors/comments';

export { getArticleComments } from './model/slices/articleDetailsCommentsSlice';
