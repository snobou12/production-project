import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Code from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block:ArticleCodeBlock
}
const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};

export default memo(ArticleCodeBlockComponent);
