import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();
    const { className } = props;

    if (!id) {
        return (
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                <Text theme={TextTheme.ERROR} title={t('article_not_found')} />
            </div>
        );
    }
    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails articleId={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
