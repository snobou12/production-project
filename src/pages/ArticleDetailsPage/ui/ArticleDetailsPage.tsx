import { FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import CommentList from 'features/GetArticleDetailsCommentsByArticleId/ui/CommentList/CommentList';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import {
    articleDetailsCommentsReducer, getArticleComments, getArticleCommentsError, getArticleCommentsIsLoading,
} from 'features/GetArticleDetailsCommentsByArticleId';
import { useSelector } from 'react-redux';
import { fetchCommentsByArticleId } from 'features/GetArticleDetailsCommentsByArticleId/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers:ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const { id } = useParams<{id:string}>();
    const { className } = props;
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);
    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]);

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                <Text theme={TextTheme.ERROR} title={t('article_not_found')} />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ArticleDetails articleId={id} />
                <Text className={classes.commentTitle} title={t('comments')} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
