import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader.tsx/DynamicModuleLoader';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useSelector } from 'react-redux';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import Icon from 'shared/ui/Icon/Icon';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';
import { getArticleDetailsLoading, getArticleDetailsData, getArticleDetailsError } from '../../model/selectors/getArticleDetails';
import EyeIcon from '../../../../shared/assets/icons/eye.svg';
import CalendarIcon from '../../../../shared/assets/icons/calendar.svg';
import { ArticleBlock, ArticleBlockType } from '../../../Article/model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

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

    const renderBlock = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} block={block} className={classes.block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block} className={classes.block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block} className={classes.block} />;
        default:
            return null;
        }
    }, []);
    const { className, articleId } = props;

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [dispatch, articleId]);

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t('article_loading_error')} />
        );
    } else {
        content = (
            <>
                <div className={classes.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={classes.avatar} />
                </div>
                <Text className={classes.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={classes.articleInfo}>
                    <Icon className={classes.icon} Svg={EyeIcon} />
                    <Text text={article?.views.toString()} />
                </div>
                <div className={classes.articleInfo}>
                    <Icon className={classes.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
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
