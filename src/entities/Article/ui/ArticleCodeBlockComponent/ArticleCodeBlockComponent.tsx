import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}
const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};

export default ArticleCodeBlockComponent;
