import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}
const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { t } = useTranslation('article-details');
    const { className } = props;
    return (
        <div className={classNames(classes.ArticlesPage, {}, [className])}>
            Articles Page
        </div>
    );
};

export default memo(ArticlesPage);
