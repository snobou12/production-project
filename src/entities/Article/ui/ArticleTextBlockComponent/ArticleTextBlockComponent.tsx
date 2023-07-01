import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}
const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
};

export default ArticleTextBlockComponent;
