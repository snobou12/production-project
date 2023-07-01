import { FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';
import { getArticleDetailsLoading, getArticleDetailsData, getArticleDetailsError } from '../../model/selectors/getArticleDetails';

interface ArticleDetailsProps {
    className?: string;
    articleId:string;
}

const reducers:ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = memo((props:ArticleDetailsProps) => {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const { className, articleId } = props;

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    let content;
    if (true) {
        content = (
            <div className={classes.avatar}>
                <Skeleton className={classes.title} width={200} height={200} border="50%" />
                <Skeleton className={classes.skeleton} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('article_loading_error')} />
        );
    } else {
        content = (
            <div>Article Details</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetails;
