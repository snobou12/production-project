import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}
const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');
    const { className } = props;
    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            Article Details Page
        </div>
    );
};

export default memo(ArticleDetailsPage);
