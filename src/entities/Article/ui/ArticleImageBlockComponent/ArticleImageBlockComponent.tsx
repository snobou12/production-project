import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}
const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};

export default ArticleImageBlockComponent;
